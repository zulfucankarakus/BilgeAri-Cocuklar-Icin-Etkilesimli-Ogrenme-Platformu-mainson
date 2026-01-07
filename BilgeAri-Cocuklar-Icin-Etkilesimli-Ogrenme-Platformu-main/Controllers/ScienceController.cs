using Microsoft.AspNetCore.Mvc;
using BilgeAriMVC.Models;

namespace BilgeAriMVC.Controllers
{
    public class ScienceController : Controller
    {
        private static List<ScienceItem> _scienceItems = new List<ScienceItem>
        {
            new ScienceItem
            {
                Id = 1,
                Category = "uzay",
                Icon = "🚀",
                Title = "Uzay Yolculuğu",
                Content = "Gezegenler, yıldızlar ve uzayın sırları! Gözlerimizle göremediğimiz dünyalar seni bekliyor!",
                Experiment = "Uzaya Uçalım! 🌌",
                ScienceCategoryId = 1
            },
            new ScienceItem
            {
                Id = 2,
                Category = "su",
                Icon = "💧",
                Title = "Suyun Maceraları",
                Content = "Su nasıl yolculuk eder? Buharlaşma, bulutlar, yağmur... Suyun hikayeleri seni çağırıyor!",
                Experiment = "Suyla Yolculuk! ☁️",
                ScienceCategoryId = 1
            },
            new ScienceItem
            {
                Id = 3,
                Category = "hayvan",
                Icon = "🦁",
                Title = "Hayvan Dünyası",
                Content = "Karada, suda, havada! Hayvanların inanılmaz yetenekleri ve yaşamları hakkında her şey!",
                Experiment = "Hayvanları Tanı! 🐾",
                ScienceCategoryId = 1
            },
            new ScienceItem
            {
                Id = 4,
                Category = "vucud",
                Icon = "💪",
                Title = "Vücudumuz",
                Content = "Kalbin, beynin, akciğerlerin nasıl çalışır? Kendi vücudunu keşfetmeye hazır mısın?",
                Experiment = "Keşfedelim! ❤️",
                ScienceCategoryId = 1
            },
            new ScienceItem
            {
                Id = 5,
                Category = "bitki",
                Icon = "🌱",
                Title = "Bitki Dostlarımız",
                Content = "Bitkiler nasıl büyür? Güneşten nasıl enerji alırlar? Yeşil dünyayı birlikte inceleyelim!",
                Experiment = "Bitkileri İzle! 🌿",
                ScienceCategoryId = 1
            },
            new ScienceItem
            {
                Id = 6,
                Category = "isik",
                Icon = "💡",
                Title = "Işık ve Ses",
                Content = "Gökkuşağı nasıl oluşur? Ses nereden gelir? Işık ve sesin büyülü dünyası, Sizlere sesleniyor!",
                Experiment = "Deneyelim! 🎵",
                ScienceCategoryId = 1
            }
        };

        private static List<ExplorerNote> _explorerNotes = new List<ExplorerNote>();

        public IActionResult Index()
        {
            var viewModel = new ScienceIndexViewModel
            {
                ScienceItems = _scienceItems,
                ExplorerNotes = _explorerNotes
            };
            return View(viewModel);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(ExplorerNote newNote)
        {
            // Auto-increment ID
            newNote.Id = _explorerNotes.Any() ? _explorerNotes.Max(n => n.Id) + 1 : 1;

            _explorerNotes.Add(newNote);
            return RedirectToAction("Index");
        }
    }
}
