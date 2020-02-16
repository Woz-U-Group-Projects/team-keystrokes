using Microsoft.EntityFrameworkCore;
using server_csharp_sqlite.Models;

namespace server_csharp_sqlite.Models
{
  public class ProjectDbContext : DbContext {
    public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options){}
    
    public DbSet<Project> Projects {get;set;}
    
    public DbSet<server_csharp_sqlite.Models.Task> Task { get; set; }

  }
}