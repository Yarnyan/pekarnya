using pp2.Models;
using pp2.Models.Requests;

namespace pp2.Helpers.Interfaces
{
    public interface ITaskHelper
    {
        public Task<TaskPoolModel> CreatePoolAsync(string name);

        public Task DeletePoolAsync(int poolId);

        public Task<TaskModel> CreateTaskAsync(TaskCreate create);

        public Task DeleteTaskAsync(int taskId);
    }
}
