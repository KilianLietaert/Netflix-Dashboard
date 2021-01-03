document.addEventListener("DOMContentLoaded", () => {
    const link = document.querySelector(`.c-home-avatar__btn`);
    if (link) {
        link.addEventListener(`click`, () =>{
            window.location.href = "homebeheer.html";
        });
    }
});