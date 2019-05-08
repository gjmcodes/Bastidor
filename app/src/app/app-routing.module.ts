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
  { path: 'payment-type/create', loadChildren: './modules/payment-type/create/create.module#CreatePageModule' },
  { path: 'index', loadChildren: './modules/payment-type/index/index.module#IndexPageModule' },
  { path: 'stock/stock-index', loadChildren: './modules/stock/stock-index/stock-index.module#StockIndexPageModule' },
  { path: 'stock/create-product', loadChildren: './modules/stock/create-product/create-product.module#CreateProductPageModule' },
  { path: 'customer/create-generic', loadChildren: './modules/customer/create-generic/create-generic.module#CreateGenericPageModule' },
  { path: 'sales/sale-customer-data', loadChildren: './modules/sales/sale-customer-data/sale-customer-data.module#SaleCustomerDataPageModule' },
  { path: 'sales/sale-products', loadChildren: './modules/sales/sale-products/sale-products.module#SaleProductsPageModule' },
  { path: 'sales/sale-finalization', loadChildren: './modules/sales/sale-finalization/sale-finalization.module#SaleFinalizationPageModule' },
  { path: 'pricing/configurations', loadChildren: './modules/pricing/pricing.module#PricingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
