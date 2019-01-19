using Bastidor.Domain.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Configurations
{
    public abstract class EntityConfiguration<T> : IEntityTypeConfiguration<T> where T : Entity<T>
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Id).HasColumnType("VARCHAR(36)").IsRequired();


            builder.Ignore(e => e.ValidationResult);
            builder.Ignore(e => e.CascadeMode);

        }
    }
}
