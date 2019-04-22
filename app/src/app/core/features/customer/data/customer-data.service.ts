import { Injectable } from '@angular/core';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { CreateCustomer } from '../models/createCustomer.model';
import { Gender } from '../models/gender.model';
import { CreateGenericCustomer } from '../models/createGenericCustomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor() { }

  async createCustomerAsync(newCustomer: CreateCustomer): Promise<OperationResult> {
    //TODO
    //Adicionar service backend

    let array = new Array();
    let ptArr = sessionStorage.getItem('customers');
    if (ptArr != null) {
      let json = JSON.parse(ptArr);
      for (var i = 0; i < json.length; i++) {
        var counter = json[i];
        array.push(counter);
      }
    }
    array.push(newCustomer);

    sessionStorage.setItem('customers', JSON.stringify(array));


    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;
  }

  async getGendersAsync(): Promise<OperationResult> {
    let genders = new Array();

    let male = new Gender("M", "Masculino");
    let female = new Gender("F", "Feminino");
    let other = new Gender("O", "Outro");

    genders.push(male);
    genders.push(female);
    genders.push(other);


    let opsResult = new OperationResult();
    opsResult.isValid = true;
    opsResult.returnObject = genders;

    return opsResult;
  }

  async createGenericCustomerAsync(newCustomer: CreateGenericCustomer): Promise<OperationResult> {
    //TODO
    //Adicionar service backend

    let array = new Array();
    let ptArr = sessionStorage.getItem('generic-customers');
    if (ptArr != null) {
      let json = JSON.parse(ptArr);
      for (var i = 0; i < json.length; i++) {
        var counter = json[i];
        array.push(counter);
      }
    }
    array.push(newCustomer);

    sessionStorage.setItem('generic-customers', JSON.stringify(array));


    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;
  }
}
