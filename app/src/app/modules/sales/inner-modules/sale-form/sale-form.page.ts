import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Router } from '@angular/router';
import { SaleFormConstants } from './sale-form.constants';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.page.html',
  styleUrls: ['./sale-form.page.scss'],
})

export class SaleFormPage implements OnInit {

  products: Product[];

  constructor(private router : Router) {

    sessionStorage.removeItem('sales-total-value');

    this.products = new Array();

    for (let index = 0; index < 4; index++) {
      var prod = new Product();
      prod.name = "Prod " + index;
      prod.price = 5 * index;
      prod.id = "prod-" + index;

      this.products.push(prod);
    }
  }

  ngOnInit() {
  }

  removeProduct(event, item) {
    let prodIndex = this.products.indexOf(item);
    this.products.splice(prodIndex, 1);
  }

  productsTotal(): number {
    let sumVal = 0;

    this.products.map(x => x.price).forEach((val) => sumVal += val);

    return sumVal;
  }

  goNext(){
    sessionStorage.setItem(SaleFormConstants.PRODUCTS_TOTAL, this.productsTotal.toString());

    this.router.navigateByUrl('sales/sale-payment-type');
  }
}
