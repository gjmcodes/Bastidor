import { Component, OnInit } from '@angular/core';
import { PricingConfigurationsViewModel } from './view-models/pricingConfigurationsVm.viewmodel';
import { PricingService } from './services/pricing.service';
import { IndexPaymentTypeVm } from './view-models/indexPaymentTypeVm.models';
import { PaymentTypeService } from './services/payment-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {

  pricingForm: PricingConfigurationsViewModel;
  paymentTypes: IndexPaymentTypeVm[];

  constructor(private pricingService: PricingService,
    private paymentTypeService: PaymentTypeService,
    private router : Router) {
    this.pricingForm = new PricingConfigurationsViewModel();
  }

  ngOnInit() {
    this.getPaymentTypesAsync();
  }

  async saveAsync() {

    let result = await this.pricingService.savePricingConfigurations(this.pricingForm);
    if (result.isValid) {
      alert('Configurações Salvas');
    }
  }

  async getPaymentTypesAsync() {
    let typesResult = await this.paymentTypeService.getPaymentTypesAsync();
    if (typesResult.isValid) {
      this.paymentTypes = typesResult.returnObject;
    }
  }

  createPaymentType(){
    this.router.navigateByUrl('pricing/create-payment-type');
  }
}
