export class SalePaymentViewModel {
    id : string;
    name: string;
    discountInstallments: string;

    constructor(
        id : string,
        name: string,
        maxMonthlyInstallments: number,
        totalFee: number) {

        this.id = id;
        this.name = name;
        this.discountInstallments = this.getDiscountInstallments(totalFee, maxMonthlyInstallments);
    }

    getDiscountInstallments(totalFee: number, maxInstallments: number): string {
        let returnStr = [];

        
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