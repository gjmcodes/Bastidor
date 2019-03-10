import { Component, OnInit } from '@angular/core';
import { createPaymentType } from './models/createPaymentType.model';
import { paymentTypeTax } from './models/paymentTypeTax.model';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.page.html',
  styleUrls: ['./payment-type.page.scss'],
})
export class PaymentTypePage implements OnInit {

  newPaymentType : createPaymentType;
  newDiscountTax : paymentTypeTax;
  newDiscountTaxes : paymentTypeTax[];
  newInterestTaxes : paymentTypeTax[];

  constructor() {
    this.newDiscountTaxes = new Array();
    this.newInterestTaxes = new Array();
   }

  ngOnInit() {
  }

}
