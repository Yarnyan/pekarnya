using System.ComponentModel.DataAnnotations;

namespace pp2.Models.Requests
{
    public class TokenModel
    {
        [Required(ErrorMessage = "UserId is required")]
        public int UserId { get; set; }

        public string? AccessToken { get; set; }

        public string? RefreshToken { get; set; }
    }
}
