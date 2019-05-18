import { PaymentTypeTaxVm } from './paymentTypeTaxVm.model';

export class CreatePaymentTypeVm {
    name: string;
    maxMonthlyInstallments: number;
    taxes: PaymentTypeTaxVm[];

    constructor() {
        this.taxes = new Array();
    }

    addTax(newTax: PaymentTypeTaxVm) {
        this.taxes.push(newTax);
    }
}