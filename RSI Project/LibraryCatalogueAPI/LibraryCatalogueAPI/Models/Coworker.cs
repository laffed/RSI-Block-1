using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryCatalogueAPI.Models
{
    public class Coworker
    {
        public string ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public string Notes { get; set; }
    }
}