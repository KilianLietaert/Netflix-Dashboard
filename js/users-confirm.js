'use strict';

let html_modalwindow;

const loadSettings = function () {
  const modalwindow = `<div class="c-modal js-modal">
  <div class="c-modal_window js-modal_window">
  <div class="c-modal_titel">Delete user</div>
  <div class="c-modal_close js-modal_close"><i class="far fa-window-close"></i></div>
  <div class="c-modal_text js-modal_text">Are you Sure that you want to delete this user?</div>
  <div class="c-modal_buttons ">
    <button class="c-modal_btn ">Delete</button>
    <button id="js-cancel" class="c-modal_btn">Cancel</button>
  </div>
  </div>
  </div>`;

  document.querySelector("#js-confirm-delete").innerHTML += modalwindow;
  html_modalwindow = document.querySelector(".js-modal");
  html_modalwindow.classList.toggle("hidden");
  const cancelBtn = document.getElementById("js-cancel");

  html_modalwindow.querySelector(".js-modal_close").addEventListener("click", function () {
    html_modalwindow.classList.toggle("hidden");
  })

  cancelBtn.addEventListener("click", function () {
    html_modalwindow.classList.toggle("hidden");
  })



};

const showModalWindow = function () {
  html_modalwindow.classList.toggle("hidden");
};



const listenToDelete = () => {
  // e.preventDefault();
      // console.log("clicked");
      showModalWindow();
}


document.addEventListener("DOMContentLoaded", function () { 
  loadSettings();
 });
