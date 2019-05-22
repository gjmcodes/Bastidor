export class CreateGenericCustomerVm {
    approximateAge: number;
    gender: string;
    phone: string;
    clothingSize: string;


    isValid() {
        return this.approximateAge > 0
            && this.gender != ''
            && this.phone != ''
            && this.clothingSize != '';
    }
}