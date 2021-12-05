import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-backend";
import { getGenres } from "./services/fetch-backend";

const refs = {
  developer: document.querySelector(".footer-link"),
  gallery: document.querySelector(".gallery")
};

refs.developer.addEventListener("click", (e) => {
  e.preventDefault();
  instance.show();

})


getGenres()
  .then(value => {
    localStorage.setItem("genres", JSON.stringify(value));
  })
  .catch(error => console.log(error))

getPopularFilms(1)
  .then(films => {
    console.log(films.results)
    localStorage.setItem("films_from_beckend", JSON.stringify(films.results));
    markUpFilmCards(films.results);
  })
  .catch(error => console.log(error))

 

function markUpFilmCards(films) {
  const genres = localStorage.getItem("genres");
  const parsedGenres = JSON.parse(genres);
  console.log(parsedGenres)
 
  const markUp = films.map(film => {
    const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;
    // console.log(parsedGenres)
    // console.log(genre_ids)
    // let genresById = parsedGenres.filter(({ id }) =>  id>25 );
    // console.log(genresById)
    // if (genresById.length > 3) {
    //   genresById.splice(2, 2, "other")
    // }
    // console.log(genresById)
    return `<div class="">
    <div class=""><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
      <h2 class="">${title.toUpperCase() || name.toUpperCase()}</h2>
      <div class="">
        <p class="">${5} | ${release_date.slice(0, 4) || first_air_date.slice(0, 4)}</p>
        <p class="">${vote_average}</p>
      </div>
      </div>`;
  }).join("");

  refs.gallery.insertAdjacentHTML("beforeend", markUp)
};
