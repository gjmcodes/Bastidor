import { Injectable } from '@angular/core';
import { CreatePaymentTypeVm } from 'src/app/modules/payment-type/view-models/createPaymentTypeVm.model';
import { CreatePaymentType } from 'src/app/core/features/payment-type/models/create-payment-type.model';
import { PaymentTypeTaxVm } from 'src/app/modules/payment-type/view-models/paymentTypeTaxVm.model';
import { PaymentTypeTax } from 'src/app/core/features/payment-type/models/payment-type-tax.model';
import { SalePaymentType } from 'src/app/core/features/payment-type/models/sale-payment-type.model';
import { SalePaymentViewModel } from 'src/app/modules/sales/inner-modules/sale-payment/view-models/sale-payment.viewmodel';
import { CreateProductVm } from 'src/app/modules/stock/view-models/createProductVm.viewmodel';
import { CreateProduct } from 'src/app/core/features/stock/models/create-product.model';

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
            createProductVm.amount);

        return model;
    }
}