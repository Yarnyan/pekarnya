using pp2.Models;

namespace pp2.Helpers.Interfaces
{
    public interface IUserHelper
    {
        public Task<User> CreateUserAsync(List<UserRole> role, string name, int bakeryId, string pin, string? email);

        public Task DeleteUserAsync(int poolId);

        public Task<User?> GetUserByPINAsync(string pin);

        public Task<List<User>> GetUsersByFilters(int? bakeryId, int? roleId, bool hidden = true);
    }
}
