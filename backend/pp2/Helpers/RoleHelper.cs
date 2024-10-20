using pp2.Database;
using pp2.Helpers.Interfaces;
using pp2.Models;

namespace pp2.Helpers
{
    public class RoleHelper : Helper<UserRole>, IRoleHelper
    {
        public RoleHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<UserRole> CreateAsync(string name)
        {
            UserRole model = new UserRole() { Name = name };
            await dbRepository.Add<UserRole>(model);
            await dbRepository.SaveChangesAsync();

            return model;
        }

        public async Task DeleteAsync(int Id)
        {
            await DeleteById(Id);
        }

        public async Task<UserRole?> GetById(int id)
        {
            return await GetByIdAsync(id);
        }
    }
}
