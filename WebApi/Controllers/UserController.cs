using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //[Route("Login")]  //can use either 
        [HttpGet("Login")]
        public ActionResult<IEnumerable> Login(string user_email)
        {
            string[] _usersArr = { "bp@test.com" };

            if (_usersArr.Contains(user_email))
                return new JsonResult(new { IsSuccess = 1, message = "User loggedin successfully!" });
            else
                return new JsonResult(new { IsSuccess = 0, message = "Authentication failed!" });
        }

        // GET api/values
        [HttpGet]
        public ActionResult<UserDetails[]> Get()
        {
            IList<UserDetails> usrList = new List<UserDetails>();
            usrList.Add(new UserDetails() { user_name = "BP", user_email = "bp@test.com", city_id = 1 });
            usrList.Add(new UserDetails() { user_name = "GP", user_email = "mb@test.com", city_id = 3 });

            return usrList.ToArray();
        }
    }
}