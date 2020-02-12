using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server_csharp_sqlite.Models;
using Microsoft.EntityFrameworkCore.Sqlite;
using Microsoft.Data.Sqlite;

namespace server_csharp_sqlite.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class InterestController : ControllerBase
  {

    private readonly ProjectDbContext _context;

    public InterestController(ProjectDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public List<Interest> getProjects()
    {
      return _context.Interests.ToList();
      // List<Interest> interests = new List<Interest>();
      // string dataSource = "Data Source=" + Path.GetFullPath("project.db");
      // using(SqliteConnection dbconnect = new SqliteConnection(dataSource))
      // {
      //   dbconnect.Open();
      //   string sqlite = $"select * from interests limit 200;";
      //   using(SqliteCommand command = new SqliteCommand(sqlite, dbconnect))
      //   {
      //     using(SqliteDataReader reader = command.ExecuteReader())
      //     {
      //       while (reader.Read())
      //       {
      //           Interest newInterest = new Interest()
      //           {
      //             Id = reader.GetInt32(0),
      //             Label = reader.GetString(1),
      //             Count = reader.GetInt32(2)
      //       };
      //       interests.Add(newInterest);
      //     }
      //   }
      //   dbconnect.Close();
      // }

      // return interests.ToList();
    // }
  }

    [HttpPost]
    public Project createProject(Project project)
    {
      _context.Projects.Add(project);
      _context.SaveChanges();
      return project;
    }

  }
}