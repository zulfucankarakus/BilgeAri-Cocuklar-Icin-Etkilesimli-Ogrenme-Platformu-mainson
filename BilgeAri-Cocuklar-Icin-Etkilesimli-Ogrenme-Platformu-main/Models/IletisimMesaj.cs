using System.ComponentModel.DataAnnotations;

namespace BilgeAriMVC.Models
{
    public class IletisimMesaj
    {
        [Required(ErrorMessage = "Adını yazmalısın!")]
        public string Ad { get; set; }

        [Required(ErrorMessage = "E-posta gerekli!")]
        public string Eposta { get; set; }

        [Required(ErrorMessage = "Mesajın nedir?")]
        public string Mesaj { get; set; }
    }
}