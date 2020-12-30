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
    for (let item of data.archive) {
        // console.log(item);
        html += `         
        <div class="row">
            <div class="col-12">
                <div class="detail">
                    <div class="row">

                    <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-1"><img class="foto" src="/img/${item.img}.PNG" alt=""></div>

                    <div class="tekst col-lg-6 col-sm-6 col-md-6 offset-lg-2">
                        <div class=""><h1>${item.titel}</h1></div>
                        <h3>${item.type}</h3>
                        <div class="sterretjes col-lg-12">
                            <div class="row">
                                <h2>${item.beoordeling}</h2>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="leegster"><i class="far fa-star"></i></div>
                        </div></div>
                        <h4>${item.duur}</h4>
                        <div class="knopen">
                            <div class="row col-lg-12">
                            <div ><a class="btn btn-detail" href="">${item.categorie1}</a></div>
                            <div ><a class="btn btn-detail" href="">${item.categorie2}</a></div>
                            <div ><a class="btn btn-detail" href="">${item.categorie3}</a></div>
                            <div ><a class="btn btn-detail1" href="">${item.categorie4}</a></div>
                            </div>
                        </div>
                        <p>${item.beschrijving}</p>
                        <div class="editendelete">
                            <div class="row col-lg-12">
                            <div ><a class="btn-edit btn" href="">Edit</a></div>
                            <div><a class="btn-delete btn" href="">Delete</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    }
    elem.innerHTML = html;
}



$(document).ready( ()=> {
    jsonInladen();
    
});
