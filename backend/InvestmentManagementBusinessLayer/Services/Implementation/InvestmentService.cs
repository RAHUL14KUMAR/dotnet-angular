using InvestmentManagementBusinessLayer.Repository;
using InvestmentManagementBusinessLayer.ViewModels;
using InvestmentManagementEntities;

namespace InvestmentManagementBusinessLayer.Services.Implementation
{
    public class InvestmentService : IInvestmentService
    {
        private readonly IInvestmentRepository _repository;

        public InvestmentService(IInvestmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<int> AddAsync(InvestmentViewModel vm)
        {
            Console.WriteLine(vm); // Debugging line to check the contents of vm
            var entity = new InvestmentEntity
            {
                Name = vm.Name,
                Type = vm.Type,
                Amount = vm.Amount,
                // PurchaseDate = vm.PurchaseDate
                PurchaseDate=DateTime.SpecifyKind(vm.PurchaseDate, DateTimeKind.Utc)
            };

            return await _repository.AddAsync(entity);
        }

        public async Task<bool> UpdateAsync(InvestmentViewModel vm)
        {
            var entity = new InvestmentEntity
            {
                Id = vm.Id,
                Name = vm.Name,
                Type = vm.Type,
                Amount = vm.Amount,
                PurchaseDate=DateTime.SpecifyKind(vm.PurchaseDate, DateTimeKind.Utc)
            };

            return await _repository.UpdateAsync(entity);
        }

        public async Task<InvestmentViewModel> GetByIdAsync(int id)
        {
            var e = await _repository.GetByIdAsync(id);
            return new InvestmentViewModel
            {
                Id = e.Id,
                Name = e.Name,
                Type = e.Type,
                Amount = e.Amount,
                PurchaseDate = e.PurchaseDate
            };
        }

        public async Task<List<InvestmentViewModel>> GetAllAsync()
        {
            var list = await _repository.GetAllAsync();
            return list.Select(e => new InvestmentViewModel
            {
                Id = e.Id,
                Name = e.Name,
                Type = e.Type,
                Amount = e.Amount,
                PurchaseDate = e.PurchaseDate
            }).ToList();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}