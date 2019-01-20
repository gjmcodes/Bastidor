using Bastidor.Application.ViewModels.Payment;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Bastidor.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        [HttpPost]
        public Task<IActionResult> AddPaymentType(AddPaymentTypeViewModel model)
        {

        }
    }
}