import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { CustomerDataSearchViewModel } from '../view-models/customerDataSearchVm.viewmodel';
import { SaleCustomerDataService } from '../services/sale-customer-data.service';
import { CreateCustomerPage } from '../../customer/create-customer/create-customer.page';
import { SaleFinalizationService } from '../services/sale-finalization.service';

@Component({
  selector: 'app-sale-customer-data',
  templateUrl: './sale-customer-data.page.html',
  styleUrls: ['./sale-customer-data.page.scss'],
})
export class SaleCustomerDataPage implements OnInit {

  nationalIdInput: string;
  customerDataSearch: CustomerDataSearchViewModel;
  newCustomerEnabled: boolean;
  identifiedCustomer: boolean;

  constructor(private router: Router,
    private saleCustomerDataService: SaleCustomerDataService,
    private saleFinalizationService: SaleFinalizationService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController) {
    this.customerDataSearch = new CustomerDataSearchViewModel();
  }

  ngOnInit() {
    this.identifiedCustomer = false;
  }

  goNext() {


    if (this.customerIsFilled()) {
      this.saleFinalizationService.setSaleCustomerData(this.customerDataSearch);
      this.routeToSalesProducts();
    } else {
      this.openNonIdentifiedCustomerModalAsync();
    }
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

  customerIsFilled(){
    return this.customerDataSearch != null 
    && this.customerDataSearch.customerId != null
    && this.customerDataSearch.customerId != '';
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
      component: CreateCustomerPage
    });

    return await modal.present();
  }

  routeToSalesProducts(){
    this.router.navigateByUrl('sales/sale-products');
  }

  async openNonIdentifiedCustomerModalAsync() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Atenção! ',
      subHeader: 'Deseja prosseguir com uma venda anônima?',
      buttons: [{
        text: 'Não',
        role: 'cancel',
        icon: 'close',
      }, {
        text: 'Sim',
        icon: 'checkmark',
        handler: () => {
          this.routeToSalesProducts();
        }
      }]
    });
    await actionSheet.present();
  }
}
