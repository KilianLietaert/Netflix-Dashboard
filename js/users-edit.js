"use strict";
const loadJson = () => {
    fetch("../json/users.json")
        .then(resp =>{
            if (!resp.ok) {
                throw new Error("HTTP error " + resp.status);
            }
            return resp.json();
        })
        .then(json => {
            getUser(json.users);
        })
        .catch(err => {
        console.error(err)
    })
}

// form input aanmaken met user info
const makeForm = function (user) {
    const formTitle = document.querySelector(".js-form-title");
    const form = document.querySelector(".js-user-form");
    console.log(user)
    if (user) {
        const userPlan = user.plan.toLowerCase();
    const formInhound = `<div class="form-group c-user__fgroup">
    <label for="user-id">ID</label>
    <input type="text" class="form-control c-user-input form-control-lg" value="${user.id}" id="user-id" readonly placeholder="Id">
  </div>

  <div class="form-group c-user__fgroup">
    <label for="user-voornaam">First name</label>
    <input type="text" class="form-control c-user-input form-control-lg" value="${user.firstName}" id="user-voornaam" placeholder="First name">
  </div>

  <div class="form-group c-user__fgroup">
    <label for="user-naam">Last name</label>
    <input type="text" class="form-control c-user-input form-control-lg" value="${user.lastName}"  id="user-naam" placeholder="Last name">
  </div>

  <div class="form-group c-user__fgroup">
    <label for="user-email">Email address</label>
    <input type="email" class="form-control c-user-input form-control-lg" value="${user.email}" id="user-email" placeholder="Email">
  </div>

  <div class="form-group c-user__fgroup">
    <label for="username">Username</label>
    <input type="text" class="form-control c-user-input form-control-lg" value="${user.username}" id="username" placeholder="Username">
  </div>

  <div class="form-group c-user__fgroup">
      <label for="user-plan">Plan</label>
      <select id="user-plan" class="form-control c-user-input form-control-lg ">
          <option ${userPlan == "basic" ? "selected" : "" } value="basic">Basic</option>
          <option ${userPlan == "standard" ? "selected" : "" } value="standard">Standard</option>
          <option ${userPlan == "premium" ? "selected" : "" } value="premium">Premium</option>
      </select>
  </div>


  <div class="form-group c-user__fgroup">
    <label for="user-country">Country</label>
    <input type="text" class="form-control c-user-input form-control-lg" value="${user.address.country}" id="user-country" placeholder="Country">
  </div>

  <button type="submit" class="c-user-btn">Edit</button>`;
    
        form.innerHTML = formInhound;
        
    } else {
        console.log("empty")
        formTitle.innerText = "User not found";
        
    }
}


//user id halen uit de url en dan return een object met die user
const getUser = function (data) {
    // console.log(data)

    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userid');
    if (params.has('userid')) {
        
        const userObject = data.filter(user => {
                return user.id == userId
            });
    
            makeForm(userObject[0])
    } else {
        makeForm("");
    }

    // console.log(typeof userId);

}


$(function () {
    loadJson();
})