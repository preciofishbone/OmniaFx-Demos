using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Omnia.Fx.Test.Controllers
{
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        [HttpGet, Route("dummy")]
        public string Dummy()
        {
            return "i'm dummy";
        }
    }
}
