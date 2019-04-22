
export class CreateCustomer {

    firstName: string;
    surName: string;
    identification: string;
    email: string;
    phone: string;
    gender: string;
    dateOfBirth: Date;
    clothingSize: string;

    constructor(
        firstName: string,
        surName: string,
        identification: string,
        email: string,
        phone: string,
        gender: string,
        dateOfBirth: Date,
        clothingSize: string,
    ) {
        this.firstName = firstName;
        this.surName = surName;
        this.identification = identification;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.clothingSize = clothingSize;
    }

}