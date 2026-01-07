# 📚 BİLGE ARI PROJESİ - YAPILAN DEĞİŞİKLİKLER DOKÜMANTASYONU

## 📋 İçindekiler
1. [Proje Yapısı](#proje-yapısı)
2. [Database Bağlantısı](#database-bağlantısı)
3. [Authentication Sistemi](#authentication-sistemi)
4. [Sayfa Düzenlemeleri](#sayfa-düzenlemeleri)
5. [CSS ve Stil Değişiklikleri](#css-ve-stil-değişiklikleri)
6. [Session Yönetimi](#session-yönetimi)
7. [Dosya Yapısı](#dosya-yapısı)

---

## 🏗️ Proje Yapısı

### Teknoloji Stack
- **Backend:** ASP.NET Core MVC (.NET 8.0)
- **Frontend:** Razor Pages + Bootstrap 5.3.3
- **Database:** SQLite (Entity Framework Core 8.0)
- **Session:** In-Memory Distributed Cache

### Ana Klasör Yapısı
```
/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main/
├── Controllers/          # Controller dosyaları
│   ├── HomeController.cs
│   └── AuthController.cs
├── Models/              # Model ve ViewModel'ler
│   ├── User.cs
│   ├── AuthViewModels.cs
│   └── ErrorViewModel.cs
├── Data/                # Database Context
│   └── ApplicationDbContext.cs
├── Filters/             # Custom Filter'lar
│   └── AuthorizeSessionAttribute.cs
├── Views/               # Razor View dosyaları
│   ├── Shared/
│   │   └── _Layout.cshtml
│   ├── Home/
│   │   ├── Index.cshtml
│   │   ├── kodlamauzmani.cshtml
│   │   ├── felsefibilgin.cshtml
│   │   ├── dogadedektifleri.cshtml
│   │   ├── bilimbahcesi.cshtml
│   │   └── ingilizcedehasi.cshtml
│   └── Auth/
│       ├── Login.cshtml
│       ├── Signup.cshtml
│       ├── Forgot.cshtml
│       └── Profile.cshtml
├── wwwroot/             # Statik dosyalar
│   ├── css/
│   ├── js/
│   └── images/
├── Program.cs           # Ana giriş noktası
├── appsettings.json     # Yapılandırma
└── BilgeAriMVC.csproj   # Proje dosyası
```

---

## 💾 Database Bağlantısı

### 1. Database Yapılandırması

**Dosya:** `/Program.cs`
**Satırlar:** 10-16

```csharp
// Database bağlantısı (SQLite)
var dbPath = Path.Combine(AppContext.BaseDirectory, "bilgeari.db");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

Console.WriteLine($"Database konumu: {dbPath}");
```

**Database Dosya Yolu:**
- Dosya adı: `bilgeari.db`
- Konum: `[Proje Klasörü]/bin/Debug/net8.0/bilgeari.db`
- İlk çalıştırmada otomatik oluşur

### 2. Database Context

**Dosya:** `/Data/ApplicationDbContext.cs`

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Email unique constraint
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();
    }
}
```

### 3. User Model

**Dosya:** `/Models/User.cs`

```csharp
public class User
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; }
    
    [Required]
    [StringLength(255)]
    public string Password { get; set; }  // SHA256 hash
    
    public int? FavoriteNumber { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public bool IsActive { get; set; } = true;
}
```

### 4. Database Otomatik Oluşturma

**Dosya:** `/Program.cs`
**Satırlar:** 28-33

```csharp
// Database'i oluştur/güncelle
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.EnsureCreated();
}
```

### 5. appsettings.json

**Dosya:** `/appsettings.json`

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=bilgeari.db"
  }
}
```

---

## 🔐 Authentication Sistemi

### 1. AuthController

**Dosya:** `/Controllers/AuthController.cs`

#### Login (Giriş)
- **Route:** `GET/POST /Auth/Login`
- **View:** `/Views/Auth/Login.cshtml`
- **Özellikler:**
  - Email ve şifre kontrolü
  - SHA256 password hash
  - Session oluşturma
  - AntiForgeryToken

#### Signup (Kayıt)
- **Route:** `GET/POST /Auth/Signup`
- **View:** `/Views/Auth/Signup.cshtml`
- **Özellikler:**
  - Email benzersizlik kontrolü
  - Şifre validasyonu (min 6 karakter, büyük/küçük harf, rakam, özel karakter)
  - Otomatik login
  - Hash ile şifre saklama

#### Forgot Password (Şifre Sıfırlama)
- **Route:** `GET/POST /Auth/Forgot`
- **View:** `/Views/Auth/Forgot.cshtml`
- **Özellikler:**
  - Email ve favori sayı kontrolü
  - Şifre sıfırlama mekanizması

#### Profile (Profil)
- **Route:** `GET /Auth/Profile`
- **View:** `/Views/Auth/Profile.cshtml`
- **Özellikler:**
  - Ad soyad düzenleme
  - Email görüntüleme (readonly)
  - Şifre değiştirme
  - Hesap silme (soft delete)

#### Logout (Çıkış)
- **Route:** `GET /Auth/Logout`
- **İşlev:** Session temizleme ve Login'e yönlendirme

### 2. CRUD İşlemleri

**Dosya:** `/Controllers/AuthController.cs`

| İşlem | Metod | Route | Açıklama |
|-------|-------|-------|----------|
| **CREATE** | `POST /Auth/Signup` | Yeni kullanıcı oluştur | Email benzersiz olmalı |
| **READ** | `GET /Auth/Profile` | Kullanıcı bilgilerini getir | Session kontrolü |
| **READ** | `GET /Auth/GetUser/{id}` | Belirli kullanıcıyı getir | JSON response |
| **READ** | `GET /Auth/GetAllUsers` | Tüm kullanıcıları listele | JSON response |
| **UPDATE** | `POST /Auth/UpdateUser` | Ad soyad güncelle | Email değiştirilemez |
| **UPDATE** | `POST /Auth/UpdatePassword` | Şifre güncelle | Mevcut şifre kontrolü |
| **DELETE** | `POST /Auth/DeleteUser` | Hesap sil | Soft delete (IsActive=false) |

### 3. Password Hash

**Dosya:** `/Controllers/AuthController.cs`
**Metod:** `HashPassword()`

```csharp
private string HashPassword(string password)
{
    using (var sha256 = SHA256.Create())
    {
        var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(hashedBytes);
    }
}
```

---

## 📄 Sayfa Düzenlemeleri

### 1. Layout (Ana Şablon)

**Dosya:** `/Views/Shared/_Layout.cshtml`

**Değişiklikler:**

#### a) Navbar (Üst Menü)
- **Session Kontrolü:** Sadece giriş yapınca görünür (satır 197)
```cshtml
@if (Context.Session.GetString("UserId") != null)
{
    <header>
        <nav class="navbar">
            <!-- Navbar içeriği -->
        </nav>
    </header>
}
```

#### b) Navbar Linkleri
- Tüm linkler emoji'li
- ASP.NET MVC action'ları ile yönlendirme
```cshtml
<li><a asp-controller="Home" asp-action="Index">🏠 Anasayfa</a></li>
<li><a asp-controller="Home" asp-action="kodlamauzmani">💻 Kodlama Uzmanı</a></li>
```

#### c) Hesabım Dropdown
**Satırlar:** 240-260
```cshtml
<li class="nav-item dropdown">
    <a id="hesabimDropdown" data-bs-toggle="dropdown">Hesabım</a>
    <ul class="dropdown-menu">
        <li><a asp-controller="Auth" asp-action="Profile">Profilim</a></li>
        <li><a asp-controller="Auth" asp-action="Logout">Çıkış Yap</a></li>
    </ul>
</li>
```
- İlerlemelerim kaldırıldı ❌
- Ayarlar kaldırıldı ❌

#### d) Footer
- **Session Kontrolü:** Sadece giriş yapınca görünür (satır 287)
- Hızlı erişim, İletişim, Sosyal medya bölümleri

#### e) CSS Stilleri (Inline)
**Satırlar:** 15-188
- Navbar stilleri
- Dropdown stilleri
- Footer stilleri
- Z-index ayarları

### 2. Anasayfa (Index)

**Dosya:** `/Views/Home/Index.cshtml`

**Değişiklikler:**

#### a) Kullanıcı Karşılama
**Satırlar:** 13-18
```cshtml
@if (!string.IsNullOrEmpty(ViewBag.UserName))
{
    <p>Merhaba <strong>@ViewBag.UserName</strong>! 👋</p>
}
```

#### b) Container Override
**Satırlar:** 5-28
```css
.container {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
}
```
- Full-width layout için
- Görsellerin düzgün görünmesi için

#### c) Gradient Arka Plan
```css
body {
    background: linear-gradient(180deg, #FFF9C4 0%, #FFECB3 30%, #FFE082 50%, #FFD54F 100%) !important;
}
```

### 3. Kodlama Uzmanı

**Dosya:** `/Views/Home/kodlamauzmani.cshtml`

**Değişiklikler:**

#### a) Layout Kullanımı
- Önceden kendi navbar/footer'ı vardı
- Şimdi Layout kullanıyor
- **Satır 1-2:**
```cshtml
ViewData["Title"] = "Kodlama Uzmanı";
Layout = "~/Views/Shared/_Layout.cshtml";
```

#### b) Tema Değiştirme
- Karanlık/Aydınlık mod butonları çalışıyor
- **Satırlar:** 5-60 (style bölümü)
```css
body[data-theme="dark"] {
    background-color: #1a1a2e;
    /* Karanlık tema stilleri */
}
```

#### c) Footer/Navbar
- Layout'tan geliyor, kendi navbar/footer kaldırıldı

### 4. Felsefi Bilgin

**Dosya:** `/Views/Home/felsefibilgin.cshtml`

**Değişiklikler:**

#### a) Layout Düzeltmesi
**Satırlar:** 1-4
```cshtml
@{
    ViewData["Title"] = "Felsefi Bilgin";
    Layout = "~/Views/Shared/_Layout.cshtml";
}
```
- ViewData en üstte (düzeltildi)
- @section Styles altında

#### b) Z-Index Düzeltmesi
**Satırlar:** 15-23
```css
.felsefe-header, .container, section {
    z-index: 1 !important;
}
```

#### c) Arka Plan
```css
body {
    background-color: #FEFBEA !important;
}
```

### 5. Doğa Dedektifi

**Dosya:** `/Views/Home/dogadedektifleri.cshtml`

**Değişiklikler:**

#### a) Fazladan Navbar Kaldırıldı
- Önceden kendi navbar'ı vardı (kaldırıldı)
- Şimdi Layout'tan geliyor

#### b) Z-Index Düzeltmesi
**Satırlar:** 15-23
```css
.dod-page, .hero-dod, section {
    z-index: 1 !important;
}
```

#### c) Arka Plan
```css
body {
    background: linear-gradient(to bottom, #e8f5e9, #fffde7) !important;
}
```

### 6. Bilim Bahçesi & İngilizce Dehası

**Dosyalar:** 
- `/Views/Home/bilimbahcesi.cshtml`
- `/Views/Home/ingilizcedehasi.cshtml`

**Özellikler:**
- Placeholder sayfalar
- "Yakında Burada!" mesajı
- Layout kullanıyor

### 7. Login Sayfası

**Dosya:** `/Views/Auth/login.cshtml`

**Değişiklikler:**

#### a) Model Binding
**Satır 1:**
```cshtml
@model BilgeAriMVC.Models.LoginViewModel
```

#### b) Form Action
```cshtml
<form asp-controller="Auth" asp-action="Login" method="post">
    @Html.AntiForgeryToken()
    <input asp-for="Email" />
    <input asp-for="Password" />
</form>
```

#### c) AJAX Gönderimi
**Satırlar:** 42-65
```javascript
const response = await fetch(this.action, {
    method: 'POST',
    body: formData
});
const result = await response.json();
```

### 8. Signup Sayfası

**Dosya:** `/Views/Auth/signup.cshtml`

**Değişiklikler:**

#### a) Model Binding
```cshtml
@model BilgeAriMVC.Models.SignupViewModel
```

#### b) Şifre Validasyonu
- Mesaj eklendi
- Frontend ve backend validasyon

### 9. Forgot Password

**Dosya:** `/Views/Auth/forgot.cshtml`

**Değişiklikler:**

#### a) Model Binding
```cshtml
@model BilgeAriMVC.Models.ForgotPasswordViewModel
```

#### b) Favori Sayı Alanı
```cshtml
<input asp-for="FavoriteNumber" />
```

### 10. Profile Sayfası

**Dosya:** `/Views/Auth/Profile.cshtml`

**Değişiklikler:**

#### a) Email Readonly
**Satırlar:** 55-62
```html
<input type="email" id="email" value="@Model.Email" 
       readonly 
       style="background-color: #f5f5f5; cursor: not-allowed;">
<small>ℹ️ E-posta adresi değiştirilemez</small>
```

#### b) Ad Soyad Güncelleme
**Satırlar:** 84-114
```javascript
formData.append('name', name);
// Email GÖNDERİLMİYOR
```

#### c) Şifre Değiştirme
**Satırlar:** 117-151
```javascript
formData.append('currentPassword', currentPassword);
formData.append('newPassword', newPassword);
```

#### d) Hesap Silme
**Satırlar:** 154-185
```javascript
async function deleteAccount() {
    if (confirm('Emin misin?')) {
        // Soft delete
    }
}
```

---

## 🎨 CSS ve Stil Değişiklikleri

### 1. Global CSS (site.css)

**Dosya:** `/wwwroot/css/site.css`

**Değişiklikler:**

#### a) Body Stilleri
**Satırlar:** 14-51
```css
body {
    font-family: 'Nunito', 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    margin-bottom: 60px;
}

/* Bal peteği arka planı - sadece bazı sayfalarda */
body:not(.anasayfa):not(.login-page):not(.signup-page):not(.forgot-page):not(.dod-page) {
    background-color: #ffe082;
    /* Bal peteği deseni */
}
```

#### b) Animasyon
**Satırlar:** 55-58
```css
@keyframes moveHoneyComb {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
}
```

### 2. Layout Stilleri

**Dosya:** `/Views/Shared/_Layout.cshtml`

#### a) Navbar CSS
**Satırlar:** 15-63
```css
header {
    background: #b2d8f9;
    z-index: 9999 !important;
}

.navbar {
    background-color: #b2d8f9 !important;
    z-index: 9999 !important;
}
```

#### b) Dropdown CSS
**Satırlar:** 65-88
```css
.dropdown-menu {
    background-color: #0e6e5f !important;
    z-index: 10000 !important;
}

.dropdown-item {
    color: white !important;
}
```

#### c) Footer CSS
**Satırlar:** 90-174
```css
footer {
    background: #b2d8f9;
    z-index: 100;
}
```

#### d) Responsive CSS
**Satırlar:** 176-188
```css
@@media (max-width: 768px) {
    .footer-content-wrapper {
        flex-direction: column;
    }
}
```

### 3. Z-Index Hiyerarşisi

**Düzeltilen Dosyalar:**
- `/Views/Shared/_Layout.cshtml` (navbar, dropdown)
- `/Views/Home/felsefibilgin.cshtml` (içerik)
- `/Views/Home/dogadedektifleri.cshtml` (içerik)
- `/wwwroot/css/dogadedektifleri.css` (info-box)

**Z-Index Değerleri:**
```
Dropdown Menu: 10000  (en üstte)
Navbar:        9999
Info-boxes:    100
Content:       1      (en altta)
```

### 4. Sayfa-Özel CSS

| Sayfa | CSS Dosyası | Özel Arka Plan |
|-------|-------------|----------------|
| Anasayfa | anasayfa.css | Gradient sarı (#FFF9C4 → #FFD54F) |
| Kodlama | kodlamauzmani.css | Bal peteği (animasyonlu) |
| Felsefe | felsefibilgin.css | Parşömen beyazı (#FEFBEA) |
| Doğa | dogadedektifleri.css | Yeşil-sarı gradient |
| Login | login.css | Gradient sarı |
| Signup | signup.css | Gradient sarı |
| Forgot | forgot.css | Gradient sarı |

---

## 🔑 Session Yönetimi

### 1. Session Yapılandırması

**Dosya:** `/Program.cs`
**Satırlar:** 18-25

```csharp
// Session servisi
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
```

**Özellikler:**
- Timeout: 30 dakika
- HttpOnly: true (XSS koruması)
- Essential: true (GDPR)

### 2. Session Middleware

**Dosya:** `/Program.cs`
**Satır:** 42

```csharp
app.UseSession();
```

### 3. Session Değişkenleri

**AuthController'da Kullanım:**

#### Giriş (Login/Signup)
```csharp
HttpContext.Session.SetString("UserId", user.Id.ToString());
HttpContext.Session.SetString("UserName", user.Name);
HttpContext.Session.SetString("UserEmail", user.Email);
```

#### Çıkış (Logout)
```csharp
HttpContext.Session.Clear();
```

#### Kontrol (Profile, vb.)
```csharp
var userId = HttpContext.Session.GetString("UserId");
if (string.IsNullOrEmpty(userId))
{
    return RedirectToAction("Login");
}
```

### 4. AuthorizeSession Filter

**Dosya:** `/Filters/AuthorizeSessionAttribute.cs`

```csharp
public class AuthorizeSessionAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        var userId = context.HttpContext.Session.GetString("UserId");
        
        if (string.IsNullOrEmpty(userId))
        {
            context.Result = new RedirectToActionResult("Login", "Auth", null);
        }
    }
}
```

**Kullanım:**
```csharp
[AuthorizeSession]
public class HomeController : Controller
{
    // Tüm action'lar korunuyor
}
```

### 5. Layout Session Kontrolü

**Dosya:** `/Views/Shared/_Layout.cshtml`

```cshtml
@if (Context.Session.GetString("UserId") != null)
{
    <!-- Navbar görünür -->
}

@if (Context.Session.GetString("UserId") != null)
{
    <!-- Footer görünür -->
}
```

---

## 📁 Dosya Yapısı - Detaylı

### Controllers (2 dosya)

```
/Controllers/
├── HomeController.cs           # Ana sayfa controller'ı
│   ├── [AuthorizeSession]      # Session kontrolü
│   ├── Index()                 # Anasayfa
│   ├── kodlamauzmani()         # Kodlama Uzmanı
│   ├── felsefibilgin()         # Felsefi Bilgin
│   ├── dogadedektifleri()      # Doğa Dedektifi
│   ├── bilimbahcesi()          # Bilim Bahçesi
│   ├── ingilizcedehasi()       # İngilizce Dehası
│   └── Privacy()               # Gizlilik
│
└── AuthController.cs           # Authentication controller'ı
    ├── Login()                 # GET/POST
    ├── Signup()                # GET/POST
    ├── Forgot()                # GET/POST
    ├── Logout()                # GET
    ├── Profile()               # GET
    ├── GetAllUsers()           # GET (JSON)
    ├── GetUser(id)             # GET (JSON)
    ├── UpdateUser()            # POST (JSON)
    ├── UpdatePassword()        # POST (JSON)
    └── DeleteUser()            # POST (JSON)
```

### Models (3 dosya)

```
/Models/
├── User.cs                     # Database user model
│   ├── Id (Primary Key)
│   ├── Name
│   ├── Email (Unique)
│   ├── Password (Hashed)
│   ├── FavoriteNumber
│   ├── CreatedAt
│   ├── UpdatedAt
│   └── IsActive
│
├── AuthViewModels.cs           # Form view models
│   ├── LoginViewModel
│   ├── SignupViewModel
│   └── ForgotPasswordViewModel
│
└── ErrorViewModel.cs           # Hata sayfası model
```

### Data (1 dosya)

```
/Data/
└── ApplicationDbContext.cs     # EF Core DbContext
    ├── DbSet<User> Users
    └── OnModelCreating()       # Email unique constraint
```

### Filters (1 dosya)

```
/Filters/
└── AuthorizeSessionAttribute.cs # Session kontrolü filter
    └── OnActionExecuting()
```

### Views - Shared (1 dosya)

```
/Views/Shared/
└── _Layout.cshtml              # Ana şablon
    ├── <!DOCTYPE html>
    ├── <head>
    │   ├── Bootstrap CSS
    │   ├── Custom CSS (inline)
    │   └── @RenderSection("Styles")
    ├── <body>
    │   ├── @if (Session check)
    │   │   └── <header> Navbar
    │   ├── <main>
    │   │   └── @RenderBody()
    │   └── @if (Session check)
    │       └── <footer>
    └── <scripts>
        ├── Bootstrap JS
        └── @RenderSection("Scripts")
```

### Views - Home (7 dosya)

```
/Views/Home/
├── Index.cshtml                # Anasayfa
│   ├── Hero section
│   ├── Maskot container
│   ├── Bilgi kartları
│   └── İlerlemeler
│
├── kodlamauzmani.cshtml        # Kodlama Uzmanı
│   ├── Layout kullanıyor
│   ├── Tema değiştirme
│   ├── Aktivite kartları
│   └── Bug avı oyunu
│
├── felsefibilgin.cshtml        # Felsefi Bilgin
│   ├── Filozof kartları
│   ├── Düşünce oyunları
│   └── Accordion'lar
│
├── dogadedektifleri.cshtml     # Doğa Dedektifi
│   ├── Bitki bahçesi
│   ├── Hayvan dünyası
│   └── Ekoloji oyunları
│
├── bilimbahcesi.cshtml         # Placeholder
├── ingilizcedehasi.cshtml      # Placeholder
└── Privacy.cshtml              # Gizlilik
```

### Views - Auth (4 dosya)

```
/Views/Auth/
├── Login.cshtml                # Giriş sayfası
│   ├── @model LoginViewModel
│   ├── Email input
│   ├── Password input
│   └── AJAX submit
│
├── Signup.cshtml               # Kayıt sayfası
│   ├── @model SignupViewModel
│   ├── Name input
│   ├── Email input
│   ├── Password input
│   └── AJAX submit
│
├── Forgot.cshtml               # Şifre sıfırlama
│   ├── @model ForgotPasswordViewModel
│   ├── Email input
│   ├── FavoriteNumber input
│   └── AJAX submit
│
└── Profile.cshtml              # Profil sayfası
    ├── @model User
    ├── Ad soyad form
    ├── Email (readonly)
    ├── Şifre değiştirme form
    └── Hesap silme button
```

### wwwroot - CSS (7+ dosya)

```
/wwwroot/css/
├── site.css                    # Global CSS
│   ├── Body stilleri
│   ├── Bal peteği arka planı
│   └── Animasyonlar
│
├── anasayfa.css                # Anasayfa CSS
├── kodlamauzmani.css           # Kodlama CSS + Tema
├── felsefibilgin.css           # Felsefe CSS
├── dogadedektifleri.css        # Doğa CSS
├── login.css                   # Login CSS
├── signup.css                  # Signup CSS
└── forgot.css                  # Forgot CSS
```

### wwwroot - JavaScript (5+ dosya)

```
/wwwroot/js/
├── site.js                     # Global JS
├── kodlamauzmani.js            # Kodlama JS + Tema
├── felsefibilgin.js            # Felsefe JS
├── dogadedektifleri.js         # Doğa JS
└── [sayfa].js                  # Diğer sayfalar
```

### wwwroot - Images

```
/wwwroot/images/
├── girismaskot.png             # Ana maskot (785 KB)
├── navbariconlast.png          # Logo (388 KB)
└── [diğer görseller].png/jpg   # 60+ görsel
```

---

## 🔄 Routing Yapısı

### Default Route

**Dosya:** `/Program.cs`
**Satır:** 51

```csharp
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Auth}/{action=Login}/{id?}");
```

**İlk Sayfa:** Auth/Login

### Route Tablosu

| URL | Controller | Action | View | Session Gerekli? |
|-----|------------|--------|------|------------------|
| `/` | Auth | Login | Login.cshtml | Hayır |
| `/Auth/Login` | Auth | Login | Login.cshtml | Hayır |
| `/Auth/Signup` | Auth | Signup | Signup.cshtml | Hayır |
| `/Auth/Forgot` | Auth | Forgot | Forgot.cshtml | Hayır |
| `/Auth/Profile` | Auth | Profile | Profile.cshtml | **Evet** |
| `/Auth/Logout` | Auth | Logout | - (Redirect) | **Evet** |
| `/Home/Index` | Home | Index | Index.cshtml | **Evet** |
| `/Home/kodlamauzmani` | Home | kodlamauzmani | kodlamauzmani.cshtml | **Evet** |
| `/Home/felsefibilgin` | Home | felsefibilgin | felsefibilgin.cshtml | **Evet** |
| `/Home/dogadedektifleri` | Home | dogadedektifleri | dogadedektifleri.cshtml | **Evet** |
| `/Home/bilimbahcesi` | Home | bilimbahcesi | bilimbahcesi.cshtml | **Evet** |
| `/Home/ingilizcedehasi` | Home | ingilizcedehasi | ingilizcedehasi.cshtml | **Evet** |

---

## ⚙️ Yapılandırma Dosyaları

### 1. Program.cs

**Satır Satır Açıklama:**

```csharp
// 1-2: Using'ler
using BilgeAriMVC.Models;
using Microsoft.EntityFrameworkCore;

// 4-6: Builder oluşturma
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

// 10-16: Database bağlantısı (SQLite)
var dbPath = Path.Combine(AppContext.BaseDirectory, "bilgeari.db");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));
Console.WriteLine($"Database konumu: {dbPath}");

// 18-25: Session servisi
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// 27: App oluşturma
var app = builder.Build();

// 30-33: Database otomatik oluşturma
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.EnsureCreated();
}

// 36-38: Error handling
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// 40-43: Middleware pipeline
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// 42: Session middleware
app.UseSession();

app.UseAuthorization();

// 51-53: Route yapılandırması
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Auth}/{action=Login}/{id?}");

// 55: Uygulama başlatma
app.Run();
```

### 2. appsettings.json

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=bilgeari.db"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### 3. BilgeAriMVC.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="8.0.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.0">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
  </ItemGroup>
</Project>
```

---

## 🐛 Düzeltilen Hatalar

### 1. HTML Yapı Hataları
- **Dosya:** `_Layout.cshtml`
- **Hata:** Fazladan `</div>` etiketi (99. satır)
- **Düzeltme:** Fazladan etiket kaldırıldı

### 2. CSS Yükleme Çakışmaları
- **Dosya:** `_Layout.cshtml`
- **Hata:** Tüm CSS'ler her sayfada yükleniyordu
- **Düzeltme:** `@RenderSection("Styles")` ile sayfa-özel CSS

### 3. Navbar Çift Tanımlama
- **Dosya:** `dogadedektifleri.cshtml`
- **Hata:** Hem Layout hem kendi navbar'ı vardı
- **Düzeltme:** Fazladan navbar kaldırıldı

### 4. JavaScript Dosya Yolu
- **Dosya:** `kodlamauzmani.cshtml`
- **Hata:** `script.js` yerine `kodlamauzmani.js` olmalıydı
- **Düzeltme:** Doğru dosya adı kullanıldı

### 5. Layout Tanımı Eksikliği
- **Dosya:** `felsefibilgin.cshtml`
- **Hata:** Layout tanımı yoktu
- **Düzeltme:** Layout eklendi

### 6. Z-Index Çakışmaları
- **Dosyalar:** Multiple
- **Hata:** Dropdown menü içeriğin altında kalıyordu
- **Düzeltme:** Z-index hiyerarşisi düzeltildi

### 7. Database Kalıcılığı
- **Dosya:** `Program.cs`
- **Hata:** Database dosya yolu sabit değildi
- **Düzeltme:** `AppContext.BaseDirectory` kullanıldı

### 8. Container Sınırlaması
- **Dosya:** `Index.cshtml`
- **Hata:** Layout container'ı anasayfayı sınırlıyordu
- **Düzeltme:** Container override CSS eklendi

### 9. Email Güvenliği
- **Dosyalar:** `Profile.cshtml`, `AuthController.cs`
- **Hata:** Email düzenlenebiliyordu
- **Düzeltme:** Email readonly yapıldı, backend koruması eklendi

### 10. Bootstrap JS Çakışması
- **Dosya:** `_Layout.cshtml`
- **Hata:** Bootstrap hem local hem CDN'den yükleniyordu
- **Düzeltme:** Sadece CDN kullanılıyor

---

## 📊 Özet İstatistikler

### Dosya Sayıları
- **Controller:** 2 dosya
- **Model:** 3 dosya
- **Filter:** 1 dosya
- **View:** 12 dosya
- **CSS:** 7+ dosya
- **JavaScript:** 5+ dosya
- **Görsel:** 60+ dosya

### Kod Satırları (Tahmini)
- **Backend (C#):** ~2,000 satır
- **Frontend (Razor/HTML):** ~3,000 satır
- **CSS:** ~4,000 satır
- **JavaScript:** ~1,500 satır

### Database
- **Tablo:** 1 (Users)
- **Sütun:** 8
- **Constraint:** 2 (Primary Key, Unique Email)

### Route
- **Controller:** 2
- **Action:** 18
- **View:** 12
- **API Endpoint:** 5 (JSON)

---

## 🚀 Çalıştırma Talimatları

### 1. Gereksinimler
- .NET 8.0 SDK
- SQLite (otomatik yüklenir)

### 2. Başlatma
```bash
cd /path/to/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main
dotnet restore
dotnet run
```

### 3. İlk Kullanım
1. Tarayıcı otomatik açılır: `https://localhost:[port]`
2. Login sayfası görünür
3. "Kayıt Ol" ile yeni hesap oluştur
4. Otomatik giriş yapılır
5. Anasayfaya yönlendirilir

### 4. Database
- İlk çalıştırmada otomatik oluşur
- Konum: `bin/Debug/net8.0/bilgeari.db`
- Console'da konum yazdırılır

---

## 📝 Değişiklik Geçmişi

### v1.0 - İlk Sürüm (Ocak 2025)
- ✅ Database entegrasyonu (SQLite + EF Core)
- ✅ Authentication sistemi (Login/Signup/Forgot)
- ✅ Session yönetimi
- ✅ CRUD işlemleri
- ✅ Profile sayfası
- ✅ Navbar/Footer session kontrolü
- ✅ CSS tutarlılığı
- ✅ Z-index düzeltmeleri
- ✅ Email readonly
- ✅ Dropdown menü düzeltmeleri
- ✅ Sayfa arka planları

---

## 💻 Geliştirici Notları

### Önemli Dosyalar
1. **Program.cs** - Tüm yapılandırma
2. **AuthController.cs** - Authentication logic
3. **_Layout.cshtml** - UI şablonu
4. **site.css** - Global stiller

### Dikkat Edilmesi Gerekenler
1. Session timeout: 30 dakika
2. Password hash: SHA256
3. Email unique constraint
4. Soft delete kullanılıyor
5. Z-index hiyerarşisi önemli

### Gelecek İyileştirmeler
- [ ] Email doğrulama
- [ ] Şifre sıfırlama token'ı
- [ ] Remember me özelliği
- [ ] Admin paneli
- [ ] Rol tabanlı yetkilendirme
- [ ] 2FA (Two-Factor Authentication)

---

**Dokümantasyon Tarihi:** Ocak 2025
**Proje Versiyonu:** 1.0
**Geliştirici:** Emergent AI
