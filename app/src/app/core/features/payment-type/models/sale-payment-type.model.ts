import { PaymentTypeTax } from './payment-type-tax.model';

export class SalePaymentType {
    id : string;
    name: string;
    maxMonthlyInstallments: number;
    totalFee: number;
    hasDiscount : boolean;
}