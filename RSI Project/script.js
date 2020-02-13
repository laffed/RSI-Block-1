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

  //if string is empty do not return table, if input is "*", dispaly entire DB
  if (input.length === 0) {
    return [];
  } else if (input === "*") {
    return arr;
  }

  return arr.filter(function(fil) {
    return fil.FirstName.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  });
}

function searchAndMake() {
  async function APISearch() {
    let response = await fetch("https://localhost:44327//api/Values"); //Address subject to change if .NET api local address changes
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

function printPage() {
  window.print();
}
