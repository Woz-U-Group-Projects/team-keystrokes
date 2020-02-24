using Microsoft.EntityFrameworkCore;
using App_Angular.Models;

namespace App_Angular.Data
{
    public class ProjectDbContext : DbContext
    {


        public DbSet<Diary> Diary { get; set; }
        // public DbSet<Users> User { get; set; }
    }
}