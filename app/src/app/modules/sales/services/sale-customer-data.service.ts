import { Injectable } from '@angular/core';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { CustomerDataSearchViewModel } from '../view-models/customerDataSearchVm.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class SaleCustomerDataService {

  constructor() { }

  async searchCustomerByNationalIdAsync(id: string): Promise<OperationResult> {
    let opsResult = new OperationResult();

    if (id === '11111111111') {
      let vm = new CustomerDataSearchViewModel();
      vm.fullName = "João Balão";
      vm.email = "joao.balao@gmail.com";
      vm.contact = "(32) 98899-7766";

      opsResult.isValid = true;
      opsResult.returnObject = vm;
      
      return opsResult;
    }

    opsResult.isValid = false;
    opsResult.message = "Não foi possível encontrar um cliente";

    return opsResult;
  }
}
