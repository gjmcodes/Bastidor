import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerSalesPage } from './customer-sales.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CustomerSalesPage
  ],
  declarations: [CustomerSalesPage]
})
export class CustomerSalesPageModule {}
