import { Injectable } from '@angular/core';
import { CreateProduct } from '../models/create-product.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { Product } from '../models/product.model';
import { PaymentTypeDataService } from '../../payment-type/data/payment-type-data.service';
import { SalePaymentType } from '../../payment-type/models/sale-payment-type.model';
import { PricingDataService } from '../../pricing/data/pricing-data.service';
import { PricingConfigurations } from '../../pricing/models/pricingConfigurations.model';
import { StockProductPricing } from '../models/stockProductPricing.model';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(
    private paymentTypeDataService: PaymentTypeDataService, //REMOVER
    private pricingDataService : PricingDataService //REMOVER
  ) { }

  async createProductAsync(createProduct: CreateProduct): Promise<OperationResult> {
    //TODO
    //Enviar para backend

    let array = new Array();
    let ptArr = sessionStorage.getItem('stock-product');
    if (ptArr != null) {
      let json = JSON.parse(ptArr);
      for (var i = 0; i < json.length; i++) {
        var counter = json[i];
        array.push(counter);
      }
    }
    array.push(createProduct);

    sessionStorage.setItem('stock-product', JSON.stringify(array));

    let opsResult = new OperationResult();
    opsResult.isValid = true;

    return opsResult;

  }

  async getProductsAsync(keyword: string) : Promise<OperationResult> {
    let _arr = JSON.parse(sessionStorage.getItem('stock-product'));
    let payments = new Array();
    for (var i = 0; i < _arr.length; i++) {
      var counter = _arr[i];
      let model = new Product
        (
          counter.name,
          counter.color,
          counter.price,
          counter.costPrice,
          counter.amount,
          counter.size
        );

      payments.push(model);
    }

    let opsResult = new OperationResult();
    opsResult.isValid = true;
    opsResult.returnObject = payments;
    
    return opsResult;
  }

  async getProductsPricingAsync(): Promise<OperationResult> {
    // TODO
    // linkar com backend

    //TODO 
    //remover. Backend deverá trazer os dados
    let paymentTypes = await this.paymentTypeDataService.getPaymentTypesForSalesAsync();
    let highestPaymentType = new SalePaymentType();

    paymentTypes.forEach(pt => {

      if (highestPaymentType == null
        || highestPaymentType.totalFee < pt.totalFee) {
        highestPaymentType = pt;
      }

    });

    //Pricing
    let opsResult = await this.pricingDataService.getPricingConfigurationsAsync();
    let pricingConf : PricingConfigurations = opsResult.returnObject;


    let model = new StockProductPricing(pricingConf.profitOverProduct, highestPaymentType.totalFee);

    let newOpsResult = new OperationResult();
    newOpsResult.isValid = true;
    newOpsResult.returnObject = model;

    return newOpsResult;
  }
}
