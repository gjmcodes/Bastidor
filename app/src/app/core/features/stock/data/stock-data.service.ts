import { Injectable } from '@angular/core';
import { CreateProduct } from '../models/create-product.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor() { }

  createProduct(createProduct: CreateProduct) : OperationResult {
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

  getProducts(keyword : string){
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
        counter.amount
      );

      payments.push(model);
    }

    return payments;
  }
}
