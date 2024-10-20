using pp2.Database;
using pp2.Helpers.Interfaces;
using pp2.Models;
using pp2.Models.Requests;

namespace pp2.Helpers
{
    public class BakeryHelper : Helper<BakeryModel>, IBakeryHelper
    {
        public BakeryHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<BakeryModel> CreateAsync(BakeryCreate req)
        {
            var model = new BakeryModel() { Address = req.Address, Name = req.Name };
            await Add(model);
            return model;
        }

        public async Task DeleteAsync(int backeryId)
        {
            await DeleteById(backeryId);
        }
    }
}
