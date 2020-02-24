using System;

namespace App_Angular.Models
{
    public class Diary
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Password { get; set; }
        public DateTime DateCreated { get; set; }


        public int TotalEntries { get; set; }
    }
}
