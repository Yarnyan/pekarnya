using pp2.Database;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace pp2.Models
{
    //todo unique 
    public class UserRole : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [JsonIgnore]
        public ICollection<User> Users { get; set; } = new List<User>();
    }
}
