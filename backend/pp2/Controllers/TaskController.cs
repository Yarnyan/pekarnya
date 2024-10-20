using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pp2.Helpers;
using pp2.Helpers.Interfaces;
using pp2.Models.Requests;

namespace pp2.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskHelper _taskHelper;
        public TaskController(ITaskHelper t) {
            _taskHelper = t;
        }

        [HttpPost]
        [Route("pool")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> CreatePool([FromForm] string name)
        {
            var model = await _taskHelper.CreatePoolAsync(name);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("pool")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeletePool([FromForm] int id)
        {
            await _taskHelper.DeletePoolAsync(id);

            return Ok();
        }

        [HttpPost]
        [Route("task")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> CreateTask([FromForm] TaskCreate create)
        {
            var model = await _taskHelper.CreateTaskAsync(create);

            return Ok(new { Data = model });
        }

        [HttpDelete]
        [Route("task")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteTask([FromForm] int id)
        {
            await _taskHelper.DeleteTaskAsync(id);

            return Ok();
        }

        [HttpGet]
        [Route("pool")]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> GetForms()
        {
            return Ok(new { Data = await _taskHelper.GetAllAsync() });
        }
    }
}
