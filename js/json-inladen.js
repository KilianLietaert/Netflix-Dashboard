"use strict";
const perPage = 6;
let start = 0;
let currentIndex = 0;
let data = [];

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
            makeTable(data);
            filterTable(data);
        })
        .catch(err => {
        console.error(err)
    })
}

const makePagination = function () { 
    const aantalPages = Math.ceil(data.length / perPage);
    console.log(aantalPages)
    let htmlString = `<div class="c-pagination-circle"><a class="c-pagination-arrow js-pag-left" href="#"><svg class="c-pagination-svg" xmlns="http://www.w3.org/2000/svg" width="16.757" height="30.514"
    viewBox="0 0 16.757 30.514" transform="rotate(180)">
    <path id="PijlRechts" class="c-pagination-svg__stroke"
        d="M13.5,35.271,26.636,22.136,13.5,9" transform="translate(-11.379 -6.879)"
        fill="none" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="3"/>       
</svg></a></div>`;
    for (let i = 0; i < aantalPages; i++){
        htmlString += `<div class="c-pagination-circle js-pag-item" data-index="${i}"><a href="#"  class="c-pagination-number ">${i + 1}</a></div>`;
    }

    htmlString += `<div class="c-pagination-circle"><a href="#" class="c-pagination-arrow js-pag-right"><svg class="c-pagination-svg" xmlns="http://www.w3.org/2000/svg" width="16.757" height="30.514"
    viewBox="0 0 16.757 30.514">
    <path id="PijlRechts" class="c-pagination-svg__stroke"
        d="M13.5,35.271,26.636,22.136,13.5,9" transform="translate(-11.379 -6.879)"
        fill="none" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="3" />
</svg></a></div>`;
    
    document.querySelector('.js-users-pagination').innerHTML = htmlString;
    pagClick();
}
 
//pagination click events
const pagClick = function () {
    const pagLeftArrow = document.querySelector(".js-pag-left");
    const pagRightArrow = document.querySelector(".js-pag-right");
    const pagItems = document.querySelectorAll(".js-pag-item");

    pagItems[0].classList.add("pag-active");
 

    //circles click
   for (let pagItem of pagItems) {
        pagItem.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = pagItem.dataset.index * perPage;
            start = pagItem.dataset.index * perPage;
            console.log("bal index", pagItem.dataset.index)
            makeTable(data);
        })
    }

    //left arrow
    pagLeftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("right arr");
        if (start <= 0) {
            start = 0;
        } else {
            
            start = start - perPage;
        }
        // console.log(start);
        makeTable(data);
    })

    //pagination right arrow
    pagRightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("right arr");
        if (start >= data.length - perPage) {
            return false
        } else {
            
            start = start + perPage;
        }
        console.log("right start", start);
        makeTable(data);
    });



}

//tabel maken in html
const makeTable = json => {

    
    const tbody = document.querySelector(".js-table");
    tbody.innerHTML = "";
    let html = "";
    // let start = 0;
    let stop = json.length;
    // console.log(json.length)

    if (start + perPage < json.length) {
        stop = start + perPage;
    }

    for (let i = start; i < stop; i++){
        const joinedIn = new Date(json[i].created);
        const joinedInDate = `${joinedIn.getDate()}/${joinedIn.getMonth()}/${joinedIn.getFullYear()}`;
        html += ` <tr>
        <td>${json[i].id}</td>
        <td>${json[i].firstName + ' ' + json[i].lastName}</td>
        <td>${json[i].email}</td>
        <td>${json[i].plan}</td>
        <td>${json[i].address.country}</td>
        <td>${joinedInDate}</td>
        <td class="c-users__table-edit c-users__table-btn">
          <a href="users-edit.html?userid=${json[i].id}" class="edit-txt" >Edit</a>
          <a href="users-edit.html?userid=${json[i].id}" title="Edit"><i class="fas fa-edit"></i></a>
        </td>
        <td data-userid=${json.id} class="c-users__table-del c-users__table-btn">
          <a href="#" class="delete-txt js-showmodal" onclick="listenToDelete(); return false;"  >Delete</a>
          <a href="#" title="Delete" class='js-showmodal' onclick="listenToDelete(); return false;" ><i class="fas fa-trash"></i></a>
        </td>
      </tr>`;

    }
    /*
    for (let item of json) {
        // console.log(item);
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
          <a href="users-edit.html?userid=${item.id}" class="edit-txt" >Edit</a>
          <a href="users-edit.html?userid=${item.id}" title="Edit"><i class="fas fa-edit"></i></a>
        </td>
        <td data-userid=${item.id} class="c-users__table-del c-users__table-btn">
          <a href="#" class="delete-txt js-showmodal" onclick="listenToDelete(); return false;"  >Delete</a>
          <a href="#" title="Delete" class='js-showmodal' onclick="listenToDelete(); return false;" ><i class="fas fa-trash"></i></a>
        </td>
      </tr>`;

    }*/
    tbody.innerHTML = html;
    makePagination();
}

//json sorteren
const sortJson = function () {
    $("th").on("click", function () {
        let column = $(this).data("column");
        let order = $(this).data("order");

        // console.log("col was clicked", column, order);
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
        // console.log(inputValue);

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
        // console.log(fullName)
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
        if(inputCountry.value !== ""){
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
        console.table(data)
        start = 0;
        $("#remove-filter").css("background-color", "#757575");
        makeTable(data);
    })

}




$(document).ready( ()=> {
    jsonInladen();
    sortJson();
    searchTable();
    // makePagination();
    
});