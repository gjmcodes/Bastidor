import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Product } from 'src/app/core/features/stock/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-index',
  templateUrl: './stock-index.page.html',
  styleUrls: ['./stock-index.page.scss'],
})
export class StockIndexPage implements OnInit {

  products: Product[];

  constructor(private stockService: StockService,
    private router: Router) { }

  ngOnInit() {
    this.getProducts(null);
  }

  async getProducts(search: string) {
    let searchResult = await this.stockService.getProductsAsync(search);

    if (searchResult.isValid)
      this.products = searchResult.returnObject;
  }

  createNew(){
    this.router.navigateByUrl('stock/create-product');
  }
}
