using pp2.Models;

namespace pp2.Helpers.Interfaces
{
    public interface IFormHelper
    {
        public Task<FormModel> CreateFormAsync(string value);

        public Task RemoveFormByIdAsync(int Id);
    }
}
