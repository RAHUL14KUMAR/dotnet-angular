
using InvestmentManagementBusinessLayer.ViewModels;

namespace InvestmentManagementBusinessLayer.Services
{
    public interface IInvestmentService
    {
        Task<int> AddAsync(InvestmentViewModel vm);
        Task<bool> UpdateAsync(InvestmentViewModel vm);
        Task<InvestmentViewModel> GetByIdAsync(int id);
        Task<List<InvestmentViewModel>> GetAllAsync();
        Task<bool> DeleteAsync(int id);
    }
}