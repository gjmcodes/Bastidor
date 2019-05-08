import { Injectable } from '@angular/core';
import { CreateProductVm } from '../view-models/createProductVm.viewmodel';
import { StockFactory } from 'src/app/factories/features/stock/stock.factory';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { ProductPricingVm } from '../view-models/productPricingVm.viewmodel';
import { StockDataService } from 'src/app/core/features/stock/data/stock-data.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private stockFactory: StockFactory,
    private stockDataService: StockDataService) {

  }

  async createProductAsync(createProductVm: CreateProductVm): Promise<OperationResult> {
    
    let model = this.stockFactory.mapCreateProductVmToModel(createProductVm);

    let opsResult = this.stockDataService.createProductAsync(model);

    return opsResult;
  }

  async getProductPricingAsync(): Promise<OperationResult> {

    let opsResult = await this.stockDataService.getProductsPricingAsync();

    let vm = this.stockFactory.mapProductPricingToVm(opsResult.returnObject);
    opsResult.returnObject = vm;

    return opsResult;
  }

  async getProductsAsync(search : string) {
    let opsResult = await this.stockDataService.getProductsAsync(search);

    let productsVm = this.stockFactory.mapProductsToVm(opsResult.returnObject);

    opsResult.returnObject = productsVm;

    return opsResult;
  }
}
