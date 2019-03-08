import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalePaymentTypePage } from './sale-payment-type.page';
import { SalesStepsPageModule } from '../../inner-components/sales-steps/sales-steps.module';

const routes: Routes = [
  {
    path: 'sale-payment-type',
    component: SalePaymentTypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStepsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalePaymentTypePage]
})
export class SalePaymentTypePageModule {}
