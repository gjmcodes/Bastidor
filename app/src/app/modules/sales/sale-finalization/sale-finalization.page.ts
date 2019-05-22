import { Component, OnInit } from '@angular/core';
import { SalesConstants } from '../constants/sales.constants';
import { SaleFinalizationService } from '../services/sale-finalization.service';
import { SalePaymentViewModel } from '../view-models/salePaymentVm.viewmodel';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateGenericCustomerPage } from '../../customer/create-generic-customer/create-generic-customer.page';
import { SaleFinalizationViewModel } from '../view-models/saleFinalizationVm.viewmodel';

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
  saleFinalization: SaleFinalizationViewModel;
  customerId: string;

  constructor(private saleFinalizationService: SaleFinalizationService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
    let numStr = sessionStorage.getItem(SalesConstants.PRODUCTS_TOTAL);
    this.productsTotal = Number.parseFloat(numStr);

    this.saleFinalizationService.getSalePamentTypeAsync().then(res => {
      this.salePayments = res.returnObject;
    });

    this.saleFinalization = new SaleFinalizationViewModel();
  }

  changeSelectedPaymentType(event: any, obj: any) {
    let selectedId = event.target.value;

    this.selectedPaymentType = this.salePayments.filter(x => x.id == selectedId)[0];
  }

  finishSale() {

    //Gerar ID local da venda.
    const saleId = 'sale-000-01';
    this.customerId = 'customer-0001';
    let paymentMethodId = 'method-1';
    let paymentInstallments = 0;
    let productsIds = new Array();

    //gerar viewmodel de finalização da página

    //Verificar se a venda é anônima
    const saleCustomerData = this.saleFinalizationService.getSaleCustomerData();

    if (saleCustomerData == null) {
      this.openGenericCustomerAlertAsync();
      //obter ID do customer após salvar modal
    }
    this.saleFinalizationService.createNewSaleAsync(
      this.customerId,
      saleId,
      paymentMethodId,
      paymentInstallments,
      productsIds
    );
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

  async openGenericCustomerModal() {
    const modal = await this.modalController.create({
      component: CreateGenericCustomerPage
    });

    modal.onDidDismiss().then(data => {
      console.log(data);
    });


    return await modal.present();

  }
}
