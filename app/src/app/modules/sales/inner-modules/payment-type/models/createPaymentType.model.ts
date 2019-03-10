import { paymentTypeTax } from './paymentTypeTax.model';

export class createPaymentType{
    name : string;
    maxMonthlyInstallments : number;
    discountPercentage : paymentTypeTax[];
    interestPercentage : paymentTypeTax[];
}