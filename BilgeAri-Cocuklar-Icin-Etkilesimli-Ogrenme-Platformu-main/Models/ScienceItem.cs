using System.ComponentModel.DataAnnotations;

namespace BilimProjesi.Models
{
    public class ScienceItem
    {
        public int Id { get; set; }
        public string Category { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Experiment { get; set; } = string.Empty;
        public int ScienceCategoryId { get; set; }

    }
}