const toevoegen = (text, listGroup, optionGroup) => {
    if (text.length>0) {
        listGroup.innerHTML += `<a class="list-group-item list-group-item-action" id="list-${text.toLowerCase()}-list" data-toggle="list" href="#list-${text.toLowerCase()}" role="tab" aria-controls="${text.toLowerCase()}">${text}</a>`;

        optionGroup.innerHTML += `<div class="tab-pane fade" id="list-${text.toLowerCase()}" role="tabpanel" aria-labelledby="list-${text.toLowerCase()}-list">
        <div class="row mb-3">
            <label class="c-home-beheer__label c-home-beheer__label--switch-margin col-6 col-md-4" for="${text.toLowerCase()}name">Name</label>
            <input type="text" name="${text.toLowerCase()}name" class="c-home-beheer__input col-5 col-md-3" id="${text.toLowerCase()}name" value="${text}" />
        </div>
        <div class="row mb-3">
            <label class="c-home-beheer__label c-home-beheer__label--switch-margin col-6 col-md-4" for="${text.toLowerCase()}price">Price per month</label>
            <input type="number" name="${text.toLowerCase()}price" class="c-home-beheer__input col-2 col-xl-1" id="${text.toLowerCase()}price" value="0.00" min="0" step="0.01" />
        </div>
        <div class="row mb-3">
            <label class="c-home-beheer__label c-home-beheer__label--switch-margin col-6 col-md-4" for="${text}screen">Screen quality</label>
            <select name="${text.toLowerCase()}screen" id="${text.toLowerCase()}screen" class="c-home-beheer__input col-5 col-lg-4 col-xl-3">
                <option value="SD" selected >SD (720x576)</option>
                <option value="HD">HD (1080x1920)</option>
                <option value="UHD">Ultra HD (3840x2160)</option>
              </select>
        </div>
        <div class="row mb-3">
            <label class="c-home-beheer__label c-home-beheer__label--switch-margin col-6 col-md-4" for="${text.toLowerCase()}users">Number of users</label>
            <input type="number" name="${text.toLowerCase()}users" class="c-home-beheer__input col-2 col-xl-1" id="${text.toLowerCase()}users" value="1" min="1" step="1" />
        </div>
        <div class="row mb-3">
            <label class="c-home-beheer__label c-home-beheer__label--switch-margin col-6 col-md-4" for="${text.toLowerCase()}screenperuser">Screens per user</label>
            <input type="number" name="${text.toLowerCase()}screenperuser" class="c-home-beheer__input col-2 col-xl-1" id="${text.toLowerCase()}screenperuser" value="1" min="1" step="1" />
        </div>
        <br />
        <div class="row mb-5">
            <button class="btn c-home-beheer__primary mx-4 c-settings__button" id="delete" data-sub="${text.toLowerCase()}">Delete subscription type</button>
        </div>
        </div>`;
    }
};

const disableEnter = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener(`keydown`, (e)=>{
            if (e.keyCode === 13) {
                e.preventDefault();
            }
        });
    });
};

const addDelete = (deletes) => {
    deletes.forEach(btn => {
        btn.addEventListener(`click`, (e)=>{
            e.preventDefault();

            let listItem = document.querySelector(`#list-${btn.dataset.sub}-list`);
            let listData = document.querySelector(`#list-${btn.dataset.sub}`);

            listItem.parentNode.removeChild(listItem);
            listData.parentNode.removeChild(listData);
        });
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    let listGroup = document.querySelector(`#list-tab`);
    let optionGroup = document.querySelector(`#nav-tabContent`);
    const addNewInput = document.querySelector(`#addnew`);
    const addNewButton = document.querySelector(`#addnewbutton`);
    let allInputs = document.querySelectorAll(`input`);
    let allDeletes = document.querySelectorAll(`#delete`);
    let allSelects = document.querySelectorAll(`select`);

    disableEnter(allInputs);
    disableEnter(allSelects);
    addDelete(allDeletes);


    addNewInput.addEventListener(`keydown`, (e)=>{
        if (e.keyCode === 13) {
            e.preventDefault();
            toevoegen(addNewInput.value, listGroup, optionGroup);
            addNewInput.value = ``;
            allInputs = document.querySelectorAll(`input`);
            disableEnter(allInputs);
            allSelects = document.querySelectorAll(`select`);
            disableEnter(allSelects);
            allDeletes = document.querySelectorAll(`#delete`);
            addDelete(allDeletes);
        }
    });

    addNewButton.addEventListener(`click`, (e) => {
        e.preventDefault();
        toevoegen(addNewInput.value, listGroup, optionGroup);
        addNewInput.value = ``;
        allInputs = document.querySelectorAll(`input`);
        disableEnter(allInputs);
        allSelects = document.querySelectorAll(`select`);
        disableEnter(allSelects);
        allDeletes = document.querySelectorAll(`#delete`);
        addDelete(allDeletes);
    });
});