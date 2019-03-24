import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';
import { CustomerSalesPageModule } from './inner-modules/customer-sales/customer-sales.module';
import { SalesStepsPageModule } from './inner-components/sales-steps/sales-steps.module';

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStepsPageModule,
    CustomerSalesPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesPage]
})
export class SalesPageModule {}
