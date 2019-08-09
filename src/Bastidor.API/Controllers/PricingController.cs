using System.Threading.Tasks;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Pricings.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bastidor.API.Controllers
{
    public class PricingController : BaseController
    {
        public PricingController(IMediatorHandler mediatrHandler, INotificationHandler<DomainNotification> notificationHandler) : base(mediatrHandler, notificationHandler)
        {
        }

        [HttpGet()]
        public IActionResult Get()
        {
            return Ok("OK!");
        }

        [HttpPost("PaymentMethod/Create")]
        public async Task<IActionResult> CreatePaymentMethod(AddPaymentMethodCommand command)
        {
            await mediatrHandler.PublishCommandAsync(command);

            return Result();
        }
    }
}