import liberyCardTpl from '../templates/libery-card.hbs';

const getWatched = localStorage.getItem('Watched');
const parsedWatchedFilms = JSON.parse(getWatched);
export const markUpWatched = creatWatchedCard(parsedWatchedFilms);

function creatWatchedCard(parsedWatchedFilms) {
  if (parsedWatchedFilms) {
    return parsedWatchedFilms.map(liberyCardTpl).join('');
  }
}

//   .map((film) => {
//     const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;

//     return `
//     <li class="card-item modalBtn" data-id="${film.id}" >
//         <a class="link modalBtn" href="#" data-id="${film.id}" >
//         <div class=""><img class="card-image modalBtn" data-id="${
//           film.id
//         }" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
//         <h2 class="card-title modalBtn" data-id="${film.id}">${title.toUpperCase() || name.toUpperCase()}</h2>
//           <div class="card-description-container modalBtn" data-id="${film.id}">
//             <p class="card-description modalBtn" data-id="${film.id}">${genre_ids.join(', ')} | ${
//       release_date.slice(0, 4) || first_air_date.slice(0, 4)
//     }</p>
//           </div>
//       </a>
//     </li>
//     `;
//   })
//   .join('');

// console.log(markUpWatched);
// console.log(parsedWatchedFilms);
// console.log(liberyCardTpl(parsedWatchedFilms[0]));
