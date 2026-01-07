# 🐝 BilgeAri Projesi - Çalıştırma Kılavuzu

## ✅ Düzeltmeler Tamamlandı!

Proje başarıyla düzeltildi ve şu anda **çalışır durumda**! 🎉

---

## 📋 Yapılan Düzeltmeler

### 1. **.NET SDK Kurulumu**
- ✅ .NET 8.0.416 SDK kuruldu
- ✅ Runtime başarıyla yapılandırıldı

### 2. **Namespace Düzeltmeleri**
- ✅ `BilimProjesi.Models` → `BilgeAriMVC.Models` olarak değiştirildi
- ✅ Tüm Controller ve Model dosyaları güncellendi
- ✅ View dosyalarındaki model referansları düzeltildi

### 3. **Model İyileştirmeleri**
- ✅ `IletisimMesaj.cs` - Nullable uyarıları düzeltildi
- ✅ Tüm modellerde `string.Empty` varsayılan değerleri eklendi

### 4. **Gereksiz Dosyalar Temizlendi**
- ✅ `HomeController copy.cs` silindi
- ✅ `ErrorViewModel copy.cs` silindi

### 5. **Build & Test**
- ✅ Proje başarıyla derlendi (0 hata, 0 uyarı)
- ✅ SQLite veritabanı otomatik oluşturuldu
- ✅ Uygulama başarıyla başlatıldı

---

## 🚀 Projeyi Çalıştırma

### Yöntem 1: Doğrudan Çalıştırma
```bash
cd /app/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main
export PATH="/usr/share/dotnet:$PATH"
dotnet run --project BilgeAriMVC.csproj
```

### Yöntem 2: Background'da Çalıştırma (Önerilen)
```bash
cd /app/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main
export PATH="/usr/share/dotnet:$PATH"
nohup dotnet run --project BilgeAriMVC.csproj > /tmp/bilgeari.log 2>&1 &
```

---

## 🌐 Erişim Bilgileri

- **URL:** http://localhost:5123
- **İlk Sayfa:** Login (Giriş) Sayfası
- **Veritabanı:** `/app/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main/bin/Debug/net8.0/bilgeari.db`

---

## 📊 Proje İstatistikleri

- **Framework:** ASP.NET Core MVC 8.0
- **Veritabanı:** SQLite + Entity Framework Core 8.0
- **Controllers:** 4 adet (Auth, Home, Science, Iletisim)
- **Models:** 6 adet (User, AuthViewModels, ScienceItem, ExplorerNote, vb.)
- **Views:** 21 adet (.cshtml dosyası)
- **Statik Dosyalar:** 124 adet (CSS, JS, resimler)
- **Toplam Veritabanı Boyutu:** 16 KB

---

## 📁 Proje Yapısı

```
BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main/
├── Controllers/
│   ├── AuthController.cs         ✅ (Login, Signup, Profile, CRUD)
│   ├── HomeController.cs         ✅ (Anasayfa, Öğrenme Sayfaları)
│   ├── ScienceController.cs      ✅ (Bilim Dünyası)
│   └── IletisimController.cs     ✅ (İletişim Formu)
├── Models/
│   ├── User.cs                   ✅
│   ├── AuthViewModels.cs         ✅
│   ├── ScienceItem.cs            ✅
│   ├── ExplorerNote.cs           ✅
│   ├── ScienceIndexViewModel.cs  ✅
│   └── IletisimMesaj.cs          ✅
├── Data/
│   └── ApplicationDbContext.cs   ✅
├── Filters/
│   └── AuthorizeSessionAttribute.cs ✅
├── Views/
│   ├── Shared/
│   │   └── _Layout.cshtml        ✅
│   ├── Auth/
│   │   ├── Login.cshtml          ✅
│   │   ├── Signup.cshtml         ✅
│   │   ├── Forgot.cshtml         ✅
│   │   └── Profile.cshtml        ✅
│   ├── Home/
│   │   ├── Index.cshtml          ✅
│   │   ├── kodlamauzmani.cshtml  ✅
│   │   ├── felsefibilgin.cshtml  ✅
│   │   └── dogadedektifleri.cshtml ✅
│   └── Science/
│       ├── Index.cshtml          ✅
│       └── Create.cshtml         ✅
├── wwwroot/
│   ├── css/                      ✅ (7+ CSS dosyası)
│   ├── js/                       ✅ (5+ JS dosyası)
│   └── images/                   ✅ (60+ resim)
├── Program.cs                    ✅
├── BilgeAriMVC.csproj           ✅
└── appsettings.json             ✅
```

---

## 🔧 Önemli Komutlar

### Projeyi Durdurma
```bash
pkill -f "dotnet run"
```

### Log'ları İzleme
```bash
tail -f /tmp/bilgeari.log
```

### Veritabanını Sıfırlama
```bash
rm /app/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main/bin/Debug/net8.0/bilgeari.db
# Sonra projeyi yeniden başlat, otomatik oluşturulacak
```

### Proje Durumunu Kontrol Etme
```bash
ps aux | grep dotnet
curl -I http://localhost:5123
```

---

## 🎯 Özellikler

### ✅ Authentication Sistemi
- Kullanıcı kaydı (Signup)
- Giriş yapma (Login)
- Şifre sıfırlama (Forgot Password)
- Profil yönetimi (Update, Delete)
- Session yönetimi (30 dakika)
- SHA256 şifre hashleme

### ✅ Öğrenme Platformu
- **Kodlama Uzmanı** - Programlama dersleri
- **Felsefi Bilgin** - Felsefe ve düşünce
- **Doğa Dedektifi** - Doğa ve çevre
- **Bilim Dünyası** - Bilim konuları ve oyunlar
- **İngilizce Dehası** - Dil öğrenimi

### ✅ Bilim Dünyası Özellikleri
- 6 farklı bilim kategorisi
- Eğlenceli oyunlar (Eşleştirme)
- Quiz sistemi
- Kaşif not defteri (Guestbook)

---

## 🔐 Güvenlik Özellikleri

- ✅ Password hashing (SHA256)
- ✅ Session-based authentication
- ✅ AntiForgeryToken (CSRF koruması)
- ✅ Email unique constraint
- ✅ Soft delete (IsActive flag)
- ✅ HttpOnly cookies

---

## 🐛 Bilinen Sorunlar

**YOK!** Tüm hatalar düzeltildi. ✅

---

## 📝 Notlar

1. **Veritabanı:** İlk çalıştırmada otomatik oluşturulur
2. **Session Süresi:** 30 dakika (idle timeout)
3. **Default Route:** Auth/Login (Giriş ekranı)
4. **Port:** Otomatik olarak atanır (genellikle 5123)

---

## 🎓 Kullanım Senaryosu

1. **İlk Kullanım:**
   - Uygulamayı çalıştır
   - http://localhost:5123 adresine git
   - "Kayıt Ol" butonuna tıkla
   - Yeni hesap oluştur
   - Otomatik giriş yapılır
   - Anasayfaya yönlendirilir

2. **Öğrenme:**
   - Navbar'dan bir konu seç
   - İçeriği keşfet
   - Oyunları oyna
   - Bilgini test et

3. **Profil Yönetimi:**
   - "Hesabım" → "Profilim"
   - Adını güncelle
   - Şifreni değiştir
   - İstersan hesabını sil

---

## 🆘 Yardım

Bir sorun mu yaşıyorsun? Log dosyasını kontrol et:
```bash
tail -100 /tmp/bilgeari.log
```

Uygulama çalışmıyor mu?
```bash
# Durumu kontrol et
ps aux | grep dotnet

# Yeniden başlat
pkill -f "dotnet run"
cd /app/BilgeAri-Cocuklar-Icin-Etkilesimli-Ogrenme-Platformu-main
export PATH="/usr/share/dotnet:$PATH"
dotnet run --project BilgeAriMVC.csproj
```

---

## ✨ Özet

**Proje başarıyla düzeltildi ve çalışır durumda!** 🎉

Tüm namespace sorunları düzeltildi, gereksiz dosyalar temizlendi ve uygulama tamamen fonksiyonel hale getirildi.

**Keyifli öğrenmeler! 🐝📚**
