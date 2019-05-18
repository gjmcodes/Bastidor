import { Component, OnInit } from '@angular/core';
import { SalesConstants } from '../constants/sales.constants';
import { SaleFinalizationService } from '../services/sale-finalization.service';
import { SalePaymentViewModel } from '../view-models/saleFinalizationVm.viewmodel';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateGenericCustomerPage } from '../../customer/create-generic-customer/create-generic-customer.page';

@Component({
  selector: 'app-sale-finalization',
  templateUrl: './sale-finalization.page.html',
  styleUrls: ['./sale-finalization.page.scss'],
})
export class SaleFinalizationPage implements OnInit {

  productsTotal: number;
  finalValue: number;
  salePayments: SalePaymentViewModel[];
  selectedPaymentType: SalePaymentViewModel;

  constructor(private saleFinalizationService: SaleFinalizationService,
    private actionSheetController: ActionSheetController,
    private modalController : ModalController,
    private router: Router) { }

  ngOnInit() {
    let numStr = sessionStorage.getItem(SalesConstants.PRODUCTS_TOTAL);
    this.productsTotal = Number.parseFloat(numStr);

    this.saleFinalizationService.getSalePamentTypeAsync().then(res => {
      this.salePayments = res.returnObject;
    });
  }

  changeSelectedPaymentType(event: any, obj: any) {
    let selectedId = event.target.value;

    this.selectedPaymentType = this.salePayments.filter(x => x.id == selectedId)[0];
  }

  finishSale() {
    //Exibir modal de resumo

    //Verificar se a venda é anônima
    const isAnonymousSale = this.saleFinalizationService.getAnonymousSaleConfiguration();

    alert('finish sale!');

    if (isAnonymousSale) {
      this.openGenericCustomerAlertAsync();
    }
  }

  async openGenericCustomerAlertAsync() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Deseja associar a venda a um perfil genêrico? ',
      buttons: [{
        text: 'Não',
        role: 'cancel',
        icon: 'close',
      }, {
        text: 'Sim',
        icon: 'checkmark',
        handler: () => {
          this.openGenericCustomerModal();
        }
      }]
    });
    await actionSheet.present();
  }

  async openGenericCustomerModal(){
    const modal = await this.modalController.create({
      component: CreateGenericCustomerPage
    });

    return await modal.present();
  
  }
}
