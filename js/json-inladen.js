"use strict";


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

    
    const tbody = document.querySelector(".js-table");
    let html = "";
    for (let item of data.users) {
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

$(document).ready( ()=> {
    jsonInladen();
    
});