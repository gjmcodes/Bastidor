import { Injectable } from '@angular/core';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { PricingConfigurations } from '../models/pricingConfigurations.model';

@Injectable({
  providedIn: 'root'
})
export class PricingDataService {

  constructor() { }

  async savePricingConfigurationsAsync(model: PricingConfigurations): Promise<OperationResult> {

    //TODO
    //Enviar para backend
    sessionStorage.setItem('pricing-configurations', JSON.stringify(model));

    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;
  }

  async getPricingConfigurationsAsync(): Promise<OperationResult> {

    //TODO
    //Enviar para backend
    let data = sessionStorage.getItem('pricing-configurations');

    let pricingConfigurations = JSON.parse(data);

    let opsResult = new OperationResult();
    opsResult.isValid = true;
    opsResult.returnObject = pricingConfigurations;

    return opsResult;
  }

}
