using System.Diagnostics;
using BilgeAriMVC.Models;
using BilgeAriMVC.Filters;
using Microsoft.AspNetCore.Mvc;

namespace BilgeAriMVC.Controllers
{
    [AuthorizeSession] // Tüm action'lara session kontrolü ekle
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            // Kullanıcı bilgilerini ViewBag'e aktar
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserEmail = HttpContext.Session.GetString("UserEmail");
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

        public IActionResult dogadedektifleri()
        {
            return View();
        }

        public IActionResult bilimbahcesi()
        {
            return View();
        }

        public IActionResult ingilizcedehasi()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}