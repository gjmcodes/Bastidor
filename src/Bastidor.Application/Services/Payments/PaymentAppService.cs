using System.Threading.Tasks;
using AutoMapper;
using Bastidor.Application.ViewModels.Application;
using Bastidor.Application.ViewModels.Payments;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Payments.Commands;

namespace Bastidor.Application.Services.Payments
{
    public class PaymentAppService : BaseAppService, IPaymentAppService
    {

        private readonly IMapper _mapper;

        public PaymentAppService(IMediatorHandler mediatorHandler,
            IMapper mapper) : base(mediatorHandler, mapper)
        {
            _mapper = mapper;
        }

        public async Task<OperationResult> AddPaymentAsync(AddPaymentTypeViewModel model)
        {
            var addPaymentTypeCmd = _mapper.Map<AddPaymentTypeCommand>(model);

            await mediatorHandler.PublishCommandAsync<AddPaymentTypeCommand>(addPaymentTypeCmd);


        }
    }
}
