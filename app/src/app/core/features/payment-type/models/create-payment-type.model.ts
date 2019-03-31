import { PaymentTypeTax } from './payment-type-tax.model';

export class CreatePaymentType {
    name: string;
    maxMonthlyInstallments: number;
    taxes: PaymentTypeTax[];

    constructor(
        name: string,
        maxMonthlyInstallments: number,
        taxes: PaymentTypeTax[]) {

            this.name = name;
            this.maxMonthlyInstallments = maxMonthlyInstallments;
            this.taxes = taxes;
    }
}