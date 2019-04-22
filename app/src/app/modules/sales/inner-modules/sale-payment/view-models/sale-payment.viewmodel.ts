import { PaymentTypeTax } from 'src/app/core/features/payment-type/models/payment-type-tax.model';

export class SalePaymentViewModel {
    name: string;
    discountInstallments: string;

    constructor(
        name: string,
        maxMonthlyInstallments: number,
        totalFee: number) {

        debugger
        this.name = name;
        this.discountInstallments = this.getDiscountInstallments(totalFee, maxMonthlyInstallments);
    }

    getDiscountInstallments(totalFee: number, maxInstallments: number): string {
        let returnStr = [];

        debugger
        
        returnStr.push("(")
        if (totalFee < 0)
            returnStr.push(" -" + totalFee + "%");
        else if (totalFee > 0)
            returnStr.push(" +" + totalFee + "%");


        if (maxInstallments != 0)
            returnStr.push(" | " + maxInstallments + "x ");

        returnStr.push(")");

        return returnStr.join("");
    }
}