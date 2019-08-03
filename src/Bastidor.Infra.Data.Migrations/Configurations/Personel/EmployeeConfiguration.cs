using Bastidor.Domain.Personel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bastidor.Infra.Data.Migrations.Configurations.Personel
{
    public class EmployeeConfiguration : EntityConfiguration<Employee>
    {
        public override void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.Property(e => e.Identification)
                .HasColumnType("VARCHAR(20)")
                .IsRequired();

            builder.Property(e => e.FirstName)
                .HasColumnType("VARCHAR(50)")
                .IsRequired();

            builder.Property(e => e.LastName)
                .HasColumnType("VARCHAR(150)")
                .IsRequired();

            base.Configure(builder);

        }
    }
}
