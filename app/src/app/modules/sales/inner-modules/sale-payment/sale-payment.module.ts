import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalePaymentPage } from './sale-payment.page';

const routes: Routes = [
  {
    path: 'sale-payment',
    component: SalePaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalePaymentPage]
})
export class SalePaymentPageModule {}
