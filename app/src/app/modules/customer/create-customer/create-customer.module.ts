import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateCustomerPage } from './create-customer.page';

const routes: Routes = [
  {
    path: 'customer/create-customer',
    component: CreateCustomerPage,
    loadChildren: './create-customer.module#CreateCustomerPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateCustomerPage]
})
export class CreateCustomerPageModule {}
