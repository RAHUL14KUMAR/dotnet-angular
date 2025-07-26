using Microsoft.EntityFrameworkCore;
using InvestmentManagementEntities;

namespace InvestmentManagementDataLayer
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<InvestmentEntity> Investments { get; set; }
    }
}