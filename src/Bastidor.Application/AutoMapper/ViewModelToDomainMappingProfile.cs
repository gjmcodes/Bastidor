using AutoMapper;
using Bastidor.Application.ViewModels.Payments;
using Bastidor.Domain.Payments.Commands;

namespace Bastidor.Application.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<AddPaymentTypeViewModel, AddPaymentTypeCommand>()
                .ConstructUsing(c => new AddPaymentTypeCommand(c.Description, c.TaxesPercentage))
                .IgnoreAllPropertiesWithAnInaccessibleSetter();
        }
    }
}
