import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaleFormPage } from './sale-form.page';
import { SalesStepsPageModule } from '../../inner-components/sales-steps/sales-steps.module';
import { CustomerSalesPageModule } from '../customer-sales/customer-sales.module';

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
    RouterModule.forChild(routes)
  ],
  declarations: [SaleFormPage]
})
export class SaleFormPageModule {}
