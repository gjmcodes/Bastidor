using System.Linq;
using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Core.Notifications;
using Bastidor.Domain.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bastidor.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController : ControllerBase
    {
        protected IMediatorHandler mediatrHandler;
        private readonly DomainNotificationHandler notificationHandler;

        protected BaseController(IMediatorHandler mediatrHandler, INotificationHandler<DomainNotification> notificationHandler)
        {
            this.mediatrHandler = mediatrHandler;
            this.notificationHandler = (DomainNotificationHandler)notificationHandler;
        }


        protected IActionResult Result(object data = null)
        {

            var validations = notificationHandler.GetNotifications();
            var opResult = new OperationResult(validations.ToDictionary(x => x.Key, y => y.Value), data);

            if (opResult.IsValid)
                return Ok(opResult);

            return BadRequest(opResult);
        }
        protected OperationResult GetOperationResult(object data)
        {
            var validations = notificationHandler.GetNotifications();
            var opResult = new OperationResult(validations.ToDictionary(x => x.Key, y => y.Value), data);

            return opResult;
        }
    }
}