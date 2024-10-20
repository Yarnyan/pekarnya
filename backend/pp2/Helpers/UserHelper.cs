using Microsoft.EntityFrameworkCore;
using pp2.Database;
using pp2.Helpers.Interfaces;
using pp2.Models;

namespace pp2.Helpers
{
    public class UserHelper : Helper<User>, IUserHelper
    {
        public UserHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<User> CreateUserAsync(List<UserRole> role, string name, int bakeryId, string pin, string? email)
        {
            var model = new User() { Roles = role, FullName = name,  PIN = pin, BakeryId = bakeryId, Email = email};
            await dbRepository.Add(model);
            await dbRepository.SaveChangesAsync();

            return model;
        }

        public async Task DeleteUserAsync(int poolId)
        {
            var pool = await dbRepository.Get<TaskPoolModel>(x => x.Id == poolId).FirstOrDefaultAsync();
            if (pool != null)
            {
                await dbRepository.Remove(pool);
                await dbRepository.SaveChangesAsync();
            }
        }

        public async Task<User?> GetUserByPINAsync(string pin)
        {
            return await dbRepository.Get<User>(x => x.PIN == pin).Include(x => x.Roles).FirstOrDefaultAsync();
        }

        public async Task<List<User>> GetUsersByFilters(int? bakeryId, int? roleId, bool hidden = true)
        {
            var users = dbRepository.Get<User>();
            if (!hidden)
                users = users.Where(x => !x.Hidden);
            if (roleId != null)
                users = users.Include(x => x.Roles).Where(x => x.Roles.Any(r => r.Id == roleId));
            if (bakeryId != null)
                users = users.Where(x => x.BakeryId == bakeryId);

            return await users.ToListAsync();
        }
    }
}
