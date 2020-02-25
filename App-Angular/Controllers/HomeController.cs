using System;
using System.Diagnostics;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using App_Angular.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

namespace App_Angular.Controllers
{
	public class HomeController : Controller
	{

		// public IActionResult Index()
		// {
		// 	return View();
		// }

		// public IActionResult Privacy()
		// {
		// 	return View();
		// }

		[HttpGet]
		public IActionResult InsertDiary()
		{
			// var diaryEntry1 = new Diary
			// {
			// 	Title = "Today was the day...",
			// 	Content = "I've done nothing today"
			// };
			// var diaryEntry2 = new Diary
			// {
			// 	Title = "Yesterday was bad, today was",
			// 	Content = "Yup, still nothing."
			// };

			// var context = new ApplicationDatabaseContext();
			// context.Diaries.Add(diaryEntry1);
			// context.Diaries.Add(diaryEntry2);
			// context.SaveChanges();

			return Json("Diary saved successfully");
		}

		[HttpGet]
		public JsonResult GetDiaries()
		{
			// var context = new ApplicationDatabaseContext();
			// var diaries = context.Diaries.ToList();
			// // .Where(diary => diary.Title.Contains("entry")).ToList();

			// return Json(diaries);
			return Json("");
		}

		[HttpPost]
		public List<Entry> CreateDiary(Entry entry)
		{
			// if(!entry.DateCreated.HasValue)
			// {
			// 	entry.DateCreated = DateTime.Now;
			// }
			//Console.WriteLine($"{(entry == null ? "ENTRY IS NULL" : entry.Id.ToString())}");
			var context = new ApplicationDatabaseContext();
			context.Entries.Add(entry);
			context.SaveChanges();

			return context.Entries.ToList();
	}
	public class ApplicationDatabaseContext : DbContext
	{
		public DbSet<Entry> Entries { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder options)
			=> options.UseSqlite("Data Source=project.db");
	}
	public class Entry
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get;set; }
		public string Chapter { get; set; }
		public string DateCreated { get;set; }
		public string Body { get;set; }
		public string WordCount { get; set; }
	}
}
}
