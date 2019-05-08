import { Injectable } from '@angular/core';
import { PricingFactory } from 'src/app/factories/features/pricing/pricing.factory';
import { PricingConfigurations } from 'src/app/core/features/pricing/models/pricingConfigurations.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { PricingDataService } from 'src/app/core/features/pricing/data/pricing-data.service';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private pricingFactory: PricingFactory,
    private pricingDataService: PricingDataService) { }

  savePricingConfigurations(pricingConfigurations: PricingConfigurations): Promise<OperationResult> {

    let model = this.pricingFactory.mapPricingFormVmToModel(pricingConfigurations);

    let opsResult = this.pricingDataService.savePricingConfigurationsAsync(model);

    return opsResult;
  }
}
