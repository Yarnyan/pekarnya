using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pp2.Helpers;
using pp2.Helpers.Interfaces;
using pp2.Models.Requests;

namespace pp2.Controllers
{
    [Route("api/[controller]")]
    public class BakeryController : ControllerBase
    {
        private readonly IBakeryHelper _bakeryHelper;

        public BakeryController(IBakeryHelper bakeryHelper) {
            _bakeryHelper = bakeryHelper;
        }

        [HttpPost]
        [Route("bakery")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> CreateForm([FromForm] BakeryCreate req)
        {
            var model = await _bakeryHelper.CreateAsync(req);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("bakery")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteForm([FromForm] int id)
        {
            await _bakeryHelper.DeleteAsync(id);

            return Ok();
        }

        [HttpGet]
        [Route("bakery")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> GetBakeries()
        {
            return Ok(new { Data = await _bakeryHelper.GetAllAsync() });
        }
    }
}
