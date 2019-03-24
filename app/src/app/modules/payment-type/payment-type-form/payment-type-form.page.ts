import { Component, OnInit } from '@angular/core';
import { paymentTypeTax } from '../models/paymentTypeTax.model';
import { createPaymentType } from '../models/createPaymentType.model';

@Component({
  selector: 'app-payment-type-form',
  templateUrl: './payment-type-form.page.html',
  styleUrls: ['./payment-type-form.page.scss'],
})
export class PaymentTypeFormPage implements OnInit {

  newPaymentType: createPaymentType;
  newTax: paymentTypeTax;

  constructor() {
    this.newPaymentType = new createPaymentType();
    this.newTax = new paymentTypeTax();
  }

  ngOnInit() {
  }

  addTax() {

    let tax = new paymentTypeTax();
    tax.description = this.newTax.description;
    tax.isDiscount = this.newTax.isDiscount;
    tax.value = this.newTax.value;

    this.newPaymentType.addTax(tax);
  }

  resetNewTax() {
    this.newTax.description = "";
    this.newTax.isDiscount = false;
    this.newTax.value = null;
  }

}
