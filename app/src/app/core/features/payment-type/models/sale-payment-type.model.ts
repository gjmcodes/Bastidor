import { PaymentTypeTax } from './payment-type-tax.model';

export class SalePaymentType {
    name: string;
    maxMonthlyInstallments: number;
    totalFee: number;
    hasDiscount : boolean;
}