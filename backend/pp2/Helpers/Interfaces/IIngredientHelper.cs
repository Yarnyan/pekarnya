using pp2.Models;

namespace pp2.Helpers.Interfaces
{
    public interface IIngredientHelper
    {
        public Task<IngredientModel> CreateIngredientAsync(string value);

        public Task RemoveIngredientByIdAsync(int Id);
    }
}
