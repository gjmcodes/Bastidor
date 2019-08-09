using AutoMapper;
using Bastidor.Domain.Handlers;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Payments.Commands;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using Bastidor.Domain.Payments.Repositories.Persistence;
using Bastidor.Application.Services.Payments;
using Bastidor.Domain.Core.Notifications;

namespace Bastidor.CrossCutting.IoC
{
    public class NativeInjectorBootstrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {

            //services.AddSingleton(Mapper.Configuration);
            services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<IConfigurationProvider>(), sp.GetService));


            //Domain Bus
            services.AddScoped<IMediatorHandler, MediatorHandler>();

            //Domain Commands
            services.AddScoped<IRequestHandler<AddPaymentTypeCommand>, PaymentTypeCommandHandler>();

            //Domain Notifications
            services.AddScoped<INotificationHandler<DomainNotification>, DomainNotificationHandler>();


            // Infra - Data
            services.AddScoped<IUnitOfWork, UoW>();


            // Application
            services.AddScoped<IPaymentAppService, PaymentAppService>();
        }
    }
}
