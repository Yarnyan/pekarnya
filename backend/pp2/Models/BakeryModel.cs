using pp2.Database;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models
{
    public class BakeryModel : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Address { get; set; }
    }
}
