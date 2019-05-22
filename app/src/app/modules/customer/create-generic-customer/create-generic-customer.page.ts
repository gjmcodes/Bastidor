import { Component, OnInit } from '@angular/core';
import { CreateGenericCustomerVm } from '../view-models/createGenericCustomerVm.viewmodel';
import { CustomerService } from '../services/customer.service';
import { GenderVm } from '../view-models/genderVm.viewmodel';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-generic-customer',
  templateUrl: './create-generic-customer.page.html',
  styleUrls: ['./create-generic-customer.page.scss'],
})
export class CreateGenericCustomerPage implements OnInit {


  newCustomer: CreateGenericCustomerVm;
  genders: GenderVm[];

  constructor(private customerService: CustomerService,
    private modalController: ModalController) {
    this.newCustomer = new CreateGenericCustomerVm();
  }


  ngOnInit() {
    this.getGenders();
  }

  async createAsync() {

    if (this.newCustomer.isValid()) {

      let result = await this.customerService.createNewGenericCustomerAsync(this.newCustomer);

      if (result.isValid) {
        this.newCustomer = new CreateGenericCustomerVm();
        alert("Cadastraso com sucesso!");

        //TODO 
        //obter ID gerado de generic customer
        const customerId = 'generic-00001';

        this.modalController.dismiss({
          'result': customerId
        });
      }
    }
  }

  async getGenders() {

    let result = await this.customerService.getGendersAsync();

    if (result.isValid)
      this.genders = result.returnObject;
  }
}
