import { Injectable } from '@angular/core';
import { CreatePaymentTypeVm } from 'src/app/modules/payment-type/view-models/createPaymentTypeVm.model';
import { CreatePaymentType } from 'src/app/core/features/payment-type/models/create-payment-type.model';
import { PaymentTypeTaxVm } from 'src/app/modules/payment-type/view-models/paymentTypeTaxVm.model';
import { PaymentTypeTax } from 'src/app/core/features/payment-type/models/payment-type-tax.model';

@Injectable({
    providedIn: 'root'
})

export class PaymentTypeFactory {

    constructor() { }


    mapCreateTypeVmToModel(vm: CreatePaymentTypeVm): CreatePaymentType {

        let taxesModels = new Array();
        vm.taxes.forEach(element => {
            let taxModel = this.mapTaxVmToModel(element);
            debugger
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
            vm.value,
            vm.isDiscount
        );

        return model;
    }
}