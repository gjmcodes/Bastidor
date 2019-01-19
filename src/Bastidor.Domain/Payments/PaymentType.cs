using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Sales;
using System.Collections;
using System.Collections.Generic;

namespace Bastidor.Domain.Payments
{
    public class PaymentType : Entity<PaymentType>
    {
        public string Description { get; private set; }
        public int TaxesPercentage { get; private set; }

        //EF Navigation
        public virtual ICollection<SalePayment> SalesPayment { get; private set; }
    }
}
