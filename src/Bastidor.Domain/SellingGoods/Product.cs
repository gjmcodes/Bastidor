using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Sales;
using System.Collections;
using System.Collections.Generic;

namespace Bastidor.Domain.SellingGoods
{
    public class Product : Entity<Product>
    {
        public string Description { get; private set; }
        public decimal Price { get; private set; }
        public string ImagePath { get; private set; }

        //EF Navigation
        public virtual ICollection<SaleProduct> Sales { get; private set; }
    }
}
