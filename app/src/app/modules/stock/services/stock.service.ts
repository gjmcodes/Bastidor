import { Injectable } from '@angular/core';
import { CreateProductVm } from '../view-models/createProductVm.viewmodel';
import { StockFactory } from 'src/app/factories/features/stock/stock.factory';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private stockFactory: StockFactory) {

  }

  createProduct(createProductVm: CreateProductVm) {
    let model = this.stockFactory.mapCreateProductVmToModel(createProductVm);


  }
}
