using System.Diagnostics;
using BilgeAriMVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace BilgeAriMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult felsefibilgin()
        {
            return View();
        }

        public IActionResult kodlamauzmani()
        {
            return View("kodlamauzmani");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
//yorum