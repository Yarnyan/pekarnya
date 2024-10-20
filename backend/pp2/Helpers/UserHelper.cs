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

        public async Task<List<User>> GetUsersByPINAsync(int pin)
        {
            return await dbRepository.Get<User>(x => x.PIN == pin).ToListAsync();
        }
    }
}
