using System.Threading.Tasks;
using AutoMapper;
using Bastidor.Application.ViewModels.Application;
using Bastidor.Application.ViewModels.Payments;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Payments.Commands;
using MediatR;

namespace Bastidor.Application.Services.Payments
{
    public class PaymentAppService : BaseAppService, IPaymentAppService
    {

        public PaymentAppService(IMediatorHandler mediatorHandler, 
            IMapper mapper, 
            INotificationHandler<DomainNotification> notificationHandler)
            : base(mediatorHandler, mapper, notificationHandler)
        {
        }

        public async Task<OperationResult> AddPaymentAsync(AddPaymentTypeViewModel model)
        {
            var addPaymentTypeCmd = mapper.Map<AddPaymentTypeCommand>(model);

            await mediatorHandler.PublishCommandAsync(addPaymentTypeCmd);


            return OperationResult();
        }
    }
}
