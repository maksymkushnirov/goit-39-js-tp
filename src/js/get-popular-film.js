import { getPopularFilms } from './services/fetch-backend';
import { replaceGenresById } from './services/replace_genres_by_id';
import { markUpPopularFilmGallery } from './mark-up-main-film-gallery';
import { pagination } from './pagination.js';
import { scrollToTop } from './scrollToTop'

const page = pagination.getCurrentPage();
const spinner = document.getElementById('loading');


export function GetPopularFilms() {
  getPopularFilms(page) //Функція приймає популярні фільми з бекенду(перші 20), рендерить їх в html і записує в локальне сховище
    .then((films) => {
      films.results.map((filmData) => {
        replaceGenresById(filmData); //Функція добавляє назви жанрів по id
      });

      pagination.reset(films.total_pages);
      localStorage.setItem('films_from_beckend', JSON.stringify(films.results));
      markUpPopularFilmGallery(films.results);
      spinner.classList.add('visually-hidden');
    })
    .catch((error) => console.log(error));
}
GetPopularFilms();

// Підключаємо пагінацію
pagination.on('afterMove', handlerPopFilm);

export function handlerPopFilm(event){
  // gallery.innerHTML = '';
  scrollToTop();
  const currentPage = event.page;
  getPopularFilms(currentPage) //Функція приймає популярні фільми з бекенду(перші 20), рендерить їх в html і записує в локальне сховище
    .then((films) => {
      films.results.map((filmData) => {
        replaceGenresById(filmData); //Функція добавляє назви жанрів по id
      });
      localStorage.setItem('films_from_beckend', JSON.stringify(films.results));
      markUpPopularFilmGallery(films.results);
      spinner.classList.add('visually-hidden');
    })
    .catch((error) => console.log(error));
}