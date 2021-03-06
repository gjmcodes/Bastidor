import { Injectable } from '@angular/core';
import { CreatePaymentTypeVm } from 'src/app/modules/pricing/view-models/createPaymentTypeVm.model';
import { CreatePaymentType } from 'src/app/core/features/payment-type/models/create-payment-type.model';
import { PaymentTypeTaxVm } from 'src/app/modules/pricing/view-models/paymentTypeTaxVm.model';
import { PaymentTypeTax } from 'src/app/core/features/payment-type/models/payment-type-tax.model';
import { SalePaymentType } from 'src/app/core/features/payment-type/models/sale-payment-type.model';
import { SalePaymentViewModel } from 'src/app/modules/sales/view-models/salePaymentVm.viewmodel';
import { IndexPaymentTypeVm } from 'src/app/modules/pricing/view-models/indexPaymentTypeVm.models';

@Injectable({
    providedIn: 'root'
})

export class PaymentTypeFactory {

    constructor() { }


    mapCreateTypeVmToModel(vm: CreatePaymentTypeVm): CreatePaymentType {

        let taxesModels = new Array();
        vm.taxes.forEach(element => {
            let taxModel = this.mapTaxVmToModel(element);
            taxesModels.push(taxModel);
        });

        let model = new CreatePaymentType(
            vm.name,
            vm.maxMonthlyInstallments,
            taxesModels
        );

        return model;
    }

    mapTaxVmToModel(vm: PaymentTypeTaxVm): PaymentTypeTax {
        let model = new PaymentTypeTax(
            vm.description,
            vm.value
        );

        return model;
    }

    mapToSalePaymentVm(model: SalePaymentType) {
        let vm = new SalePaymentViewModel(
            model.id,
            model.name,
            model.maxMonthlyInstallments,
            model.totalFee);

        return vm;
    }

    mapToIndexSalePaymentVm(model: SalePaymentType) {
        let vm = new IndexPaymentTypeVm();
        vm.name = model.name;
        vm.maxMonthlyInstallments = model.maxMonthlyInstallments;
        vm.totalTax = model.totalFee;

        return vm;
    }
}