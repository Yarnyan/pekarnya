using pp2.Enums;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models.Requests
{
    public class LoginModel
    {
        [Required(ErrorMessage = "PIN is required")]
        public string PIN { get; set; }

        public int? RoleId { get; set; }
    }
}
