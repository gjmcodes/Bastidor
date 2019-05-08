export class Product {
    name: string;
    color: string;
    price: number;
    costPrice: number;
    amount: number;
    size : string;

    constructor(name: string,
        color: string,
        price: number,
        costPrice: number,
        amount: number,
        size : string) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.costPrice = costPrice;
        this.amount = amount;
        this.size = size;
    }
}