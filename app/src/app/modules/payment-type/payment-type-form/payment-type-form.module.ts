import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentTypeFormPage } from './payment-type-form.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentTypeFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentTypeFormPage]
})
export class PaymentTypeFormPageModule {}
