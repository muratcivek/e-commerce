using Microsoft.EntityFrameworkCore;
using API.Entity;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(
                new List<Product>
                {
                        new Product {
                            Id=1, Name= "İphone 15", Description= "Telefon açıklaması", ImageUrl="1.jpg",
                            Price=70000, IsActive=true, Stock=100},
                        new Product {
                            Id=2, Name= "İphone 16", Description= "Telefon açıklaması", ImageUrl="2.jpg",
                        Price=80000, IsActive=true, Stock=100},
                        new Product {
                        Id=3, Name= "İphone 16e", Description= "Telefon açıklaması", ImageUrl="3.jpg",
                        Price=70000, IsActive=false, Stock=100},
                        new Product {
                        Id=4, Name= "İphone 16 Pro", Description= "Telefon açıklaması", ImageUrl="4.jpg",
                        Price=90000, IsActive=true, Stock=100},
                        new Product {
                        Id=5, Name= "İphone 16 Pro Max", Description= "Telefon açıklaması", ImageUrl="5.jpg",
                        Price=100000, IsActive=true, Stock=100},
                        
                }
            );
        }
    }
}
