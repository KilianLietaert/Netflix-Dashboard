let isMovieNotSerie= false;;

const arrMovies = [
    {
        ranking: 1,
        info: {
            title: `365 Days`,
            img: `movie1.png`
        }
    },
    {
        ranking: 2,
        info: {
            title: `Enola Holmes`,
            img: `movie2.png`
        }
    },
    {
        ranking: 3,
        info: {
            title: `The Old Guard`,
            img: `movie3.png`
        }
    },
    {
        ranking: 4,
        info: {
            title: `The Social Dilemma`,
            img: `movie4.png`
        }
    },
    {
        ranking: 5,
        info: {
            title: `Project Power`,
            img: `movie5.png`
        }
    }
];

const arrSeries = [
    {
        ranking: 1,
        info: {
            title: `The Queen's Gambit`,
            img: `serie1.png`
        }
    },
    {
        ranking: 2,
        info: {
            title: `The Crown`,
            img: `serie2.png`
        }
    },
    {
        ranking: 3,
        info: {
            title: `Virgin River`,
            img: `serie3.png`
        }
    },
    {
        ranking: 4,
        info: {
            title: `Star Trek: Discovery`,
            img: `serie4.png`
        }
    },
    {
        ranking: 5,
        info: {
            title: `El Desorden Que Dejas`,
            img: `serie5.png`
        }
    }
];

const sorteerFunctie = function(key) {    
    return function(a, b) {    
        if (a[key] > b[key]) {    
            return 1;    
        } else if (a[key] < b[key]) {    
            return -1;    
        }    
        return 0;    
    }    
}   

const showMedia = function(array, movieOrSerie){
    const hitlist = document.querySelector(`.c-hitlist`);

    hitlist.classList.add(`u-fade`);
    setTimeout(function(){      
        hitlist.classList.remove(`u-fade`);
        hitlist.innerHTML = "";
        for (let index = 0; index < array.length; index++) {
            const hitlistItem = document.createElement(`li`);
            hitlistItem.classList.add(`c-hitlist__item`);
            hitlistItem.innerHTML = `
            <a href="#" class="c-hitlist__link">
                <img src="img/${array[index].info.img}" class="c-hitlist__img" alt="${array[index].info.title}" />
                <p class="c-hitlist__title">${array[index].ranking}. ${array[index].info.title}<span>${movieOrSerie}</span></p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.757" height="30.514" viewBox="0 0 16.757 30.514">
                    <path id="PijlRechts" class="c-hitlist__svg" d="M13.5,35.271,26.636,22.136,13.5,9" transform="translate(-11.379 -6.879)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>
            </a>`;
            hitlist.appendChild(hitlistItem);
        }; 
      }, 500);
};

const moviesOrSeries = function(element){
    if (element.textContent.includes(`Movie`)){
        if (!isMovieNotSerie) {
            showMedia(arrMovies, `Movie`);
        }
        isMovieNotSerie = true;
    } else if (element.textContent.includes(`Serie`)){  
        if (isMovieNotSerie) {
            showMedia(arrSeries, `Serie`);
        }
        isMovieNotSerie = false;
    }
};

const start = function(){
    const movies = document.querySelector(`.o-toggle`).firstChild.nextSibling;
    const series = document.querySelector(`.o-toggle`).firstChild.nextSibling.nextSibling.nextSibling;
    
    arrMovies.sort(sorteerFunctie("ranking"));
    arrSeries.sort(sorteerFunctie("ranking"));

    if (movies.classList.contains(`active`)) {
        showMedia(arrMovies, `Movie`);
        isMovieNotSerie = true;
    } else if(series.classList.contains(`active`)) {
        showMedia(arrMovies, `Serie`);
        isMovieNotSerie = false;
    };

    movies.addEventListener(`click`, function(e){
        moviesOrSeries(e.currentTarget);
    });
    series.addEventListener(`click`, function(e){
        moviesOrSeries(e.currentTarget);
    });
};

document.addEventListener("DOMContentLoaded", start);