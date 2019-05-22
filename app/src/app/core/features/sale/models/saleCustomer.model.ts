export class SaleCustomer {
    customerId: string;
    fullName: string;
    email: string;
    contact: string;

    constructor(
        customerId: string,
        fullName: string,
        email: string,
        contact: string
    ) {
        this.customerId = customerId;
        this.fullName = fullName;
        this.email = email;
        this.contact = contact;
    }
}