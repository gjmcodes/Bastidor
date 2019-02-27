import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesStepsPage } from './sales-steps.page';

const routes: Routes = [
  {
    path: './2',
    component: SalesStepsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesStepsPage],
  exports: [SalesStepsPage]
})
export class SalesStepsPageModule {}
