using System.ComponentModel.DataAnnotations;

namespace pp2.Models.Requests
{
    public class UserCreate
    {
        [Required(ErrorMessage = "Roles is required")]
        public List<int> RoleIds { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "BakeryId is required")]
        public int BakeryId { get; set; }

        [Required(ErrorMessage = "PIN is required")]
        public string PIN { get; set; }

        public string? Email { get; set; }
    }
}
