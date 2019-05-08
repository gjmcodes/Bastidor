import { Injectable } from '@angular/core';
import { PricingConfigurations } from 'src/app/core/features/pricing/models/pricingConfigurations.model';
import { PricingConfigurationsViewModel } from 'src/app/modules/pricing/view-models/pricingConfigurationsVm.viewmodel';

@Injectable({
    providedIn: 'root'
})

export class PricingFactory {

    constructor() { }


    mapPricingFormVmToModel(vm: PricingConfigurationsViewModel): PricingConfigurations {
        let model = new PricingConfigurations(
            vm.profitOverProduct
        );

        return model;
    }
}