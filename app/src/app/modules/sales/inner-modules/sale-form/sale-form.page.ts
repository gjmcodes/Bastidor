import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.page.html',
  styleUrls: ['./sale-form.page.scss'],
})
export class SaleFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("SALES FORM");
  }

}
