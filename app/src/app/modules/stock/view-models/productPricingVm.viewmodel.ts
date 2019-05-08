export class ProductPricingVm {
    profitPercentage : number;
    highestPaymentTypeTax : number;

    calculateSuggestedPrice(price : number){

        let profitValue = this.profitPercentage == null ? 0 :  (price * this.profitPercentage)/100;
        let taxValue = this.highestPaymentTypeTax == null ? 0 : (price * this.highestPaymentTypeTax)/100;
        
        return price + profitValue + taxValue;
    }
}