using Bastidor.Application.Services.Payments;
using Bastidor.Application.ViewModels.Payments;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Bastidor.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentAppService _paymentAppService;

        public PaymentController(IPaymentAppService paymentAppService)
        {
            _paymentAppService = paymentAppService;
        }


        [HttpPost]
        [Route("AddPaymentType")]
        public async Task<IActionResult> AddPaymentType(AddPaymentTypeViewModel model)
        {
            var result = await _paymentAppService.AddPaymentAsync(model);

            if (result.IsValid)
                return Ok(result);

            return BadRequest(result.Validations);
        }
    }
}