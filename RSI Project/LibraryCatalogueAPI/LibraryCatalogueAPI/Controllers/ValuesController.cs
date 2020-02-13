using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LibraryCatalogueAPI.Models;

namespace LibraryCatalogueAPI.Controllers
{
    public class ValuesController : ApiController
    {
        public ResponseModel Get()
        {
            ResponseModel _objResponseModel = new ResponseModel();
            List<Coworker> coworkers = new List<Coworker>();
            coworkers.Add(new Coworker
            {
                ID = "1",
                FirstName = "John",
                LastName = "Kangsumrith",
                Role = "Web Dev",
                Notes = "javascript"
            });
            coworkers.Add(new Coworker
            {
                ID = "2",
                FirstName = "Leon",
                LastName = "Love",
                Role = "Fullstack Web Dev",
                Notes = "currently painting his house"
            });
            coworkers.Add(new Coworker
            {
                ID = "3",
                FirstName = "Joshua",
                LastName = "Waldrup",
                Role = "LIMS Dev",
                Notes = "getting into daytrading"
            });
            coworkers.Add(new Coworker
            {
                ID = "4",
                FirstName = "Reid",
                LastName = "Williams",
                Role = "E-Fleet Associate",
                Notes = "Auburn Grad, Fairhope Jazz"
            });
            coworkers.Add(new Coworker
            {
                ID = "5",
                FirstName = "Eric",
                LastName = "Balderson",
                Role = "Java Dev",
                Notes = "Whitehat hacker, cyber sec"
            });
            coworkers.Add(new Coworker
            {
                ID = "6",
                FirstName = "Michael",
                LastName = "Haymon",
                Role = "Java Dev",
                Notes = "funny python hater"
            });
            coworkers.Add(new Coworker
            {
                ID = "7",
                FirstName = "Iriel",
                LastName = "Evans",
                Role = "HR Intern",
                Notes = "Lived in NOLA"
            });
            coworkers.Add(new Coworker
            {
                ID = "8",
                FirstName = "Spencer",
                LastName = "Radford",
                Role = "JA Java",
                Notes = "recent grad, video games"
            });
            coworkers.Add(new Coworker
            {
                ID = "9",
                FirstName = "Dominic",
                LastName = "Reed",
                Role = "JA QA",
                Notes = "Military, USPS"
            });
            coworkers.Add(new Coworker
            {
                ID = "10",
                FirstName = "Corey",
                LastName = "Herington",
                Role = ".NET Dev",
                Notes = "game makers guild"
            });
            coworkers.Add(new Coworker
            {
                ID = "11",
                FirstName = "Blake",
                LastName = "Johns",
                Role = "JA",
                Notes = "enrolled 17chrs"
            });
            coworkers.Add(new Coworker
            {
                ID = "12",
                FirstName = "Joseph",
                LastName = "Abreu",
                Role = "Senior .NET Dev",
                Notes = "fellow musician"
            });
            coworkers.Add(new Coworker
            {
                ID = "13",
                FirstName = "Gary",
                LastName = "Gealy",
                Role = "Senior Dev",
                Notes = "sk8tr"
            });
            coworkers.Add(new Coworker
            {
                ID = "14",
                FirstName = "Chris",
                LastName = "Whitehead",
                Role = "Java&.NET Backend",
                Notes = "null"
            });
            coworkers.Add(new Coworker
            {
                ID = "15",
                FirstName = "Natascha",
                LastName = "Thomas",
                Role = "Super PM",
                Notes = "cares"
            });
            coworkers.Add(new Coworker
            {
                ID = "16",
                FirstName = "Patrick",
                LastName = "Morton",
                Role = "Principle",
                Notes = "rubiks cube, monster energy"
            });
            coworkers.Add(new Coworker
            {
                ID = "17",
                FirstName = "Mark",
                LastName = "Browning",
                Role = "Principle",
                Notes = "manager"
            });
            coworkers.Add(new Coworker
            {
                ID = "18",
                FirstName = "Savannah",
                LastName = "Goldman",
                Role = "Assoc Consultant",
                Notes = "Check in training"
            });
            coworkers.Add(new Coworker
            {
                ID = "19",
                FirstName = "Bethany",
                LastName = "Straughan",
                Role = "PM",
                Notes = "check in training"
            });
            coworkers.Add(new Coworker
            {
                ID = "20",
                FirstName = "Greg",
                LastName = "Dugger",
                Role = ".NET Consultant",
                Notes = "well dressed"
            });
            coworkers.Add(new Coworker
            {
                ID = "21",
                FirstName = "Hunter",
                LastName = "Cobb",
                Role = "Senior .NET",
                Notes = "Blazer, quite"
            });
            coworkers.Add(new Coworker
            {
                ID = "22",
                FirstName = "Ariel",
                LastName = "Burke",
                Role = "Java Consultant",
                Notes = "Leon's team"
            });
            coworkers.Add(new Coworker
            {
                ID = "23",
                FirstName = "Andre",
                LastName = "Gueret",
                Role = "Java Dev",
                Notes = "Python Hobbyist"
            });
            coworkers.Add(new Coworker
            {
                ID = "24",
                FirstName = "Justin",
                LastName = "Haney",
                Role = "Frontend Dev",
                Notes = "React JS"
            });
            coworkers.Add(new Coworker
            {
                ID = "25",
                FirstName = "Chase",
                LastName = "Harrison",
                Role = "Web Consultant",
                Notes = "friendly js"
            });
            coworkers.Add(new Coworker
            {
                ID = "26",
                FirstName = "Chad",
                LastName = "Fesler",
                Role = "Senior .NET",
                Notes = "Backend for React"
            });


            _objResponseModel.Data = coworkers;
            _objResponseModel.Status = true;
            _objResponseModel.Message = "Data Recieved Successfully";

            return _objResponseModel;
        }

    }
}
