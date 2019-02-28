import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-sales',
  templateUrl: './customer-sales.page.html',
  styleUrls: ['./customer-sales.page.scss'],
})
export class CustomerSalesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goNext(){
    this.router.navigateByUrl('sales/sale-form');
  }
}
