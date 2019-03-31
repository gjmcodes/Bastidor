import { Component, OnInit } from '@angular/core';
import { CreatePaymentTypeVm } from '../view-models/createPaymentTypeVm.model';
import { PaymentTypeService } from '../services/payment-type.service';
import { PaymentTypeTaxVm } from '../view-models/paymentTypeTaxVm.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  newPaymentType: CreatePaymentTypeVm;
  newTax: PaymentTypeTaxVm;


  constructor(private paymentTypeService: PaymentTypeService) {
    this.newPaymentType = new CreatePaymentTypeVm();
    this.newTax = new PaymentTypeTaxVm();
  }

  ngOnInit() {
  }

  addTax() {

    if (this.validateNewTax()) {

      let tax = new PaymentTypeTaxVm();
      tax.description = this.newTax.description;
      tax.isDiscount = this.newTax.isDiscount;
      tax.value = this.newTax.value;

      this.newPaymentType.addTax(tax);

      this.resetNewTax();

      this.paymentTypeService.createNewPaymentTypeAsync(this.newPaymentType)
        .then(res => {
          if (res.isValid)
            alert('criado com sucesso');
          else
            alert('ocorreu um ou mais erros');
        });
    }
  }

  validateNewTax() {
    return true;
  }
  resetNewTax() {
    this.newTax.description = "";
    this.newTax.isDiscount = false;
    this.newTax.value = null;
  }

}
