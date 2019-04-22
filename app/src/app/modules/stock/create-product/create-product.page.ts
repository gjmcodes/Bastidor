import { Component, OnInit } from '@angular/core';
import { CreateProductVm } from '../view-models/createProductVm.viewmodel';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {

  newProduct: CreateProductVm;

  constructor() {
    this.newProduct = new CreateProductVm();
  }

  ngOnInit() {
  }

  create() {
    console.log(this.newProduct);
  }
}
