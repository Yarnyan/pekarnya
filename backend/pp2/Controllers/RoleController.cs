using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pp2.Helpers.Interfaces;
using pp2.Models.Requests;

namespace pp2.Controllers
{
    [Route("api/[controller]")]
    public class RoleController : ControllerBase
    {
        private readonly IRoleHelper _roleHelper;

        public RoleController(IRoleHelper roleHelper) {
            _roleHelper = roleHelper;
        }

        [HttpPost]
        [Route("role")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Create([FromForm] string name)
        {
            var model = await _roleHelper.CreateAsync(name);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("role")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Delete([FromForm] int id)
        {
            await _roleHelper.DeleteAsync(id);

            return Ok();
        }
    }
}
