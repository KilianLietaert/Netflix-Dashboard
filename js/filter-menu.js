"use strict"

const maxDate = function () {
    //set the max value of date to the current date
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy + '-' + mm + '-' + dd;
   
    document.querySelector(".js-start-date").setAttribute("max", today);
    document.querySelector(".js-end-date").setAttribute("max", today);

}

const init = () => {
    const filterBtn = $(".js-filter-btn");
    const filterMenu = $(".js-filter-menu");
    filterMenu.hide();

    filterBtn.click(function () {
        filterMenu.slideToggle()
    })
}


$(function () {

    init();
    maxDate();
  
  });