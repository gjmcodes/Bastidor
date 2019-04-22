import { Injectable } from '@angular/core';
import { CreatePaymentType } from '../models/create-payment-type.model';
import { OperationResult } from 'src/app/core/cross-cutting/application/operation-result.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentTypeBusinessService {

    constructor() { }

    getBestPaymentMethodForSale() : string{
        //TODO
        //Recuperar todas formas de pagamento
        //Verificar quais possuem um valor total melhor
    
        return "";
    }

}
