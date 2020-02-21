//script for library catalogue

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
function filterItems(arr, query = document.getElementById("myInput")) {
  let input = query.value;

  if (input.length === 0) {
    return [];
  } else if (input === "*") {
    return arr;
  }

  return arr.filter(function(fil) {
    return fil.FirstName.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  });
}

function singleSearch() {
  async function APISearch() {
    let query = document.getElementById("myInput").value;
    let response = await fetch(`https://localhost:44327//api/Values/${query}`);
    let result = await response.json();
    let searchedData = [];
    searchedData.push(result);
    console.log("single", searchedData, typeof searchedData);
    let table = document.getElementById("tableEntries");
    let tableHtml = "";
    table.innerHTML = "";

    function createRow(item) {
      let rowHtml = `
      <tr>
        <td>${item.ID}</td>
        <td>${item.FirstName}</td>
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
  APISearch();
}

function searchAndMake() {
  async function APISearch() {
    let response = await fetch("https://localhost:44327//api/Values");
    let result = await response.json();
    console.log(result);
    let searchedData = filterItems(result.Data);
    let table = document.getElementById("tableEntries");
    let tableHtml = "";
    table.innerHTML = "";

    function createRow(item) {
      let rowHtml = `
      <tr>
        <td>${item.ID}</td>
        <td>${item.FirstName}</td>
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
  APISearch();
}

const node = document.getElementById("myInput");
node.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchAndMake();
  }
});

function printPage() {
  window.print();
}
