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
            // Validation
            if (string.IsNullOrWhiteSpace(ad) || string.IsNullOrWhiteSpace(eposta) || string.IsNullOrWhiteSpace(mesaj))
            {
                if (Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                {
                    return Json(new { success = false, message = "Lütfen tüm alanları doldurun!" });
                }
                ViewBag.Sonuc = "Lütfen tüm alanları doldurun!";
                return View("Index");
            }

            // Burada veriyi aldık, veritabanına kaydedilebilir veya email gönderilebilir
            var mesajMetni = $"Teşekkürler {ad}! Mesajınız başarıyla alındı. En kısa sürede {eposta} adresine dönüş yapacağız.";

            // AJAX isteği mi kontrolü
            if (Request.Headers["X-Requested-With"] == "XMLHttpRequest")
            {
                return Json(new { success = true, message = mesajMetni });
            }

            ViewBag.Sonuc = mesajMetni;
            return View("Index");
        }
    }
}