import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatePaymentTypePage } from './create-payment-type.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymentTypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatePaymentTypePage]
})
export class CreatePaymentTypePageModule {}
