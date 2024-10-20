using pp2.Models.Requests;
using pp2.Models;

namespace pp2.Helpers.Interfaces
{
    public interface IBakeryHelper
    {
        public Task<BakeryModel> CreateAsync(BakeryCreate req);

        public Task DeleteAsync(int backeryId);

        public Task<List<BakeryModel>> GetAllAsync();
    }
}
