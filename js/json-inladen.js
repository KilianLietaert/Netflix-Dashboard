"use strict";

let data;

//data uit json inladen
const jsonInladen = () => {
    // $.getJSON("../json/users.json", function(){})
    fetch("../json/users.json")
        .then(resp =>{
            if (!resp.ok) {
                throw new Error("HTTP error " + resp.status);
            }
            return resp.json();
        })
        .then(json => {
            data = json.users;
        // console.log(data)
            makeTable(data);
        })
        .catch(err => {
        console.error(err)
    })
}

//tabel maken in html
const makeTable = json => {

    
    const tbody = document.querySelector(".js-table");
    tbody.innerHTML = "";
    let html = "";
    for (let item of json) {
        // console.log(item);
        const joinedIn = new Date(item.joinedIn);
        const joinedInDate = `${joinedIn.getDate()}/${joinedIn.getMonth()}/${joinedIn.getFullYear()}`
        html += ` <tr>
        <td>${item.id}</td>
        <td>${item.firstName + ' ' + item.lastName}</td>
        <td>${item.email}</td>
        <td>${item.plan}</td>
        <td>${item.address.country}</td>
        <td>${joinedInDate}</td>
        <td class="c-users__table-edit c-users__table-btn">
          <a href="#" class="edit-txt" >Edit</a>
          <a href="#" title="Edit"><i class="fas fa-edit"></i></a>
        </td>
        <td class="c-users__table-del c-users__table-btn">
          <a href="#" class="delete-txt" >Delete</a>
          <a href="#" title="Delete"><i class="fas fa-trash"></i></a>
        </td>
      </tr>`;

    }
    tbody.innerHTML = html;
}

//json sorteren
const sortJson = function () {
    $("th").on("click", function () {
        let column = $(this).data("column");
        let order = $(this).data("order");

        console.log("col was clicked", column, order);
        // console.log(jsonData)

        if (order == "desc") {
            $(this).data("order", "asc");
            // console.log(data)
            data = data.sort((a, b) => {
                if (column === "id") {
                    return a[column] > b[column] ? 1 : -1;
                } else if (column === "address") {
                    return a[column].country.toLowerCase() > b[column].country.toLowerCase() ? 1 : -1;
                } else {
                    return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
                }
            }); //end data.sort
            $(this).children("i").removeClass("fa-caret-down");
            $(this).children("i").addClass("fa-caret-up");


        } else {
            $(this).data("order", "desc");
            data = data.sort((a, b) => {
                if (column === "id") {
                    return a[column] < b[column] ? 1 : -1;
                } else if (column === "address") {
                    return a[column].country.toLowerCase() < b[column].country.toLowerCase() ? 1 : -1;
                } else {
                    return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1;
                }
            }); //end data.sort

            $(this).children("i").removeClass("fa-caret-up");
            $(this).children("i").addClass("fa-caret-down");

        }
        
        makeTable(data);

    })
}

// search function
const searchTable = () => {
    const searchBar = $("#search-input");
    searchBar.on("keyup", () => {
        let inputValue = searchBar.val();
        console.log(inputValue);

        const newData = searchValue(inputValue, data);
        makeTable(newData);
    })
}

const searchValue = (value, dataArr) => {
    let searchedName = [];
    for (let item of dataArr) {
        value = value.toLowerCase();
        const fullName = item.firstName.toLowerCase() + " " + item.lastName.toLowerCase();
        const email = item.email.toLowerCase();
        console.log(fullName)
        if (fullName.includes(value) || email.includes(value)) {
            searchedName.push(item);
        }
    }

    return searchedName;
}


//filter json
const filterTable = () => {
    const inputId = $("#id");
    const inputCountry = $("#country");
    const joindStart = $("#joindin");
    const joinedEnd = $("#enddate");
    const btn = $(".js-filter-btn");
    inputCountry.on("keyup", () => {
        console.log(inputCountry.val())
    })

}


$(document).ready( ()=> {
    jsonInladen();
    sortJson();
    searchTable();
    filterTable();
});