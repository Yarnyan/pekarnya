using pp2.Models.Requests;
using pp2.Models;

namespace pp2.Helpers.Interfaces
{
    public interface IRoleHelper
    {
        public Task<UserRole> CreateAsync(string name);

        public Task DeleteAsync(int backeryId);

        public Task<UserRole?> GetById(int id);
    }
}
