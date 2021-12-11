import { getPopularFilms } from './services/fetch-backend';
import { replaceGenresById } from './services/replace_genres_by_id';
import { markUpPopularFilmGallery } from './mark-up-main-film-gallery';
import { pagination } from './pagination.js';

let page = 1;
const spinner = document.getElementById('loading');
const gallery = document.querySelector('.card-list');

function GetPopularFilms() {
   getPopularFilms(page) //Функція приймає популярні фільми з бекенду(перші 20), рендерить їх в html і записує в локальне сховище
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
GetPopularFilms();

export { GetPopularFilms };

// Підключаємо пагінацію
pagination.on('beforeMove', (event) => {
  gallery.innerHTML = '';
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
});
