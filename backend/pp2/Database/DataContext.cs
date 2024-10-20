using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using pp2.Models;

namespace pp2.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> dbContextOptions) : base(dbContextOptions) {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<BakeryModel> Bakeries { get; set; }

        public DbSet<FormModel> Formattings { get; set; }

        public DbSet<IngredientModel> Ingredients {  get; set; }    

        public DbSet<TaskModel> Tasks { get; set; }

        public DbSet<TaskPoolModel> TaskPools { get; set; } 

        public DbSet<UserRole> Roles { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
            .HasMany(u => u.Roles)
            .WithMany(r => r.Users);

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
