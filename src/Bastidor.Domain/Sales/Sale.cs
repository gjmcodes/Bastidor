using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Personel;
using System;
using System.Collections.Generic;

namespace Bastidor.Domain.Sales
{
    public class Sale : Entity<Sale>
    {
        public Sale(string customerName, string employeeId)
        {
            this.Id = Guid.NewGuid().ToString();

            CustomerName = customerName;
            EmployeeId = employeeId;
        }

        public string SaleProductId { get; private set; }
        public string CustomerName { get; private set; }
        public string EmployeeId { get; private set; }


        //EF Navigation
        public virtual ICollection<SaleProduct> Products { get; private set; }
        public virtual SalePayment SalePayment { get; private set; }
        public virtual Employee Employee { get; private set; }
    }
}
