using LibReactComponentsStarter.InMemoryDb;

using Microsoft.AspNetCore.Mvc;

namespace LibReactComponentsStarter.Controllers
{
    public class DevController : Controller
    {
        public IActionResult Devs()
        {
            return View("Index", DevDb.Devs);
        }
    }
}
