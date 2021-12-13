//import liberyCardTpl from '../templates/libery-card.hbs';

/* const getWatched = localStorage.getItem('Watched');
const parsedWatchedFilms = JSON.parse(getWatched);
export const markUpWatched = creatWatchedCard(parsedWatchedFilms);

function creatWatchedCard(parsedWatchedFilms) {
  if (parsedWatchedFilms) {
    return parsedWatchedFilms.map(liberyCardTpl).join('');
  }
} */


import imgOne from '../images/no-poster1.png';
const gallery = document.querySelector('.card-list');

export function markUpWatchedFilmGallery(films) {
  const markUp = films
    .map((film) => {
      const {
        title,
        name,
        genres,
        vote_average,
        release_date,
        first_air_date,
        poster_path,
        backdrop_path
      } = film;

      if (!name && !title) {
        return;
      }

      let filmYear;
      let filmName = '';
      release_date !== undefined
        ? (filmYear = release_date)
        : (filmYear = first_air_date);
      title !== undefined ? (filmName = title) : (filmName = name);

      if (!release_date && !first_air_date) {
        filmYear = '';
      }
      return `<li class="card-item modalBtn" data-id="${film.id}" >
        <a class="link modalBtn" href="#" data-id="${film.id}" >
        <div class=""><img class="card-image modalBtn" data-id="${
          film.id
        }" src="${isPosterPath(poster_path)}" alt="poster-film"></div>
        <h2 class="card-title modalBtn" data-id="${
          film.id
        }">${filmName.toUpperCase()}</h2>
          <div class="card-description-container modalBtn" data-id="${film.id}">
            <p class="card-description modalBtn" data-id="${
              film.id
        }">${genres} | ${filmYear.slice(0, 4)}
            <span class="card-vote_average">${vote_average}</span></p>
          </div>
      </a>
    </li>`;
    })
    .join('');
    console.log('dfdfdff')
  gallery.innerHTML = markUp;
}

function isPosterPath(poster) {
  if (poster !== null) {
    return `https://image.tmdb.org/t/p/w500${poster}`;
  }
  return `${imgOne}`;
}