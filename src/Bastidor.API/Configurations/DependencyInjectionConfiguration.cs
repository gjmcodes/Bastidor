using Bastidor.CrossCutting.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace Bastidor.API.Configurations
{
    public static class DependencyInjectionConfiguration
    {
        public static void AddDependencyInjection(this IServiceCollection services)
        {
            NativeInjectorBootstrapper.RegisterServices(services);
        }
    }
}
