//script for library catalogue

const navSlide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

const app = () => {
  navSlide();
};

app();

function searchFunction() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]; //search by name. change index for diff search terms
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//database

let coworkerDB = [{
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
    Role: "",
    Notes: ""
  },
  {
    id: "2",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "3",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "4",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "5",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "6",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  }, {
    id: "7",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "8",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "9",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "10",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "11",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "12",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "13",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "14",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "15",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "16",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "17",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "18",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "19",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "20",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "21",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "22",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "23",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
  },
  {
    id: "24",
    firstName: "",
    LastName: "",
    Role: "",
    Notes: ""
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
]