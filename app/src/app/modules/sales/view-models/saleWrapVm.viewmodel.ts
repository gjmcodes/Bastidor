import { SaleCustomerDataViewModel } from './saleCustomerDataVm.viewmodel';
import { SaleProductViewModel } from './saleProductVm.viewmodel';
import { SalePaymentViewModel } from './salePaymentVm.viewmodel';

export class SaleWrapViewModel{
    customerData : SaleCustomerDataViewModel;
    saleProducts : SaleProductViewModel[];
    salePaymentMethod : string;
    saleInstallments : number;
    saleFinalPrice : number;
}