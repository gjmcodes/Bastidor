
export class CreateGenericCustomer {

    apparentAge: number;
    phone: string;
    gender: string;
    clothingSize: string;

    constructor(
        apparentAge: number,
        phone: string,
        gender: string,
        clothingSize: string,
    ) {
        this.apparentAge = apparentAge;
        this.phone = phone;
        this.gender = gender;
        this.clothingSize = clothingSize;
    }

}