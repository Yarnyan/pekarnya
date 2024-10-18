using pp2.Database;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models
{
    //todo unique 
    public class UserRole : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
