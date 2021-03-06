using System.Threading;
using System.Threading.Tasks;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Handlers;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Pricings.Models;
using Bastidor.Domain.Pricings.Repositoires.Persistent;
using MediatR;


namespace Bastidor.Domain.Pricings.Commands
{
    public class ProductProfitCommandHandler : CommandHandler,
            IRequestHandler<AddProductProfitCommand>

    {
        private readonly IProductProfitPersistentRepository _productProfitRepository;
        public ProductProfitCommandHandler(IProductProfitPersistentRepository productProfitRepository,
        IUnitOfWork unitOfWork,
        IMediatorHandler mediatorHandler,
         INotificationHandler<DomainNotification> domainNotificationHandler) : base(unitOfWork, mediatorHandler, domainNotificationHandler)
        {
            _productProfitRepository = productProfitRepository;
        }

        public async Task<Unit> Handle(AddProductProfitCommand request, CancellationToken cancellationToken)
        {
            var entity = new PricingProductProfit(request.ProfitValue);

            if (entity.IsValid())
                return await Unit.Task;

            await _productProfitRepository.AddAsync(entity);

            if (await _unitOfWork.CommitAsync())
            {
                //_mediatorHandler.PublishEventAsync(new DomainNotification())
            }

            return await Unit.Task;
        }
    }
}