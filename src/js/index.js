import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-backend";
import { getGenres } from "./services/fetch-backend";
import { replaceGenresById } from "./services/replace_genres_by_id";
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
    films.results.map(filmData => {
      replaceGenresById(filmData); //Функція добавляє назви жанрів по id
    })
  
    localStorage.setItem("films_from_beckend", JSON.stringify(films.results));
    markUpPopularFilmGallery(films.results);
  })
  .catch(error => console.log(error))

 


