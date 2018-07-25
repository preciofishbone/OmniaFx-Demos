using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.Extensions;
using System;

namespace Omnia.Fx.Test
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                BuildWebHost(args)
                .Run();              

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public static IWebHost BuildWebHost(string[] args) =>
          WebHost.CreateDefaultBuilder(args)
                .UseOmniaWebAppConfiguration<Startup>(
                  OmniaWebAppConfiguration.Instance.AddOmniaFxWebApp()
                )            
                .Build();
    }
}
