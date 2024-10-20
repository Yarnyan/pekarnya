using pp2.Database;
using pp2.Helpers.Interfaces;
using pp2.Models;

namespace pp2.Helpers
{
    public class FormHelper : Helper<FormModel>, IFormHelper
    {
        public FormHelper(IDbRepository dbRepository) : base(dbRepository)
        {
        }

        public async Task<FormModel> CreateFormAsync(string value)
        {
            FormModel model = new FormModel() { Value = value };
            await dbRepository.Add<FormModel>(model);
            await dbRepository.SaveChangesAsync();

            return model;
        }

        public async Task RemoveFormByIdAsync(int Id)
        {
            await DeleteById(Id);
        }

        public async Task<List<FormModel>> GetAllAsync()
        {
            return await GetAll();
        }
    }
}
