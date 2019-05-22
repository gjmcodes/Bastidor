import { Injectable } from '@angular/core';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { PaymentTypeFactory } from 'src/app/factories/features/payment-type/payment-type.factory';
import { PaymentTypeDataService } from 'src/app/core/features/payment-type/data/payment-type-data.service';
import { CustomerDataSearchViewModel } from '../view-models/customerDataSearchVm.viewmodel';
import { CustomerFactory } from 'src/app/factories/features/customer/customer.factory';
import { SaleCustomer } from 'src/app/core/features/sale/models/saleCustomer.model';
import { SaleFinalizationViewModel } from '../view-models/saleFinalizationVm.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class SaleFinalizationService {

  constructor(private paymentTypeDataService: PaymentTypeDataService,
    private paymentTypeFactory: PaymentTypeFactory,
    private customerFactory: CustomerFactory) { }


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

  setSaleCustomerData(saleSearchCustomerData: CustomerDataSearchViewModel) {

    let customerData = this.customerFactory.mapCustomerDataSearchToSaleCustomer(saleSearchCustomerData);
    sessionStorage.setItem('sale-customer-data', JSON.stringify(customerData));
  }

  getSaleCustomerData(): SaleCustomer {
    let value = sessionStorage.getItem('sale-customer-data');

    if (value == null || value == '')
      return null;

    return JSON.parse(value)
  }

  createNewSaleAsync(
    customerId : string,
    saleLocalId : string,
    paymentMethodId : string,
    paymentInstallments : number,
    productsIds : string[]) {

  }
}
