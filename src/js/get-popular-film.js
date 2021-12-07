import { getPopularFilms } from './services/fetch-backend';
import { replaceGenresById } from './services/replace_genres_by_id';
import { markUpPopularFilmGallery } from './mark_up_popular_film_gallery';

let page = 1;
const spinner = document.getElementById('loading');

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
