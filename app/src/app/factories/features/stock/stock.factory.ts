import { Injectable } from '@angular/core';
import { CreateProductVm } from 'src/app/modules/stock/view-models/createProductVm.viewmodel';
import { CreateProduct } from 'src/app/core/features/stock/models/create-product.model';
import { StockProductPricing } from 'src/app/core/features/stock/models/stockProductPricing.model';
import { ProductPricingVm } from 'src/app/modules/stock/view-models/productPricingVm.viewmodel';
import { Product } from 'src/app/core/features/stock/models/product.model';
import { StockProductVm } from 'src/app/modules/stock/view-models/stockProductVm.viewmodel';

@Injectable({
    providedIn: 'root'
})

export class StockFactory {

    constructor() { }

    mapCreateProductVmToModel(createProductVm: CreateProductVm): CreateProduct {

        let model = new CreateProduct(
            createProductVm.name,
            createProductVm.color,
            createProductVm.price,
            createProductVm.costPrice,
            createProductVm.amount,
            createProductVm.size);

        return model;
    }

    mapProductPricingToVm(productPricing: StockProductPricing): ProductPricingVm {
        let vm = new ProductPricingVm();
        vm.highestPaymentTypeTax = productPricing.highestPaymentTypeTax;
        vm.profitPercentage = productPricing.profitPercentage;

        return vm;
    }

    mapProductsToVm(products: Product[]): StockProductVm[] {
        let vms = new Array();

        products.forEach(element => {
            let vm = new StockProductVm();
            vm.amount = element.amount;
            vm.color = element.color;
            vm.costPrice = element.costPrice;
            vm.name = element.name;
            vm.price = element.price;

            vms.push(vm);
        });

        return vms;
    }
}