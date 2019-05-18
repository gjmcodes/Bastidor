import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaleCustomerDataPage } from './sale-customer-data.page';
import { CreateCustomerPageModule } from '../../customer/create-customer/create-customer.module';

const routes: Routes = [
  {
    path: '',
    component: SaleCustomerDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCustomerPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaleCustomerDataPage]
})
export class SaleCustomerDataPageModule {}
