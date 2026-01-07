using Microsoft.AspNetCore.Mvc;

namespace BilgeAriMVC.Controllers
{
    public class IletisimController : Controller
    {
        // 1. Veri Gösterimi: Formun açılacağı sayfa (GET)
        public IActionResult Index()
        {
            return View();
        }

        // 2. Veri Alış-verişi: Form gönderildiğinde çalışacak kısım (POST)
        [HttpPost]
        public IActionResult MesajGonder(string ad, string eposta, string mesaj)
        {
            // Burada veriyi aldık, şimdilik sadece ekrana geri basalım
            ViewBag.Sonuc = $"Teşekkürler {ad}! Mesajın elimize ulaştı. En kısa sürede {eposta} adresine döneceğiz.";

            return View("Index");
        }
    }
}