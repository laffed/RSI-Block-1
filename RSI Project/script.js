//script for library catalogue
const coworkerDB = [
  {
    id: "1",
    firstName: "John",
    LastName: "Kangsumrith",
    Role: "Web Dev",
    Notes: "javascript"
  },
  {
    id: "2",
    firstName: "Leon",
    LastName: "Love",
    Role: "Fullstack Web Dev",
    Notes: "currently painting his house"
  },
  {
    id: "3",
    firstName: "Joshua",
    LastName: "Waldrup",
    Role: "LIMS Dev",
    Notes: "getting into daytrading"
  },
  {
    id: "4",
    firstName: "Reid",
    LastName: "Williams",
    Role: "E-Fleet Associate",
    Notes: "Auburn Grad, Fairhope Jazz"
  },
  {
    id: "5",
    firstName: "Eric",
    LastName: "Balderson",
    Role: "Java Dev",
    Notes: "Whitehat hacker, cyber sec"
  },
  {
    id: "6",
    firstName: "Michael",
    LastName: "Haymon",
    Role: "Java Dev",
    Notes: "funny python hater"
  },
  {
    id: "7",
    firstName: "Iriel",
    LastName: "Evans",
    Role: "HR Intern",
    Notes: "Lived in NOLA"
  },
  {
    id: "8",
    firstName: "Spencer",
    LastName: "Radford",
    Role: "JA Java",
    Notes: "recent grad, video games"
  },
  {
    id: "9",
    firstName: "Dominic",
    LastName: "Reed",
    Role: "JA QA",
    Notes: "Military, USPS"
  },
  {
    id: "10",
    firstName: "Corey",
    LastName: "Herington",
    Role: ".NET Dev",
    Notes: "game makers guild"
  },
  {
    id: "11",
    firstName: "Blake",
    LastName: "Johns",
    Role: "JA",
    Notes: "enrolled 17chrs"
  },
  {
    id: "12",
    firstName: "Joseph",
    LastName: "Abreu",
    Role: "Senior .NET Dev",
    Notes: "fellow musician"
  },
  {
    id: "13",
    firstName: "Gary",
    LastName: "Gealy",
    Role: "Senior Dev",
    Notes: "sk8tr"
  },
  {
    id: "14",
    firstName: "Chris",
    LastName: "Whitehead",
    Role: "Java&.NET Backend",
    Notes: "null"
  },
  {
    id: "15",
    firstName: "Natascha",
    LastName: "Thomas",
    Role: "Super PM",
    Notes: "cares"
  },
  {
    id: "16",
    firstName: "Patrick",
    LastName: "Morton",
    Role: "Principle",
    Notes: "rubiks cube, monster energy"
  },
  {
    id: "17",
    firstName: "Mark",
    LastName: "Browning",
    Role: "Principle",
    Notes: "manager"
  },
  {
    id: "18",
    firstName: "Savannah",
    LastName: "Goldman",
    Role: "Assoc Consultant",
    Notes: "Check in training"
  },
  {
    id: "19",
    firstName: "Bethany",
    LastName: "Straughan",
    Role: "PM",
    Notes: "check in training"
  },
  {
    id: "20",
    firstName: "Greg",
    LastName: "Dugger",
    Role: ".NET Consultant",
    Notes: "well dressed"
  },
  {
    id: "21",
    firstName: "Hunter",
    LastName: "Cobb",
    Role: "Senior .NET",
    Notes: "Blazer, quite"
  },
  {
    id: "22",
    firstName: "Ariel",
    LastName: "Burke",
    Role: "Java Consultant",
    Notes: "Leon's team"
  },
  {
    id: "23",
    firstName: "Andre",
    LastName: "Gueret",
    Role: "Java Dev",
    Notes: "Python Hobbyist"
  },
  {
    id: "24",
    firstName: "Justin",
    LastName: "Haney",
    Role: "Frontend Dev",
    Notes: "React JS"
  },
  {
    id: "25",
    firstName: "Chase",
    LastName: "Harrison",
    Role: "Web Consultant",
    Notes: "friendly js"
  },
  {
    id: "26",
    firstName: "Chad",
    LastName: "Fesler",
    Role: "Senior .NET",
    Notes: "Backend for React"
  }
];

const navSlide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

(function apps() {
  navSlide();
})();

//tableMaker populates creates and populates table with coworkerDB data
//cannot return more than one value therefore can only search for firstname
function filterItems(
  arr = coworkerDB,
  query = document.getElementById("myInput")
) {
  let input = query.value;

  //if string is empty do not return table, if input is "*", dispaly entire DB
  if (input.length === 0) {
    return [];
  } else if (input === "*") {
    return coworkerDB;
  }

  return arr.filter(function(fil) {
    return fil.firstName.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  });
}

function searchAndMake() {
  let searchedData = filterItems();
  let table = document.getElementById("tableEntries");
  let tableHtml = "";
  table.innerHTML = "";

  function createRow(item) {
    let rowHtml = `
      <tr>
        <td>${item.id}</td>
        <td>${item.firstName}</td>
        <td>${item.LastName}</td>
        <td>${item.Role}</td>
        <td>${item.Notes}</td>
      </tr>
    `;
    tableHtml += rowHtml;
  }

  searchedData.map(item => createRow(item));
  table.innerHTML = tableHtml;
}

function printPage() {
  window.print();
}
