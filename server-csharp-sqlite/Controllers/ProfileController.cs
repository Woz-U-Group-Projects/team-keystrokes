using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server_csharp_sqlite.Models;

namespace server_csharp_sqlite.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProfileController : ControllerBase
  {

    private readonly ProfileDbContext _context;

    public ProfileController(ProfileDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public List<Profile> getProfiles()
    {
      return _context.Profiles.ToList();
    }

    [HttpPost]
    public Profile createProfile(Profile project)
    {
      _context.Profiles.Add(project);
      _context.SaveChanges();
      return project;
    }

  }
}