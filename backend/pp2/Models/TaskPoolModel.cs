using pp2.Database;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models
{
    public class TaskPoolModel : IEntity
    {
        [Key]
        public int Id { get; set; } 

        public string Name { get; set; }

        public List<TaskModel> Tasks { get; set; }
    }
}
