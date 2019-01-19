using FluentValidation;
using FluentValidation.Results;
using System;

namespace Bastidor.Domain.Core.Models
{
    public abstract class Entity<T> : AbstractValidator<T> where T : Entity<T>
    {

        public Entity()
        {
            ValidationResult = new ValidationResult();
        }

        public string Id { get; protected set; }
        public DateTime CreationDate { get; protected set; }

        public ValidationResult ValidationResult { get; protected set; }

    }
}
