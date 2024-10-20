using System.ComponentModel.DataAnnotations;

namespace pp2.Models.Requests
{
    public class IngredientCreate
    {
        [Required(ErrorMessage = "Value is required")]
        public string Value { get; set; }
    }
}
