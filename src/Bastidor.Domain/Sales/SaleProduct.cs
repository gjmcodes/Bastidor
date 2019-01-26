using Bastidor.Domain.Core.Models;
using Bastidor.Domain.SellingGoods;

namespace Bastidor.Domain.Sales
{
    public class SaleProduct : Entity<SaleProduct>
    {
        public string SaleId { get; private set; }
        public string ProductId { get; private set; }

        //EF Navigation
        public virtual Sale Sale { get; private set; }
        public virtual Product Product { get; private set; }

        protected override void ValidateRules()
        {
            throw new System.NotImplementedException();
        }
    }
}
