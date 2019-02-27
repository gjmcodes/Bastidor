import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesStepsPage } from './sales-steps.page';

import {IonicStepperModule} from 'ionic-stepper';

const routes: Routes = [
  {
    path: '',
    component: SalesStepsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStepperModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesStepsPage]
})
export class SalesStepsPageModule {}
