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
  { path: 'stock/stock-index', loadChildren: './modules/stock/stock-index/stock-index.module#StockIndexPageModule' },
  { path: 'stock/create-product', loadChildren: './modules/stock/create-product/create-product.module#CreateProductPageModule' },
  { path: 'customer/index-customer', loadChildren: './modules/customer/index-customer/index-customer.module#IndexCustomerPageModule' },
  { path: 'sales/sale-customer-data', loadChildren: './modules/sales/sale-customer-data/sale-customer-data.module#SaleCustomerDataPageModule' },
  { path: 'sales/sale-products', loadChildren: './modules/sales/sale-products/sale-products.module#SaleProductsPageModule' },
  { path: 'sales/sale-finalization', loadChildren: './modules/sales/sale-finalization/sale-finalization.module#SaleFinalizationPageModule' },
  { path: 'pricing/configurations', loadChildren: './modules/pricing/pricing.module#PricingPageModule' },
  { path: 'pricing/create-payment-type', loadChildren: './modules/pricing/create-payment-type/create-payment-type.module#CreatePaymentTypePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
