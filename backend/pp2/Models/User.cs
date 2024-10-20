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

        public int PIN { get; set; }

        public int RoleId { get; set; }
        
        [ForeignKey("RoleId")]
        public UserRole Role { get; set; }

        public string? RefreshToken { get; set; }    

        public DateTime? RefreshTokenExpiryTime { get; set; }    
    }
}
