import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-backend";
import { getGenres } from "./services/fetch-backend";
import { onBtnLibrary } from './onclick-my_library';

let page = 1;
const refs = {
  developer: document.querySelector(".footer-link"),
  gallery: document.querySelector(".card-list")
};

refs.developer.addEventListener("click", (e) => {
  e.preventDefault();
  instance.show();

})

// onBtnLibrary()//Функція виконується при нажиманні на кнопку My Library

getGenres()
  .then(value => {
    localStorage.setItem("genres", JSON.stringify(value));
  })
  .catch(error => console.log(error))

getPopularFilms(page)
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
    if (genre_ids.length > 3) {
      genre_ids.splice(2, 10, "other...")
    }
    // console.log(genresById)
    return `<li class="card-item">
        <a class="link" href="#">
        <div class=""><img class="card-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
        <h2 class="card-title">${title.toUpperCase() || name.toUpperCase()}</h2>
          <div class="card-description-container">
            <p class="card-description">${genre_ids.join(", ")} | ${release_date.slice(0, 4) || first_air_date.slice(0, 4)}</p>
          </div>
      </a>
    </li>`;
  }).join("");

  refs.gallery.insertAdjacentHTML("beforeend", markUp)
};
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};