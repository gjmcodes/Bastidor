using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Sales;
using FluentValidation;
using System.Collections;
using System.Collections.Generic;

namespace Bastidor.Domain.Payments
{
    public class PaymentType : Entity<PaymentType>
    {
        public PaymentType(string description, int taxesPercentage)
        {
            Description = description;
            TaxesPercentage = taxesPercentage;
        }

        public string Description { get; private set; }
        public int TaxesPercentage { get; private set; }

        //EF Navigation
        public virtual ICollection<SalePayment> SalesPayment { get; private set; }


        protected override void ValidateRules()
        {
            ValidateDescription();
            ValidateTaxesPercentage();

            ValidationResult = Validate(this);
        }

        private void ValidateDescription()
        {
            RuleFor(c => c.Description)
                .NotEmpty().WithMessage("É necessário haver uma descrição");
        }

        private void ValidateTaxesPercentage()
        {
            RuleFor(c => c.TaxesPercentage)
                .InclusiveBetween(0, 100)
                .WithMessage("Uma taxa não pode ser superior a 100 ou inferior a 0");
        }
    }
}
