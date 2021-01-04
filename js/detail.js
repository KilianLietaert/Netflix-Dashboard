"use strict";


//data uit json inladen
const loadJson = () => {
    fetch("../json/detail.json")
        .then(resp =>{
            if (!resp.ok) {
                throw new Error("HTTP error " + resp.status);
            }
            return resp.json();
        })
        .then(json => {
            getUser(json);
        })
        .catch(err => {
        console.error(err)
    })
}


//tabel maken in html
const makeTable = data => {
    const elem = document.getElementById('elementID');
    let html = "";
    // for (let item of data.archive) {
        // console.log(item);
        html += ` <div class="volledig" style="background-image:url(/img/${data.background}.png);"> 
        <div class="container">        
        <div class="row">
            <div class="col-12">
                <div class="detail">
                    <div class="row">

                    <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-1"><img class="foto" src="/img/${data.img}.PNG" alt=""></div>

                    <div class="tekst col-lg-6 col-sm-6 col-md-6 offset-lg-2">
                        <div class=""><h1>${data.titel}</h1></div>
                        <h3>${data.type}</h3>
                        <div class="sterretjes col-lg-12">
                            <div class="row">
                                <h2>${data.beoordeling}</h2>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="volster"><i class="fas fa-star"></i></div>
                            <div class="leegster"><i class="far fa-star"></i></div>
                        </div></div>
                        <h4>${data.duur}</h4>
                        <div class="knopen">
                            <div class="row col-lg-12">
                            <div ><a class="btn btn-detail" href="">${data.categorie1}</a></div>
                            <div ><a class="btn btn-detail" href="">${data.categorie2}</a></div>
                            <div ><a class="btn btn-detail" href="">${data.categorie3}</a></div>
                            <div ><a class="btn btn-detail1" href="">${data.categorie4}</a></div>
                            </div>
                        </div>
                        <p>${data.beschrijving}</p>
                        <div class="editendelete">
                            <div class="row col-lg-12">
                            <div ><a class="btn-edit btn" href="${data.link}">Edit</a></div>
                            <div><a class="btn-delete btn" href="">Delete</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div></div>`;

    // }
    elem.innerHTML = html;
}

//user id halen uit de url en dan return een object met die user
const getUser = function (data) {
    // console.log(data)

    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userid');
    console.log(userId);
    if (params.has('userid')) {
        
        const userObject = data.filter(user => {
                return user.id == userId
            });
    
            makeTable(userObject[0])
    } else {
        makeTable("");
    }

    // console.log(typeof userId);

}


$(function () {
    loadJson();
})
