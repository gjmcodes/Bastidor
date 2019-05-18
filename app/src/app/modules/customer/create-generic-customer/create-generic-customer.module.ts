import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateGenericCustomerPage } from './create-generic-customer.page';

const routes: Routes = [
  {
    path: 'customer/create-generic-customer',
    component: CreateGenericCustomerPage,
    loadChildren: './create-generic-customer.module#CreateGenericCustomerPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateGenericCustomerPage]
})
export class CreateGenericCustomerPageModule { }
