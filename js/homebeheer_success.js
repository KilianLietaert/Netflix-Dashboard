document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substr(1);
    const urlParams = new URLSearchParams(queryString);

    const save = urlParams.get('send')
    
    if (save != null) {
        document.querySelector(`.c-home-beheer__success`).classList.remove(`c-home-beheer__verdwijn`);
        document.querySelector(`.js-success`).innerHTML = `Your changes are successfully saved!`;
        window.setTimeout(()=>{
            document.querySelector(`.c-home-beheer__success`).classList.add(`c-home-beheer__verdwijn`);
        }, 5000);
    }
});