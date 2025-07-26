namespace InvestmentManagementEntities
{
    public class InvestmentEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public decimal Amount { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}