export class StockProductPricing {
    profitPercentage: number;
    highestPaymentTypeTax: number;

    constructor(profitPercentage : number,
        highestPaymentTypeTax : number){
            this.profitPercentage = profitPercentage;
            this.highestPaymentTypeTax = highestPaymentTypeTax;
    }
}