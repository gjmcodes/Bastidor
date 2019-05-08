import { Component, OnInit } from '@angular/core';
import { PricingConfigurationsViewModel } from './view-models/pricingConfigurationsVm.viewmodel';
import { PricingService } from './services/pricing.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {

  pricingForm: PricingConfigurationsViewModel;

  constructor(private pricingService: PricingService) {
    this.pricingForm = new PricingConfigurationsViewModel();
  }

  ngOnInit() {
  }

  async saveAsync() {

    let result = await this.pricingService.savePricingConfigurations(this.pricingForm);
    if (result.isValid) {
      alert('Configurações Salvas');
    }
  }
}
