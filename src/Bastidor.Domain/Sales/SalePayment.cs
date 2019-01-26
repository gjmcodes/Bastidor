using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Payments;
using System;

namespace Bastidor.Domain.Sales
{
    public class SalePayment : Entity<SalePayment>
    {
        public string SaleId { get; private set; }
        public string PaymentTypeId { get; private set; }
        public int AmountInstallments { get; private set; }
        public decimal InstallmentValue { get; private set; }
        public DateTime PaymentDay { get; private set; }

        public bool IsInstallment => AmountInstallments > 1;


        //EF Navigations
        public virtual PaymentType PaymentType { get; private set; }
        public virtual Sale Sale { get; private set; }

        protected override void ValidateRules()
        {
            throw new NotImplementedException();
        }
    }
}
