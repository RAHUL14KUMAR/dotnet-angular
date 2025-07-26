using InvestmentManagementEntities;

namespace InvestmentManagementBusinessLayer.Repository
{
    public interface IInvestmentRepository
    {
        Task<int> AddAsync(InvestmentEntity investment);
        Task<bool> UpdateAsync(InvestmentEntity investment);
        Task<InvestmentEntity> GetByIdAsync(int id);
        Task<List<InvestmentEntity>> GetAllAsync();
        Task<bool> DeleteAsync(int id);
    }
}
