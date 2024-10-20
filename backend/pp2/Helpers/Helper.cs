using Microsoft.EntityFrameworkCore;
using pp2.Database;

namespace pp2.Helpers
{
    public class Helper<Entity> : IHelper<Entity> where Entity : class, IEntity
    {
        public readonly IDbRepository dbRepository;

        public Helper(IDbRepository dbRepository)
        {
            this.dbRepository = dbRepository;
        }

        public virtual async Task<Entity?> GetByIdAsync(int id)
        {
            var entity = await dbRepository.Get<Entity>(entiy => entiy.Id == id).FirstOrDefaultAsync();
            return entity;
        }

        public virtual async Task<List<Entity>> GetAll()
        {
            var entity = dbRepository.Get<Entity>();
            if (entity is not null) return await entity.ToListAsync();

            return new List<Entity>() { };
        }

        public virtual async Task UpdateAsync(Entity entity)
        {
            await dbRepository.Update(entity);
            await dbRepository.SaveChangesAsync();
        }

        public virtual async Task DeleteById(int id)
        {
            var entity = await GetByIdAsync(id);

            if (entity != null)
            {
                await dbRepository.Remove(entity);
                await dbRepository.SaveChangesAsync();
            }
        }

        public virtual async Task<int> Add(Entity entity)
        {
            var result = await dbRepository.Add(entity);
            await dbRepository.SaveChangesAsync();

            return result;
        }
    }

    public interface IHelper<T> where T : IEntity
    {
        public Task<T?> GetByIdAsync(int id);

        public Task<List<T>> GetAll();

        public Task UpdateAsync(T entity);

        public Task DeleteById(int id);

        public Task<int> Add(T entity);
    }
}
