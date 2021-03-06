import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaleFinalizationPage } from './sale-finalization.page';
import { CreateGenericCustomerPageModule } from '../../customer/create-generic-customer/create-generic-customer.module';

const routes: Routes = [
  {
    path: '',
    component: SaleFinalizationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateGenericCustomerPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaleFinalizationPage]
})
export class SaleFinalizationPageModule {}
