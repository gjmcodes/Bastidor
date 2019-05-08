import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { CustomerDataSearchViewModel } from '../view-models/customerDataSearchVm.viewmodel';
import { SaleCustomerDataService } from '../services/sale-customer-data.service';
import { CreatePage } from '../../customer/create/create.page';

@Component({
  selector: 'app-sale-customer-data',
  templateUrl: './sale-customer-data.page.html',
  styleUrls: ['./sale-customer-data.page.scss'],
})
export class SaleCustomerDataPage implements OnInit {

  nationalIdInput: string;
  customerDataSearch: CustomerDataSearchViewModel;
  newCustomerEnabled: boolean;

  constructor(private router: Router,
    private saleCustomerDataService: SaleCustomerDataService,
    private modalController: ModalController) {
    this.customerDataSearch = new CustomerDataSearchViewModel();
  }

  ngOnInit() {
  }

  goNext() {
    this.router.navigateByUrl('sales/sale-products');
  }

  checkNationalIdLength() {
    const cpfLength = 11;

    if (this.nationalIdInput.length >= cpfLength) {
      document.getElementById('searchField').classList.remove('item-has-focus');
      this.searchCustomerAsync();
    } else {
      this.newCustomerEnabled = false;
    }
  }

  async searchCustomerAsync() {
    let result = await this.saleCustomerDataService.searchCustomerByNationalIdAsync(this.nationalIdInput);
    if (result.isValid) {
      this.customerDataSearch = result.returnObject;
    } else {
      alert(result.message);
      this.customerDataSearch = new CustomerDataSearchViewModel();
      this.newCustomerEnabled = true;
    }
  }

  async openNewCustomerModalPageAsync() {
    const modal = await this.modalController.create({
      component: CreatePage
    });

    return await modal.present();
  }
}
