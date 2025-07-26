using InvestmentManagementDataLayer;
using InvestmentManagementEntities;
using Microsoft.EntityFrameworkCore;

namespace InvestmentManagementBusinessLayer.Repository
{
    public class InvestmentRepository : IInvestmentRepository
    {
        private readonly ApplicationDbContext _context;

        public InvestmentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> AddAsync(InvestmentEntity investment)
        {
            _context.Investments.Add(investment);
            await _context.SaveChangesAsync();
            return investment.Id;
        }

        public async Task<bool> UpdateAsync(InvestmentEntity investment)
        {
            _context.Investments.Update(investment);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<InvestmentEntity> GetByIdAsync(int id)
        {
            return await _context.Investments.FindAsync(id);
        }

        public async Task<List<InvestmentEntity>> GetAllAsync()
        {
            return await _context.Investments.ToListAsync();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var inv = await _context.Investments.FindAsync(id);
            if (inv == null) return false;
            _context.Investments.Remove(inv);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}