import { Component, OnInit } from '@angular/core';
import { CreateGenericCustomerVm } from '../view-models/createGenericCustomerVm.viewmodel';
import { CustomerService } from '../services/customer.service';
import { GenderVm } from '../view-models/genderVm.viewmodel';

@Component({
  selector: 'app-create-generic',
  templateUrl: './create-generic.page.html',
  styleUrls: ['./create-generic.page.scss'],
})
export class CreateGenericPage implements OnInit {

  newCustomer: CreateGenericCustomerVm;
  genders: GenderVm[];

  constructor(private customerService: CustomerService) {
    this.newCustomer = new CreateGenericCustomerVm();
  }


  ngOnInit() {
    this.getGenders();
  }

  async createAsync() {
    let result = await this.customerService.createNewGenericCustomerAsync(this.newCustomer);

    if (result.isValid) {
      this.newCustomer = new CreateGenericCustomerVm();
      alert("Cadastraso com sucesso!");
    }
  }

  async getGenders() {

    let result = await this.customerService.getGendersAsync();

    if (result.isValid)
      this.genders = result.returnObject;
  }
}
