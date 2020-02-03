//script for library catalogue
const coworkerDB = [
  {
    id: "id",
    firstName: "First Name",
    LastName: "Last Name",
    Role: "Role",
    Notes: "Notes"
  },
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
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "26",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
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
  return arr.filter(function(fil) {
    return fil.firstName.toLowerCase().indexOf(input.toLowerCase()) !== -1;
  });
}

function searchAndMake() {
  let searchedData = filterItems();
  // console.log(searchedData);
  let table = document.getElementById("myTable");
  for (let i = 1; i < searchedData.length; i++) {
    //create new row
    let newRow = table.insertRow();
    let data = Object.values(searchedData[i]);
    for (let j = 0; j < data.length; j++) {
      //create new cell
      var cell = newRow.insertCell(j);

      //add value to cells
      cell.innerHTML = data[j];
    }
  }
}

// (function tableMaker() {
//   let table = document.getElementById("myTable");
//   for (let i = 1; i < coworkerDB.length; i++) {
//     //create new row
//     let newRow = table.insertRow();
//     let data = Object.values(coworkerDB[i]);
//     for (let j = 0; j < data.length; j++) {
//       //create new cell
//       var cell = newRow.insertCell(j);

//       //add value to cells
//       cell.innerHTML = data[j];
//     }
//   }
// })();

// function searchFunction() {
//   let input,
//     filter,
//     table,
//     tr,
//     firstName,
//     lastName,
//     firstNameValue,
//     lastNameValue;

//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   for (let i = 0; i < tr.length; i++) {
//     firstName = tr[i].getElementsByTagName("td")[1]; //search by name. change index for diff search terms
//     lastName = tr[i].getElementsByTagName("td")[2];
//     if (firstName || lastName) {
//       firstNameValue = firstName.textContent || firstName.innerText;
//       lastNameValue = lastName.textContent || lastName.innerText;
//       if (
//         firstNameValue.toUpperCase().indexOf(filter) > -1 ||
//         lastNameValue.toUpperCase().indexOf(filter) > -1
//       ) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
