import { SaleProduct } from './saleProduct.model';

export class Sale {
    customerId: string;
    paymentMethodId : string;
    totalInstallments : number;
    finalPrice : number;

    procuts : SaleProduct[]
}