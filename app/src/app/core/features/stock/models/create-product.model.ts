export class CreateProduct {
    name: string;
    color: string;
    price: number;
    costPrice: number;
    amount: number;

    constructor(name: string,
        color: string,
        price: number,
        costPrice: number,
        amount: number) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.costPrice = costPrice;
        this.amount = amount;
    }
}