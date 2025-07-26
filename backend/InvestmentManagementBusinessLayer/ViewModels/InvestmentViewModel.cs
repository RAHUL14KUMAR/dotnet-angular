using System.ComponentModel.DataAnnotations;

namespace InvestmentManagementBusinessLayer.ViewModels
{

    public class InvestmentViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Type { get; set; }

        [Range(1, double.MaxValue)]
        public decimal Amount { get; set; }

        public DateTime PurchaseDate { get; set; }
    }
}
