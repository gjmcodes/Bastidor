import { Component, OnInit } from '@angular/core';
import { SalesConstants } from '../constants/sales.constants';
import { SaleFinalizationService } from '../services/sale-finalization.service';
import { SalePaymentViewModel } from '../view-models/saleFinalizationVm.viewmodel';

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

  constructor(private saleFinalizationService: SaleFinalizationService) { }

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

}
