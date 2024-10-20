using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.ComponentModel.DataAnnotations.Schema;
using pp2.Database;
using System.ComponentModel.DataAnnotations;
using pp2.Enums;

namespace pp2.Models
{
    public class TaskModel : IEntity
    {
        [Key]
        public int Id { get; set; }

        public TaskInterval Interval { get; set; }

        public string Time { get; set; }

        public int TaskPoolId { get; set; }
        [ForeignKey("TaskPoolId")]
        public TaskPoolModel TaskPool { get; set; }

        public string Value { get; set; }
    }
}
