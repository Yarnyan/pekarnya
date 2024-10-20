using pp2.Enums;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace pp2.Models.Requests
{
    public class TaskCreate
    {
        public TaskInterval Interval { get; set; }

        public string Time { get; set; }

        public int TaskPoolId { get; set; }

        public string Value { get; set; }
    }
}
