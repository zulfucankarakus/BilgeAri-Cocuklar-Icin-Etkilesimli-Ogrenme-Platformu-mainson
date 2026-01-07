using System.ComponentModel.DataAnnotations;

namespace BilgeAriMVC.Models
{
    public class IletisimMesaj
    {
        [Required(ErrorMessage = "Adını yazmalısın!")]
        public string Ad { get; set; } = string.Empty;

        [Required(ErrorMessage = "E-posta gerekli!")]
        public string Eposta { get; set; } = string.Empty;

        [Required(ErrorMessage = "Mesajın nedir?")]
        public string Mesaj { get; set; } = string.Empty;
    }
}