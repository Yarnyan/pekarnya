using pp2.Models;

namespace pp2.Database
{
    public class DbContextInitializer
    {
        public static void InitializeDbContext(DataContext context)
        {
            AddEntityIfNotExist(new UserRole() { Id = 1, Name = "Manager"});
            AddEntityIfNotExist(new UserRole() { Id = 2, Name = "Cashier" });
            AddEntityIfNotExist(new UserRole() { Id = 3, Name = "Baker" });

            AddEntityIfNotExist(new User() { PIN = 0000, RoleId = 1 }); //root

            void AddEntityIfNotExist<T>(T entity) where T : class, IEntity
            {
                DbRepository dbRepository = new DbRepository(context);

                if (!dbRepository.GetAll<T>().Any(x => x.Id == entity.Id))
                {
                    context.Set<T>().Add(entity);
                    context.SaveChanges();
                }
            }
        }
    }
}
