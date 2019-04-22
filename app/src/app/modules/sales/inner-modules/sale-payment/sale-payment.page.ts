import { Component, OnInit } from '@angular/core';
import { SaleFormConstants } from '../sale-form/sale-form.constants';
import { SalePaymentService } from './sale-payment.service';
import { SalePaymentType } from 'src/app/core/features/payment-type/models/sale-payment-type.model';
import { SalePaymentViewModel } from './view-models/sale-payment.viewmodel';

@Component({
  selector: 'app-sale-payment',
  templateUrl: './sale-payment.page.html',
  styleUrls: ['./sale-payment.page.scss'],
})
export class SalePaymentPage implements OnInit {

  productsTotal: number;
  salePayments: SalePaymentViewModel[];

  constructor(private salePaymentService: SalePaymentService) { }

  ngOnInit() {
    let numStr = sessionStorage.getItem(SaleFormConstants.PRODUCTS_TOTAL);
    this.productsTotal = Number.parseFloat(numStr);

    this.salePaymentService.getSalePamentTypeAsync().then(res => {
      this.salePayments = res.returnObject;
    });
  }

}
