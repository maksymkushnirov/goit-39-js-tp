import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-backend";
import { getGenres } from "./services/fetch-backend";
import { onBtnLibrary } from './onclick-my_library';
import { markUpPopularFilmGallery } from "./mark_up_popular_film_gallery";

let page = 1;
const refs = {
  developer: document.querySelector(".footer-link"),
};

//Показує список розробників сайту при кліку на ссилку в футері
refs.developer.addEventListener("click", (e) => {
  e.preventDefault();
  instance.show();
})

onBtnLibrary()//Функція виконується при нажиманні на кнопку My Library

getGenres() //Функція приймає жанри з бекенду і записує в локальне сховище
  .then(value => {
    localStorage.setItem("genres", JSON.stringify(value));
  })
  .catch(error => console.log(error))

getPopularFilms(page) //Функція приймає популярні фільми з бекенду(перші 20), рендерить їх в html і записує в локальне сховище
  .then(films => {
    films.results.map(film => {
      const genres = localStorage.getItem("genres");
      const parsedGenres = JSON.parse(genres);
      const genresById = parsedGenres.genres.filter(({ id }) => film.genre_ids.includes(id));
      const arrayGenres = genresById.map(genre => {
        return  genre.name
      })
        if (arrayGenres.length > 3) {
          arrayGenres.splice(2, 10, "other...")
        }
      film.genre_ids = arrayGenres;
    })
  
    localStorage.setItem("films_from_beckend", JSON.stringify(films.results));
    markUpPopularFilmGallery(films.results);
  })
  .catch(error => console.log(error))

 


