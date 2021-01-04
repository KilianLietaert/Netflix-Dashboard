"use strict";
const perPage = 6;
let start = 0;
let currentIndex = 0;
let data = [];
const perPage = 12;
let start = 0;
let currentIndex = 0;

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
          makePagination();
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
  const totalPages = Math.ceil(data.length / perPage);

  pagItems[0].classList.add("pag-active");
  
  $(".js-pag-item").on("click", function (e) {
      e.preventDefault();
      currentIndex = $(this).data("index");
      console.log(currentIndex);
      $(".js-pag-item").removeClass("pag-active");
      $(this).addClass("pag-active");
      start = $(this).data("index") * perPage;
      makeTable(data);
  })


  //left arrow
  pagLeftArrow.addEventListener("click", (e) => {
      e.preventDefault();

      // console.log("right arr");
      if (start <= 0) {
          start = 0;
      } else {
          start = start - perPage;
      }

      if (currentIndex <= 0) {
          currentIndex = 0;
      } else {
          currentIndex = currentIndex - 1;
      }

      $(".js-pag-item").removeClass("pag-active");
      $(`.js-pag-item[data-index=${currentIndex}]`).addClass('pag-active');
      // console.log(currentIndex);
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


      if (currentIndex > totalPages) {
          currentIndex = totalPages;
      } else {
          currentIndex = currentIndex + 1;
      }

      $(".js-pag-item").removeClass("pag-active");
      $(`.js-pag-item[data-index=${currentIndex}]`).addClass('pag-active');

      // console.log("right start", currentIndex);
      makeTable(data);
  });



}



//tabel maken in html
const makeTable = data => {
    const elem = document.getElementById('elementID');
    let html = "";
  // console.log(data);
  
    let stop = data.length;
    // console.log(json.length)

    if (start + perPage < data.length) {
        stop = start + perPage;
  }
  
  // for (let item of data) {
    for (let i = start; i < stop; i++){
        // console.log(item);

        html += `<div class="picture ${data[i].divfilter} show col-lg-2 col-md-3 col-sm-4 col-6">         
        <img class="img-fluid" src="/img/${data[i].imgarchive}.png" alt="">
        <a href="/detail2.html?userid=${data[i].id}"><p>${data[i].titelarchive}</p></a> </div>`;

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