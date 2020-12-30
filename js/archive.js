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
    console.log(data.archive);
    for (let item of data) {
        // console.log(item);
        html += `                            <div class="picture col-lg-2 col-md-3 col-sm-4">         
        <img class="img-fluid" src="/img/${item.imgarchive}.png" alt="">
        <a href="/detail2.html"><p>${item.titelarchive}</p></a> </div>`;

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


$(document).ready( ()=> {
    jsonInladen();
    searchTable();
    
});
