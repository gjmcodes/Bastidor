import { Component, OnInit } from '@angular/core';
import { CreatePaymentTypeVm } from '../view-models/createPaymentTypeVm.model';
import { PaymentTypeTaxVm } from '../view-models/paymentTypeTaxVm.model';
import { PaymentTypeService } from '../services/payment-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-payment-type',
  templateUrl: './create-payment-type.page.html',
  styleUrls: ['./create-payment-type.page.scss'],
})
export class CreatePaymentTypePage implements OnInit {

  newPaymentType: CreatePaymentTypeVm;
  newTax: PaymentTypeTaxVm;

  constructor(private paymentTypeService: PaymentTypeService,
    private router: Router) {
    this.newPaymentType = new CreatePaymentTypeVm();
    this.newTax = new PaymentTypeTaxVm();
  }
  ngOnInit() {
  }

  addTax() {

    if (this.validateNewTax()) {

      let tax = new PaymentTypeTaxVm();
      tax.description = this.newTax.description;
      tax.value = this.newTax.value;

      this.newPaymentType.addTax(tax);

      this.resetNewTax();
    }
  }

  validateNewTax() {
    return true;
  }
  resetNewTax() {
    this.newTax.description = "";
    this.newTax.value = null;
  }

  finish() {
    this.paymentTypeService.createNewPaymentTypeAsync(this.newPaymentType)
      .then(res => {
        if (res.isValid) {
          alert('criado com sucesso');
          this.newPaymentType = new CreatePaymentTypeVm();
        }
        else
          alert('ocorreu um ou mais erros');
      });

    //TODO
    //validate
    //return to home
      this.returnPricingPage();
  }

  returnPricingPage(){
    this.router.navigateByUrl('pricing/configurations');
  }
}
