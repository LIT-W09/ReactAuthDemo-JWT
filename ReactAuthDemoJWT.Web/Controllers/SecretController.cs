using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactAuthDemoJWT.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SecretController : ControllerBase
    {
        [HttpGet]
        [Route("getdata")]
        public object GetSecretData()
        {
            var currentUser = User.FindFirst("user").Value;
            return new { message = $"This is a huge secret!! and you are {currentUser}" };
        }
    }
}
