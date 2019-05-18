import { Injectable } from '@angular/core';
import { CreatePaymentType } from '../models/create-payment-type.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { SalePaymentType } from '../models/sale-payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeDataService {

  constructor() { }

  async addNewPaymentTypeAsync(createPaymentType: CreatePaymentType): Promise<OperationResult> {
    //TODO
    //Adicionar service backend

    let array = new Array();
    let ptArr = sessionStorage.getItem('payment-type');
    if (ptArr != null) {
      let json = JSON.parse(ptArr);
      for (var i = 0; i < json.length; i++) {
        var counter = json[i];
        array.push(counter);
      }
    }
    array.push(createPaymentType);

    sessionStorage.setItem('payment-type', JSON.stringify(array));

    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;
  }

  async getPaymentTypesForSalesAsync(): Promise<SalePaymentType[]> {
    let _arr = JSON.parse(sessionStorage.getItem('payment-type'));
    let payments = new Array();

    if (_arr == null)
      return payments;

    for (var i = 0; i < _arr.length; i++) {
      var counter = _arr[i];
      let model = new SalePaymentType();

      //TODO
      //Remover 
      model.id = (i + 1).toString();
      model.maxMonthlyInstallments = counter.maxMonthlyInstallments;
      model.name = counter.name;
      model.totalFee = 10;
      model.hasDiscount = true;

      payments.push(model);
    }

    return payments;
  }

  async getPaymentTypesForIndexAsync(): Promise<SalePaymentType[]> {
    let _arr = JSON.parse(sessionStorage.getItem('payment-type'));
    let payments = new Array();

    if (_arr == null)
      return payments;

    for (var i = 0; i < _arr.length; i++) {
      var counter = _arr[i];
      let model = new SalePaymentType();

      //TODO
      //Remover 
      model.id = (i + 1).toString();
      model.maxMonthlyInstallments = counter.maxMonthlyInstallments;
      model.name = counter.name;
      model.totalFee = 10;
      model.hasDiscount = true;

      payments.push(model);
    }

    return payments;
  }
}
