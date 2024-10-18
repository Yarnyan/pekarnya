using pp2.Database;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models
{
    public class IngredientModel : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Value { get; set; }
    }
}
