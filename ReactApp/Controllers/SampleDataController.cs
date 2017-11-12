using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactApp.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Person> Persons()
        {
            return new List<Person>
            {
                Person.Marek(),
                Person.Jacek()
            };
        }

        public enum Presence
        {
            None = 0, Offline, Online, Away, Dnd, Blocked, Busy,
        }

        public enum InitialsColor
        {
            LightBlue = 0, Blue, DarlBlue, Teal, LightGreen, Green, DarkGree, LightPink, Pink, Magenta, Purple, Black, Oragne, Red, DarkRed
        }

        public class Person
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string JobTitle { get; set; }
            public Presence Presence { get; set; }
            public InitialsColor InitialsColor { get; set; }

            public string FullName
            {
                get => $"{FirstName} {LastName}";
            }
            public string Initials
            {
                get => $"{FirstName[0]}{LastName[0]}";
            }

            public static Person Marek()
            {
                return new Person()
                {
                    FirstName = "Marek",
                    LastName = "Kowalski",
                    JobTitle = "Software Engineer",
                    Presence = Presence.Online,
                    InitialsColor = InitialsColor.LightBlue
                };
            }

            public static Person Jacek()
            {
                return new Person()
                {
                    FirstName = "Jacek",
                    LastName = "Kowalski",
                    JobTitle = "Software Engineer",
                    Presence = Presence.Offline,
                    InitialsColor = InitialsColor.Red
                };
            }
        }
    }
}
