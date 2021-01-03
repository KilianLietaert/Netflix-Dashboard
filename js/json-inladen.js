"use strict";

let data = [];

//data uit json inladen
const jsonInladen = () => {
    // $.getJSON("../json/users.json", function(){})
    fetch("../json/users.json")
        .then(resp => {
            if (!resp.ok) {
                throw new Error("HTTP error " + resp.status);
            }
            return resp.json();
        })
        .then(json => {
            data = json.users;
            getPageNumber(data);
            filterTable(data);
            createPagination(data);
        })
        .catch(err => {
            console.error(err)
        })
}

const createPagination = function () {
    document.querySelector(".users-pagination").innerHTML = "";
    let pagination = "";
    pagination += `<div class="c-pagination-circle">
    <a class="c-pagination-arrow" href="#">
      <svg class="c-pagination-svg" xmlns="http://www.w3.org/2000/svg" width="16.757" height="30.514"
        viewBox="0 0 16.757 30.514" transform="rotate(180)">
        <path id="PijlRechts" class="c-pagination-svg__stroke" d="M13.5,35.271,26.636,22.136,13.5,9"
          transform="translate(-11.379 -6.879)" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="3" />
      </svg>
    </a>
    </div>`;


    let amountOfUsers = data.length;
    console.log(amountOfUsers);
    const pages = (amountOfUsers / 8) + (amountOfUsers % 8);
    console.log(pages);



    for(let i = 1; i < pages; i++){
        pagination += `<div class="c-pagination-circle"><a href="#" class="c-pagination-number" data-pagenumber=${i}>${i}</a></div>`;
    }

    pagination += `<div class="c-pagination-circle">
    <a href="#" class="c-pagination-arrow">
      <svg class="c-pagination-svg" xmlns="http://www.w3.org/2000/svg" width="16.757" height="30.514"
        viewBox="0 0 16.757 30.514">
        <path id="PijlRechts" class="c-pagination-svg__stroke" d="M13.5,35.271,26.636,22.136,13.5,9"
          transform="translate(-11.379 -6.879)" fill="none" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="3" />
      </svg></a>
  </div>`;

    document.querySelector('.users-pagination').innerHTML = pagination;

    
}

const getPageNumber = function(data){
    
    let pageNumber = 1;
    
    console.log("pageNumber");
    console.log(pageNumber);

    makeTable(pageNumber, data);
}


const makeTable = function(pageNumber, data){

    createPagination();

    const tbody = document.querySelector(".js-table");
    tbody.innerHTML = "";
    let html = "";
    let endRecord = pageNumber * 8;
    let startRecord = endRecord - 8;
    console.log(startRecord);
    for (let item of data) {

        if(item.id > startRecord && item.id < endRecord + 1){
            
        console.log(item.id);
        console.log(item);
        const joinedIn = new Date(item.created);
        const joinedInDate = `${joinedIn.getDate()}/${joinedIn.getMonth()}/${joinedIn.getFullYear()}`;
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
const filterTable = (oData) => {
    const inputId = document.querySelector("#id");
    const inputCountry = document.querySelector("#country");
    const plan = document.getElementById("plan");
    const joindAfter = document.querySelector("#joind-after");
    const joinedBefore = document.querySelector('#joined-before');
    const btn = $("#filter-btn");

    // console.log(oData)

    $(".js-input").change(() => {
        // orginalData = orginalData;
        // console.log(oData)
        $("#remove-filter").css("background-color", "#e21221");
        data = oData;
    })

    btn.on("click", (e) => {
        e.preventDefault();


        //control if the id input is greater than 0
        if (inputId.value > 0) {
            data = data.filter(val => val.id > inputId.value);
        };

        //control if the country input not empty and then filter
        if (inputCountry.value !== "") {
            data = data.filter(val => {
                return val.address.country.toLowerCase() == inputCountry.value.toLowerCase();
            })
        }

        //if joinedAter input not empty filter the table
        if (joindAfter.value !== "") {
            data = data.filter(val => {
                let joinedIn = new Date(val.created);
                let inputDate = new Date(joindAfter.value)
                return joinedIn > inputDate;
            })
        }

        if (joinedBefore.value !== "") {
            data = data.filter(val => {
                let joinedIn = new Date(val.created);
                let inputDate = new Date(joinedBefore.value)
                return joinedIn < inputDate;
            })
        }

        //controlling if the selected item is not empty or Select and then filter
        if (plan.value !== "" && plan.value !== "select") {
            let option = plan.options[plan.selectedIndex].value;
            data = data.filter(val => {
                return val.plan.toLowerCase() == option.toLowerCase();
            })
        }

        makeTable(data)
        // console.log(filterdArr)
    })

    $(".js-rm-filters").on('click', () => {
        $(".js-input").val("");
        data = oData;
        // console.table(data)
        $("#remove-filter").css("background-color", "#757575");
        makeTable(data);
    })

}



$(document).ready(() => {
    jsonInladen();
    sortJson();
    searchTable();
    //showData(0);
});