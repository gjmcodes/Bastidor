import { Injectable } from '@angular/core';
import { CreatePaymentType } from '../models/create-payment-type.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeDataService {

  constructor() { }

  async addNewPaymentTypeAsync(createPaymentType: CreatePaymentType): Promise<OperationResult> {
    //TODO
    //Adicionar service backend
    sessionStorage.setItem('payment-type', JSON.stringify(createPaymentType));

    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;
  }
}
