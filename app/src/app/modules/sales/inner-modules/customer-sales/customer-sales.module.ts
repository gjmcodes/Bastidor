import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerSalesPage } from './customer-sales.page';
import { SalesStepsPageModule } from '../../inner-components/sales-steps/sales-steps.module';
import { SaleFormPageModule } from '../sale-form/sale-form.module';

const routes: Routes = [
  {
    path: './sales/customer-sales',
    component: CustomerSalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStepsPageModule,
    SaleFormPageModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CustomerSalesPage
  ],
  declarations: [CustomerSalesPage]
})
export class CustomerSalesPageModule {}
