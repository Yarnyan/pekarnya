﻿using System.Linq.Expressions;

namespace pp2.Database
{
    public class DbRepository : IDbRepository
    {
        private readonly DataContext context;

        public DbRepository(DataContext context)
        {
            this.context = context;
        }

        public IQueryable<T> Get<T>() where T : class, IEntity
        {
            return context.Set<T>().AsQueryable();
        }

        public IQueryable<T> GetRange<T>(int start, int count) where T : class, IEntity
        {
            return context.Set<T>().Skip(start).Take(count).AsQueryable();
        }

        public IQueryable<T> Get<T>(Expression<Func<T, bool>> selector) where T : class, IEntity
        {
            return context.Set<T>().Where(selector).AsQueryable();
        }

        public async Task<int> Add<T>(T newEntity) where T : class, IEntity
        {
            var entity = await context.Set<T>().AddAsync(newEntity);
            return entity.Entity.Id;
        }

        public async Task AddRange<T>(IEnumerable<T> newEntities) where T : class, IEntity
        {
            await context.Set<T>().AddRangeAsync(newEntities);
        }

        public async Task Remove<T>(T entity) where T : class, IEntity
        {
            await Task.Run(() => context.Set<T>().Remove(entity));
        }

        public async Task RemoveRange<T>(IEnumerable<T> entities) where T : class, IEntity
        {
            await Task.Run(() => context.Set<T>().RemoveRange(entities));
        }

        public async Task Update<T>(T entity) where T : class, IEntity
        {
            await Task.Run(() => context.Set<T>().Update(entity));
        }

        public async Task UpdateRange<T>(IEnumerable<T> entities) where T : class, IEntity
        {
            await Task.Run(() => context.Set<T>().UpdateRange(entities));
        }

        public async Task<int> SaveChangesAsync()
        {
            return await context.SaveChangesAsync();
        }

        public IQueryable<T> GetAll<T>() where T : class, IEntity
        {
            return context.Set<T>().AsQueryable();
        }
    }
}
