export class PaymentTypeTax {
    description: string;
    value: number;
    isDiscount: boolean;


    constructor(
        description: string,
        value: number,
        isDiscount: boolean) {

        this.description = description;
        this.value = value;
        this.isDiscount = isDiscount;
    }
}