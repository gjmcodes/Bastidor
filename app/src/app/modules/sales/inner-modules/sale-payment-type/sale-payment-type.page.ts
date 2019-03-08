import { Component, OnInit } from '@angular/core';
import { SaleFormConstants } from '../sale-form/sale-form.constants';

@Component({
  selector: 'app-sale-payment-type',
  templateUrl: './sale-payment-type.page.html',
  styleUrls: ['./sale-payment-type.page.scss'],
})
export class SalePaymentTypePage implements OnInit {

  totalValue : number;

  constructor() { 

  }

  ngOnInit() {
    debugger
    let salesTotal = sessionStorage.getItem(SaleFormConstants.PRODUCTS_TOTAL);
    this.totalValue = parseFloat(salesTotal);
    sessionStorage.removeItem(SaleFormConstants.PRODUCTS_TOTAL);
  }

}
