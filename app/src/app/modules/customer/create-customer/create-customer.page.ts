import { Component, OnInit } from '@angular/core';
import { CreateCustomerVm } from '../view-models/createCustomerVm.viewmodel';
import { CustomerService } from '../services/customer.service';
import { GenderVm } from '../view-models/genderVm.viewmodel';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.page.html',
  styleUrls: ['./create-customer.page.scss'],
})
export class CreateCustomerPage implements OnInit {

  newCustomer: CreateCustomerVm;
  genders: GenderVm[];

  constructor(private customerService: CustomerService) {
    this.newCustomer = new CreateCustomerVm();
  }

  ngOnInit() {
    this.getGenders();
  }

  async createAsync() {

    let createResult = await this.customerService.createNewCustomerAsync(this.newCustomer);

    if (createResult.isValid) {
      alert("Customer criado");
      this.newCustomer = new CreateCustomerVm();
    }
  }

  async getGenders() {

    let result = await this.customerService.getGendersAsync();

    if (result.isValid)
      this.genders = result.returnObject;
  }

  sendForm() {
    this.createAsync();
  }

}
