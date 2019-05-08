import { Component, OnInit } from '@angular/core';
import { CreateProductVm } from '../view-models/createProductVm.viewmodel';
import { StockService } from '../services/stock.service';
import { ProductPricingVm } from '../view-models/productPricingVm.viewmodel';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  newProduct: CreateProductVm;
  productPricing: ProductPricingVm;
  suggestedPrice: number;

  constructor(private stockService: StockService) {
    this.newProduct = new CreateProductVm();
    this.suggestedPrice = 0;
  }

  ngOnInit() {
    this.getProductPricingAsync();
  }

  async createAsync() {
    let result = await this.stockService.createProductAsync(this.newProduct);

    if (result.isValid){
      alert('Produto cadastrado com sucesso!');
      this.newProduct = new CreateProductVm();
    }
  }

  calculateFinalPrice() {
    console.log('changed');
    debugger
    if (this.productPricing != null
      && this.newProduct.costPrice != null
      && this.newProduct.costPrice > 0) {
      this.suggestedPrice = this.productPricing.calculateSuggestedPrice(this.newProduct.costPrice)
    }
  }

  async getProductPricingAsync() {
    let opsResult = await this.stockService.getProductPricingAsync();

    if (opsResult.isValid)
      this.productPricing = opsResult.returnObject;

    console.log(this.productPricing);
  }
}
