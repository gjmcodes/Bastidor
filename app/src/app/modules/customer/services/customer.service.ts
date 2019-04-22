import { Injectable } from '@angular/core';
import { CustomerFactory } from 'src/app/factories/features/customer/customer.factory';
import { CustomerDataService } from 'src/app/core/features/customer/data/customer-data.service';
import { CreateCustomerVm } from '../view-models/createCustomerVm.viewmodel';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { CreateGenericCustomerVm } from '../view-models/createGenericCustomerVm.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private customerFactory: CustomerFactory,
    private customerDataService: CustomerDataService) {
  }

  async createNewCustomerAsync(newCustomer: CreateCustomerVm): Promise<OperationResult> {

    let customer = this.customerFactory.mapCreateCustomerVmToModel(newCustomer);

    let opsResult = await this.customerDataService.createCustomerAsync(customer);

    return opsResult;
  }

  async getGendersAsync(): Promise<OperationResult> {
    let opsResult = await this.customerDataService.getGendersAsync();

    if (!opsResult.isValid)
      return opsResult;

    let genders = this.customerFactory.mapGendersToVm(opsResult.returnObject);

    opsResult.returnObject = genders;

    return opsResult;
  }

  async createNewGenericCustomerAsync(genericCustomer: CreateGenericCustomerVm): Promise<OperationResult> {
    let customer = this.customerFactory.mapCreateGenericCustomerVmToModel(genericCustomer);

    let opsResult = await this.customerDataService.createGenericCustomerAsync(customer);

    return opsResult;
  }
}
