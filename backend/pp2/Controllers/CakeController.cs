using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pp2.Helpers.Interfaces;
using pp2.Models.Requests;

namespace pp2.Controllers
{
    [Route("api/[controller]")]
    public class CakeController : ControllerBase
    {
        private readonly IIngredientHelper _ingredientHelper;

        private readonly IFormHelper _formHelper;

        public CakeController(IIngredientHelper ingredientHelper, IFormHelper formHelper) { 
            _ingredientHelper = ingredientHelper;
            _formHelper = formHelper;
        }

        [HttpPost]
        [Route("/ingredient")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> CreateIngredient([FromForm] IngredientCreate req)
        {
            var model = await _ingredientHelper.CreateIngredientAsync(req.Value);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("/ingredient")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteIngredient([FromForm] int id)
        {
            await _ingredientHelper.RemoveIngredientByIdAsync(id);

            return Ok();
        }

        [HttpPost]
        [Route("/form")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> CreateForm([FromForm] FormCreate req)
        {
            var model = await _formHelper.CreateFormAsync(req.Value);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("/form")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteForm([FromForm] int id)
        {
            await _formHelper.RemoveFormByIdAsync(id);

            return Ok();
        }
    }
}
