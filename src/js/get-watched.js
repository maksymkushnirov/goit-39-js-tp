// import liberyCardTpl from '../templates/libery-card.hbs';
// import { markUpPopularFilmGallery } from '../js/mark-up-main-film-gallery';

const getWatched = localStorage.getItem('Watched');
const parsedWatchedFilms = JSON.parse(getWatched);
// export const markUpWatched = creatWatchedCard(parsedWatchedFilms);

// function creatWatchedCard(parsedWatchedFilms) {
//   if (parsedWatchedFilms) {
//     return parsedWatchedFilms.map(liberyCardTpl).join('');
//   }
// }
// markUpPopularFilmGallery(parsedWatchedFilms);
// console.log(markUpPopularFilmGallery());
// Handlebars.registerHelper('loud', function (year) {
//   return year.slice(0, 4);
// });

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

// const genres = localStorage.getItem('genres');
// const parsedGenres = JSON.parse(genres);
// const genresById = parsedGenres.genres.filter(({ id }) => filmData.genre_ids.includes(id));
// const arrayGenres = genresById.map((genre) => {
//   return genre.name;
// });
// if (arrayGenres.length > 3) {
//   arrayGenres.splice(2, 10, 'other...');
// }
// filmData.genre_ids = arrayGenres;

export const markUpWatched = parsedWatchedFilms
  .map((film) => {
    const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;

    if (!name && !title) {
      return;
    }

    let filmYear;
    let filmName = '';
    release_date !== undefined ? (filmYear = release_date) : (filmYear = first_air_date);
    title !== undefined ? (filmName = title) : (filmName = name);

    if (!release_date && !first_air_date) {
      filmYear = '';
    }
    return `<li class="card-item modalBtn" data-id="${film.id}" >
        <a class="link modalBtn" href="#" data-id="${film.id}" >
        <div class=""><img class="card-image modalBtn" data-id="${film.id}" src="${isPosterPath(
      poster_path
    )}" alt="poster-film"></div>
        <h2 class="card-title modalBtn" data-id="${film.id}">${filmName.toUpperCase()}</h2>
          <div class="card-description-container modalBtn" data-id="${film.id}">
            <p class="card-description modalBtn" data-id="${film.id}">${genre_ids} | ${filmYear.slice(
      0,
      4
    )}  <span class="card-vote_average">${vote_average}</p>
          </div>
      </a>
    </li>`;
  })
  .join('');
// console.log(markUpWatched);

function isPosterPath(poster) {
  if (poster !== null) {
    return `https://image.tmdb.org/t/p/w500${poster}`;
  }
  return `${img}`;
}
