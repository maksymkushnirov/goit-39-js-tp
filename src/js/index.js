import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-popular-films";
import { getGenres } from "./services/fetch-genres";

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

getPopularFilms(20)
  .then(films => {
    console.log(films.results)
    localStorage.setItem("films_from_beckend", JSON.stringify(films.results));
    markUpFilmCards(films.results);
  })
  .catch(error => console.log(error))

 

function markUpFilmCards(films) {
  const genres = localStorage.getItem("genres");
  const parsedGenres = JSON.parse(genres);
 
  const markUp = films.map(film => {
    const { title, genre_ids, vote_average, release_date, poster_path, backdrop_path } = film;
    // console.log(parsedGenres)
    // console.log(genre_ids)
    // const genresById = parsedGenres.filter(({id})=> genre_ids.includes(id));

    // if (genresById.length > 3) {
    //   genresById.splice(2, 2, "other")
    // }
    // console.log(genresById)
    return `<div class="">
    <div class=""><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
      <h2 class="">${title.toUpperCase()}</h2>
      <div class="">
        <p class="">${2} | ${release_date.slice(0, 4)}</p>
        <p class="">${vote_average}</p>
      </div>
      </div>`;
  }).join("");

  refs.gallery.insertAdjacentHTML("beforeend", markUp)
};
