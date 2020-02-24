using System;

namespace App_Angular.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public string Chapter { get; set; }
        public DateTime DateCreated { get; set; }

        public string Body { get; set; }

        public int WordCount { get; set; }
    }
}
