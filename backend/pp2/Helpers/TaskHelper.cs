using pp2.Database;
using pp2.Models.Requests;
using pp2.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using pp2.Helpers.Interfaces;

namespace pp2.Helpers
{
    public class TaskHelper : Helper<TaskModel>, ITaskHelper
    {
        public TaskHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<TaskPoolModel> CreatePoolAsync(string name)
        {
            var model = new TaskPoolModel() { Tasks = new List<TaskModel>(), Name = name };
            await dbRepository.Add(model);
            await dbRepository.SaveChangesAsync();

            return model;
        }

        public async Task DeletePoolAsync(int poolId)
        {
            var pool = await dbRepository.Get<TaskPoolModel>(x => x.Id == poolId).FirstOrDefaultAsync();
            if (pool != null)
            {
                await dbRepository.Remove(pool);
                await dbRepository.SaveChangesAsync();
            }
        }

        public async Task<TaskModel> CreateTaskAsync(TaskCreate create)
        {

            var model = new TaskModel() { Interval = create.Interval, TaskPoolId = create.TaskPoolId, Time = create.Time, Value = create.Time };
            await Add(model);

            return model;
        }

        public async Task DeleteTaskAsync(int taskId)
        {
            await DeleteById(taskId);
        }
    }
}
