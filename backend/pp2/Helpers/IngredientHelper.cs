using pp2.Database;
using pp2.Helpers.Interfaces;
using pp2.Models;

namespace pp2.Helpers
{
    public class IngredientHelper : Helper<IngredientModel>, IIngredientHelper
    {
        public IngredientHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<IngredientModel> CreateIngredientAsync(string value)
        {
            IngredientModel model = new IngredientModel() { Value = value };
            await dbRepository.Add<IngredientModel>(model);
            await dbRepository.SaveChangesAsync();

            return model;
        }

        public async Task RemoveIngredientByIdAsync(int Id)
        {
            await DeleteById(Id);
        }

        public async Task<List<IngredientModel>> GetAllAsync()
        {
            return await GetAll();
        }
    }
}
