using AutoMapper;
using Bastidor.Domain.Handlers;
using Bastidor.Domain.Interfaces;
using Bastidor.Domain.Payments.Commands;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using Bastidor.Infra.Data.UoW;
using Bastidor.Infra.Data.Contexts;
using Bastidor.Domain.Payments.Repositories.Persistence;
using Bastidor.Infra.Data.Repositories.Persistent;
using Bastidor.Application.Services.Payments;

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


            // Infra - Data
            services.AddScoped<BastidorContext>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IPaymentTypePersistentRepository, PaymentTypePersistentRepository>();

            // Application
            services.AddScoped<IPaymentAppService, PaymentAppService>();
        }
    }
}
