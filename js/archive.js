"use strict";
let data = [];

//data uit json inladen
const jsonInladen = () => {
    // $.getJSON("../json/users.json", function(){})
    fetch("../json/detail.json")
        .then(resp =>{
            if (!resp.ok) {
                throw new Error("HTTP error " + resp.status);
            }
            return resp.json();
        })
        .then(json=> {
        // console.log(data)
            data = json;
            makeTable(json);
        })
        .catch(err => {
        console.error(err)
    })
}


//tabel maken in html
const makeTable = data => {
    const elem = document.getElementById('elementID');
    let html = "";
    console.log(data);
    for (let item of data) {
        // console.log(item);
        html += `<div class="picture ${item.divfilter} show col-lg-2 col-md-3 col-sm-4 col-6">         
        <img class="img-fluid" src="/img/${item.imgarchive}.png" alt="">
        <a href="/detail2.html?userid=${item.id}"><p class="rooda">${item.titelarchive}</p></a> </div>`;

    }
    elem.innerHTML = html;
}

// search function
const searchTable = () => {
    const searchBar = $("#search-inputarchive");
    searchBar.on("keyup", () => {
        let inputValue = searchBar.val();
        console.log(data);

        const newData = searchValue(inputValue, data);
        makeTable(newData);
    })
}

const searchValue = (value, dataArr) => {
    let searchedName = [];
    console.log(dataArr)
    for (let item of dataArr) {
        value = value.toLowerCase();
        const fullName = item.titel.toLowerCase();
        console.log(fullName)
        if (fullName.includes(value)) {
            searchedName.push(item);
        }
    }
console.log(searchedName);
    return searchedName;
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) { console.log(x)
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".myBtnContainer");
console.log(btnContainer);
var btns = btnContainer.querySelectorAll("#linksarchive");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


$(document).ready( ()=> {
    jsonInladen();
    searchTable();
    
});

// document.addEventListener("DOMContentLoaded", filterSelection);
// document.addEventListener("DOMContentLoaded", w3AddClass);
// document.addEventListener("DOMContentLoaded", w3RemoveClass);

document.addEventListener('DOMContentLoaded', function () {
    console.info('DOM geladen');
    // filterSelection("all");
    // w3AddClass();
    // w3RemoveClass();
  });