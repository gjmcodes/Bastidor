using FluentValidation;
using FluentValidation.Results;
using System;

namespace Bastidor.Domain.Core.Models
{
    public abstract class Entity<T> : AbstractValidator<T> where T : Entity<T>
    {

        public Entity()
        {
            Id = Guid.NewGuid().ToString();

            CreationDate = DateTime.Now;
            ValidationResult = new ValidationResult();
        }

        public string Id { get; protected set; }
        public DateTime CreationDate { get; protected set; }

        public ValidationResult ValidationResult { get; protected set; }

        protected abstract void ValidateRules();

        public bool IsValid()
        {
            ValidateRules();

            return ValidationResult.IsValid;
        }
    }
}
