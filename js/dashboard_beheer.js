const enableDisable = function(checkbox){
    jsClass = document.querySelector(`.js-${checkbox.value}`);

    const inputs = jsClass.querySelectorAll(`input`);

    if (checkbox.checked) {
        jsClass.classList.remove(`c-home-beheer__disabled`);
        for (let index = 0; index < inputs.length; index++) {
            if (index > 0) {
                inputs[index].disabled = false;
            }               
        }
    } else {
        jsClass.classList.add(`c-home-beheer__disabled`);
        for (let index = 0; index < inputs.length; index++) {
            if (index > 0) {
                inputs[index].disabled = true;
                inputs[index].checked = false;
            }               
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(`.js-enable-disable`).forEach(input => {
        enableDisable(input);
    })
});