export class PaymentTypeTax {
    description: string;
    value: number;


    constructor(
        description: string,
        value: number) {

        this.description = description;
        this.value = value;
    }
}