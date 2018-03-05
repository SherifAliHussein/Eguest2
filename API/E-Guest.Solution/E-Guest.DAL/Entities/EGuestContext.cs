using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using E_Guest.DAL.Entities.Model;


namespace E_Guest.DAL.Entities
{
    public class EGuestContext : DataContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<FeatureTranslation> FeatureTranslations { get; set; }
        public DbSet<SupervisorFeature> SupervisorFeatures { get; set; }
        public DbSet<FeatureDetail> FeatureDetails { get; set; }
        public DbSet<FeatureDetailTranslation> FeatureDetailTranslations { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestDetail> RequestDetails { get; set; }
        public DbSet<Package> Packages { get; set; }


        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryTranslation> CategoryTranslations { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemTranslation> ItemTranslations { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<MenuTranslation> MenuTranslations { get; set; }
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<RestaurantTranslation> RestaurantTranslations { get; set; }
        public DbSet<RestaurantType> RestaurantTypes { get; set; }
        public DbSet<RestaurantTypeTranslation> RestaurantTypeTranslations { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<SizeTranslation> SizeTranslations { get; set; }

        public DbSet<SideItem> SideItems { get; set; }
        public DbSet<SideItemTranslation> SideItemTranslations { get; set; }
        public DbSet<ItemSideItem> ItemSideItems { get; set; }
        public DbSet<ItemSize> ItemSizes { get; set; }
        public DbSet<Background> Backgrounds { get; set; }

        public DbSet<Template> Templates { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<BranchTranslation> BranchTranslations { get; set; }
        public EGuestContext() : base("name=ECuestDB")
        {
            Database.SetInitializer<EGuestContext>(null);

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Feature>()
                .HasRequired(c => c.Creater)
                .WithMany()
                .WillCascadeOnDelete(false);
            
            modelBuilder.Entity<RequestDetail>()
                .HasRequired(c => c.Request)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Package>()
                .HasRequired(c => c.Admin)
                .WithMany()
                .WillCascadeOnDelete(false);


            modelBuilder.Entity<Menu>()
                .HasRequired(c => c.Restaurant)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Size>()
                .HasRequired(c => c.Restaurant)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RestaurantType>()
                .HasRequired(c => c.Admin)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Room>()
                .HasRequired(c => c.Package)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Restaurant>()
                .HasRequired(c => c.RestaurantAdmin)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Branch>()
                .HasRequired(c => c.Restaurant)
                .WithMany()
                .WillCascadeOnDelete(false);
        }
    }
}
