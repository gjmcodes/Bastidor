import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaleFormPage } from './sale-form.page';
import { SalesStepsPageModule } from '../../inner-components/sales-steps/sales-steps.module';
import { CustomerSalesPageModule } from '../customer-sales/customer-sales.module';
import { SalePaymentTypePageModule } from '../sale-payment-type/sale-payment-type.module';

const routes: Routes = [
  {
    path: 'sale-form',
    component: SaleFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStepsPageModule,
    SalePaymentTypePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaleFormPage]
})
export class SaleFormPageModule {}
