using Bastidor.Application.ViewModels.Application;
using Bastidor.Application.ViewModels.Payments;
using System.Threading.Tasks;

namespace Bastidor.Application.Services.Payments
{
    public interface IPaymentAppService
    {
        Task<OperationResult> AddPaymentAsync(AddPaymentTypeViewModel model);
    }
}
