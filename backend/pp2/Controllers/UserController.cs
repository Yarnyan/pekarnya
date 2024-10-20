using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pp2.Helpers;
using pp2.Helpers.Interfaces;
using pp2.Models;
using pp2.Models.Requests;

namespace pp2.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IUserHelper _userHelper;

        private readonly IRoleHelper _roleHelper;

        public UserController(IUserHelper userHelper, IRoleHelper roleHelper)
        {
            _userHelper = userHelper;
            _roleHelper = roleHelper;
        }

        [HttpPost]
        [Route("user")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Create([FromForm] UserCreate create)
        {
            List<UserRole> roles = new List<UserRole>();
            foreach (var roleId in create.RoleIds)
            {
                UserRole? role = await _roleHelper.GetById(roleId);
                if (role == null) continue;

                roles.Add(role);
            }

            if (roles.Count == 0) return BadRequest(new { Message = "Roles is requiered" });

            var model = await _userHelper.CreateUserAsync(roles, create.Name, create.BakeryId, create.PIN, create.Email);

            return Ok(new { Data = model });
        }

        [HttpGet]
        [Route("users")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> GetUsersByFilters(int? bakeryId, int? roleId, bool hidden = true)
        {
            var users = await _userHelper.GetUsersByFilters(bakeryId, roleId, hidden);

            return Ok(new { Data = users });
        }

        [HttpDelete]
        [Route("user")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Delete([FromForm] int id)
        {
            await _userHelper.DeleteUserAsync(id);

            return Ok();
        }
    }
}
