using InvestmentManagementBusinessLayer.Services;
using InvestmentManagementBusinessLayer.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace InvestmentManagement.controllers
{
    [ApiController]
    // [Route("api/[controller]")]
    public class InvestmentController : ControllerBase
    {
        private readonly IInvestmentService _service;

        public InvestmentController(IInvestmentService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("addInvestment")]
        public async Task<IActionResult> Add(InvestmentViewModel vm)
        {
            var id = await _service.AddAsync(vm);
            return Ok(new { InvestmentId = id });
        }

        [HttpPut]
        [Route("updateInvestment")]
        public async Task<IActionResult> Update(InvestmentViewModel vm)
        {
            var updated = await _service.UpdateAsync(vm);
            return updated ? Ok() : NotFound();
        }

        [HttpGet]
        [Route("getInvestment")]
        public async Task<IActionResult> Get(int id)
        {
            var data = await _service.GetByIdAsync(id);
            return data != null ? Ok(data) : NotFound(new { message = $"Investment with ID {id} not found" });
        }

        [HttpGet]
        [Route("getAllInvestment")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpDelete]
        [Route("deleteInvestment")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAsync(id);
            return result ? Ok() : NotFound();
        }
    }
}
