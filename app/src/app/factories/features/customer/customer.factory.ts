import { Injectable } from '@angular/core';
import { CreateCustomerVm } from 'src/app/modules/customer/view-models/createCustomerVm.viewmodel';
import { CreateCustomer } from 'src/app/core/features/customer/models/createCustomer.model';
import { Gender } from 'src/app/core/features/customer/models/gender.model';
import { GenderVm } from 'src/app/modules/customer/view-models/genderVm.viewmodel';
import { CreateGenericCustomer } from 'src/app/core/features/customer/models/createGenericCustomer.model';
import { CreateGenericCustomerVm } from 'src/app/modules/customer/view-models/createGenericCustomerVm.viewmodel';

@Injectable({
    providedIn: 'root'
})

export class CustomerFactory {

    constructor() { }

    mapCreateCustomerVmToModel(createCustomerVm: CreateCustomerVm): CreateCustomer {

        let model = new CreateCustomer(
            createCustomerVm.firstName,
            createCustomerVm.surName,
            createCustomerVm.identification,
            createCustomerVm.email,
            createCustomerVm.phone,
            createCustomerVm.gender,
            createCustomerVm.dateOfBirth,
            createCustomerVm.clothingSize
        );

        return model;
    }

    mapCreateGenericCustomerVmToModel(createGenericCustomerVm: CreateGenericCustomerVm): CreateGenericCustomer {

        let model = new CreateGenericCustomer(
            createGenericCustomerVm.approximateAge,
            createGenericCustomerVm.phone,
            createGenericCustomerVm.gender,
            createGenericCustomerVm.clothingSize
        );

        return model;
    }


    mapGendersToVm(genders: Gender[]): GenderVm[] {
        let gendersVm = new Array();
        genders.forEach(element => {
            let vm = new GenderVm();
            vm.id = element.id;
            vm.description = element.description;
            gendersVm.push(vm);
        });

        return gendersVm;
    }

}