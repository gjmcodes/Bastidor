import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'sales', loadChildren: './modules/sales/sales.module#SalesPageModule' },
  { path: 'sales/customer-sales', loadChildren: './modules/sales/inner-modules/customer-sales/customer-sales.module#CustomerSalesPageModule' },
  { path: 'sales/sale-form', loadChildren: './modules/sales/inner-modules/sale-form/sale-form.module#SaleFormPageModule' },
  { path: 'sales/sales-steps', loadChildren: './modules/sales/inner-components/sales-steps/sales-steps.module#SalesStepsPageModule' },
  { path: 'payment-type/payment-type-form', loadChildren: './modules/payment-type/payment-type-form/payment-type-form.module#PaymentTypeFormPageModule' },
  { path: 'payment-type', loadChildren: './modules/payment-type/payment-type.module#PaymentTypePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
