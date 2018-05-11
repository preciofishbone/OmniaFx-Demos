using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Omnia.Fx.NetCore.HostConfiguration.Extensions;
using System;

namespace Omnia.Fx.Demo
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
                .AddOmniaFxNetCore<Startup>()
                .Build();
    }
}
