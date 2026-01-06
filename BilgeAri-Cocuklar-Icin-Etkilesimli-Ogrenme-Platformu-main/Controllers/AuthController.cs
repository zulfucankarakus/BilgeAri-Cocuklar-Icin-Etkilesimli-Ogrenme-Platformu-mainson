using BilgeAriMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace BilgeAriMVC.Controllers
{
    public class AuthController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<AuthController> _logger;

        public AuthController(ApplicationDbContext context, ILogger<AuthController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: /Auth/Login
        [HttpGet]
        public IActionResult Login()
        {
            // Eğer zaten giriş yapmışsa anasayfaya yönlendir
            if (HttpContext.Session.GetString("UserId") != null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        // POST: /Auth/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(new { success = false, message = "Lütfen tüm alanları doldurun" });
            }

            try
            {
                var hashedPassword = HashPassword(model.Password);
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == hashedPassword && u.IsActive);

                if (user == null)
                {
                    return Json(new { success = false, message = "E-posta veya şifre hatalı!" });
                }

                // Session'a kullanıcı bilgilerini kaydet
                HttpContext.Session.SetString("UserId", user.Id.ToString());
                HttpContext.Session.SetString("UserName", user.Name);
                HttpContext.Session.SetString("UserEmail", user.Email);

                return Json(new { success = true, message = "Giriş başarılı! Yönlendiriliyorsunuz..." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Login hatası");
                return Json(new { success = false, message = "Bir hata oluştu. Lütfen tekrar deneyin." });
            }
        }

        // GET: /Auth/Signup
        [HttpGet]
        public IActionResult Signup()
        {
            if (HttpContext.Session.GetString("UserId") != null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        // POST: /Auth/Signup
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Signup(SignupViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage);
                return Json(new { success = false, message = string.Join(" ", errors) });
            }

            try
            {
                // E-posta kontrolü
                var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (existingUser != null)
                {
                    return Json(new { success = false, message = "Bu e-posta adresi zaten kayıtlı!" });
                }

                // Yeni kullanıcı oluştur
                var user = new User
                {
                    Name = model.Name,
                    Email = model.Email,
                    Password = HashPassword(model.Password),
                    CreatedAt = DateTime.UtcNow,
                    IsActive = true
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Otomatik giriş yap
                HttpContext.Session.SetString("UserId", user.Id.ToString());
                HttpContext.Session.SetString("UserName", user.Name);
                HttpContext.Session.SetString("UserEmail", user.Email);

                return Json(new { success = true, message = "Kayıt başarılı! Yönlendiriliyorsunuz..." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Signup hatası");
                return Json(new { success = false, message = "Bir hata oluştu. Lütfen tekrar deneyin." });
            }
        }

        // GET: /Auth/Forgot
        [HttpGet]
        public IActionResult Forgot()
        {
            return View();
        }

        // POST: /Auth/Forgot
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Forgot(ForgotPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(new { success = false, message = "Lütfen tüm alanları doldurun" });
            }

            try
            {
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == model.Email && u.FavoriteNumber == model.FavoriteNumber);

                if (user == null)
                {
                    return Json(new { success = false, message = "E-posta veya favori sayı hatalı!" });
                }

                // Şifre sıfırlama linki gönderildi mesajı (gerçekte e-posta gönderilmeli)
                return Json(new { 
                    success = true, 
                    message = "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi!",
                    userId = user.Id // Geçici olarak - gerçek uygulamada token kullanılmalı
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Forgot password hatası");
                return Json(new { success = false, message = "Bir hata oluştu. Lütfen tekrar deneyin." });
            }
        }

        // GET: /Auth/Logout
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }

        // Password hashing fonksiyonu
        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hashedBytes);
            }
        }

        // ============ CRUD İŞLEMLERİ ============

        // GET: /Auth/Profile
        [HttpGet]
        public async Task<IActionResult> Profile()
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return RedirectToAction("Login");
            }

            var user = await _context.Users.FindAsync(int.Parse(userId));
            if (user == null)
            {
                return RedirectToAction("Login");
            }

            return View(user);
        }

        // GET: /Auth/GetAllUsers - Tüm kullanıcıları listele (Admin için)
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return Json(new { success = false, message = "Lütfen giriş yapın" });
            }

            try
            {
                var users = await _context.Users
                    .Where(u => u.IsActive)
                    .Select(u => new
                    {
                        u.Id,
                        u.Name,
                        u.Email,
                        u.CreatedAt
                    })
                    .ToListAsync();

                return Json(new { success = true, data = users });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Get all users hatası");
                return Json(new { success = false, message = "Kullanıcılar yüklenirken hata oluştu" });
            }
        }

        // GET: /Auth/GetUser/{id} - Belirli bir kullanıcıyı getir
        [HttpGet]
        public async Task<IActionResult> GetUser(int id)
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return Json(new { success = false, message = "Lütfen giriş yapın" });
            }

            try
            {
                var user = await _context.Users.FindAsync(id);
                if (user == null || !user.IsActive)
                {
                    return Json(new { success = false, message = "Kullanıcı bulunamadı" });
                }

                var userInfo = new
                {
                    user.Id,
                    user.Name,
                    user.Email,
                    user.CreatedAt,
                    user.UpdatedAt
                };

                return Json(new { success = true, data = userInfo });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Get user hatası");
                return Json(new { success = false, message = "Kullanıcı yüklenirken hata oluştu" });
            }
        }

        // POST: /Auth/UpdateUser - Kullanıcı bilgilerini güncelle
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateUser(int id, string name)
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return Json(new { success = false, message = "Lütfen giriş yapın" });
            }

            // Sadece kendi profilini güncelleyebilir
            if (userId != id.ToString())
            {
                return Json(new { success = false, message = "Bu işlem için yetkiniz yok" });
            }

            try
            {
                var user = await _context.Users.FindAsync(id);
                if (user == null || !user.IsActive)
                {
                    return Json(new { success = false, message = "Kullanıcı bulunamadı" });
                }

                // Sadece isim güncellenir, email değişmez
                user.Name = name;
                user.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                // Session'ı güncelle
                HttpContext.Session.SetString("UserName", user.Name);

                return Json(new { success = true, message = "Profil başarıyla güncellendi" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Update user hatası");
                return Json(new { success = false, message = "Güncelleme sırasında hata oluştu" });
            }
        }

        // POST: /Auth/UpdatePassword - Şifre güncelle
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdatePassword(string currentPassword, string newPassword)
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return Json(new { success = false, message = "Lütfen giriş yapın" });
            }

            try
            {
                var user = await _context.Users.FindAsync(int.Parse(userId));
                if (user == null || !user.IsActive)
                {
                    return Json(new { success = false, message = "Kullanıcı bulunamadı" });
                }

                // Mevcut şifre kontrolü
                var hashedCurrentPassword = HashPassword(currentPassword);
                if (user.Password != hashedCurrentPassword)
                {
                    return Json(new { success = false, message = "Mevcut şifre hatalı" });
                }

                // Yeni şifre
                user.Password = HashPassword(newPassword);
                user.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                return Json(new { success = true, message = "Şifre başarıyla güncellendi" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Update password hatası");
                return Json(new { success = false, message = "Şifre güncellenirken hata oluştu" });
            }
        }

        // POST: /Auth/DeleteUser - Kullanıcı hesabını sil (soft delete)
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var userId = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(userId))
            {
                return Json(new { success = false, message = "Lütfen giriş yapın" });
            }

            // Sadece kendi hesabını silebilir
            if (userId != id.ToString())
            {
                return Json(new { success = false, message = "Bu işlem için yetkiniz yok" });
            }

            try
            {
                var user = await _context.Users.FindAsync(id);
                if (user == null)
                {
                    return Json(new { success = false, message = "Kullanıcı bulunamadı" });
                }

                // Soft delete
                user.IsActive = false;
                user.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                // Çıkış yap
                HttpContext.Session.Clear();

                return Json(new { success = true, message = "Hesap başarıyla silindi" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Delete user hatası");
                return Json(new { success = false, message = "Hesap silinirken hata oluştu" });
            }
        }
    }
}
