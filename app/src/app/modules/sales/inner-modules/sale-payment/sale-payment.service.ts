import { Injectable } from '@angular/core';
import { SalePaymentType } from 'src/app/core/features/payment-type/models/sale-payment-type.model';
import { PaymentTypeDataService } from 'src/app/core/features/payment-type/data/payment-type-data.service';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { PaymentTypeFactory } from 'src/app/factories/features/payment-type/payment-type.factory';

@Injectable({
    providedIn: 'root'
})
export class SalePaymentService {

    constructor(private paymentTypeDataService: PaymentTypeDataService,
        private paymentTypeFactory: PaymentTypeFactory) { }


    async getSalePamentTypeAsync(): Promise<OperationResult> {

        let paymentTypes = await this.paymentTypeDataService.getPaymentTypesForSalesAsync();

        let opResult = new OperationResult();

        let paymentTypesVms = new Array();

        paymentTypes.forEach(element => {
            let vm = this.paymentTypeFactory.mapToSalePaymentVm(element);
            paymentTypesVms.push(vm);
        });

        opResult.returnObject = paymentTypesVms;

        return opResult;
    }
}
