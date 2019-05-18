import { Injectable } from '@angular/core';
import { PaymentTypeFactory } from 'src/app/factories/features/payment-type/payment-type.factory';
import { PaymentTypeDataService } from 'src/app/core/features/payment-type/data/payment-type-data.service';
import { CreatePaymentTypeVm } from '../view-models/createPaymentTypeVm.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  constructor(private paymentTypeFactory: PaymentTypeFactory,
    private paymentTypeDataService: PaymentTypeDataService) { }


  async createNewPaymentTypeAsync(vm: CreatePaymentTypeVm): Promise<OperationResult> {

    let model = this.paymentTypeFactory.mapCreateTypeVmToModel(vm);

    let result = await this.paymentTypeDataService.addNewPaymentTypeAsync(model);

    return result;
  }

  async getPaymentTypesAsync(): Promise<OperationResult> {
    let paymentTypes = await this.paymentTypeDataService.getPaymentTypesForIndexAsync();

    let vms = new Array();

    paymentTypes.forEach(element => {

      let vm = this.paymentTypeFactory.mapToIndexSalePaymentVm(element);
      vms.push(vm);
    });

    let opsResult = new OperationResult();
    opsResult.isValid = true;
    opsResult.returnObject = vms;
    return opsResult;
  }

}
