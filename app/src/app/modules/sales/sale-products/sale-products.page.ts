import { Component, OnInit } from '@angular/core';
import { SaleProductViewModel } from '../view-models/saleProductVm.viewmodel';
import { Router } from '@angular/router';
import { SaleProductsConstants } from './sale-products.constants';
import { SalesConstants } from '../constants/sales.constants';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.page.html',
  styleUrls: ['./sale-products.page.scss'],
})
export class SaleProductsPage implements OnInit {

  products: SaleProductViewModel[];

  constructor(private router: Router) {

    sessionStorage.removeItem('sales-total-value');

    this.products = new Array();

    for (let index = 0; index < 4; index++) {
      var prod = new SaleProductViewModel();
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

  goNext() {

    let sumVal = this.productsTotal().toString();
    
    sessionStorage.setItem(SalesConstants.PRODUCTS_TOTAL, sumVal);

    this.router.navigateByUrl('sales/sale-finalization');
  }

  goBack(){
    this.router.navigateByUrl('sales/sale-customer-data');
  }
}
