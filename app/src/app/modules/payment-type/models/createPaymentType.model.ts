import { paymentTypeTax } from './paymentTypeTax.model';

export class createPaymentType {
    name: string;
    maxMonthlyInstallments: number;
    taxes: paymentTypeTax[];

    constructor() {
        this.taxes = new Array();
    }

    addTax(newTax: paymentTypeTax) {
        this.taxes.push(newTax);
    }
}