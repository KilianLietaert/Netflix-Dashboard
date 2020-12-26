"use strict";


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
        .then(data=> {
        // console.log(data)
            makeTable(data);
        })
        .catch(err => {
        console.error(err)
    })
}


//tabel maken in html
const makeTable = data => {
    const elem = document.getElementById('elementID');
    let html = "";
    for (let item of data.users) {
        // console.log(item);
        html += `         
        <img class="img-fluid" src="/img/narcos.png" alt="">
        <a href="/detail2.html?id=${item.id}">Narcos</a>`;

    }
    elem.innerHTML = html;
}



$(document).ready( ()=> {
    jsonInladen();
    
});
