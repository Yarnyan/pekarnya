using Microsoft.AspNetCore.Identity;
using pp2.Database;
using pp2.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pp2.Models
{
    public class User : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string PIN { get; set; }

        public string FullName { get; set; }

        public int BakeryId { get; set; }

        [ForeignKey("BakeryId")]
        public BakeryModel BakeryModel { get; set; }

        public string? Email { get; set; }

        public bool Hidden { get; set; } = false;

        public List<UserRole> Roles { get; set; } = new List<UserRole>();

        public string? RefreshToken { get; set; }    

        public DateTime? RefreshTokenExpiryTime { get; set; }    
    }
}
