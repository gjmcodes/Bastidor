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
  { path: 'sales/sale-payment', loadChildren: './modules/sales/inner-modules/sale-payment/sale-payment.module#SalePaymentPageModule' },
  { path: 'payment-type/create', loadChildren: './modules/payment-type/create/create.module#CreatePageModule' },
  { path: 'index', loadChildren: './modules/payment-type/index/index.module#IndexPageModule' },
  { path: 'stock/index', loadChildren: './modules/stock/index/index.module#IndexPageModule' },
  { path: 'stock/create-product', loadChildren: './modules/stock/create-product/create-product.module#CreateProductPageModule' },
  { path: 'customer/create', loadChildren: './modules/customer/create/create.module#CreatePageModule' },
  { path: 'customer/create-generic', loadChildren: './modules/customer/create-generic/create-generic.module#CreateGenericPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
