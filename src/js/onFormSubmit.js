
import { getSearch } from './services/fetch-backend';
import { replaceGenresById } from './services/replace_genres_by_id';
import { markUpPopularFilmGallery } from './mark-up-main-film-gallery';
import { GetPopularFilms } from './get-popular-film';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { pagination } from './pagination.js';
import { handlerPopFilm } from './get-popular-film';
import { scrollToTop } from './scrollToTop';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.card-list'),
  error: document.querySelector('.header-error__text'),
};

refs.searchForm.addEventListener('submit', onSubmit);
let inputValue = '';
const page = pagination.getCurrentPage();

//Функція виконується при вводі в інпуті
async function onSubmit(event) {
  event.preventDefault();

  if (event.currentTarget.query.value.trim() === '') {
    //Щоб не вводити пробіли в інпуті
    Notify.failure('Please enter the title of the movie.');
    // GetPopularFilms();
    return;
  }

  pagination.off('afterMove', handlerPopFilm);
  const inputValue = event.currentTarget.query.value;

  getSearch(inputValue, page)
    .then((data) => {
      //Функція запиту на бекенд по вводу в інпуті
      if (data.results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name and', { timeout: 3000 });
        GetPopularFilms();
        pagination.on('afterMove', handlerPopFilm);
        return
      } else {
        pagination.reset(data.total_pages);
        pagination.movePageTo(1)
        data.results.map((filmData) => {
          replaceGenresById(filmData); //Функція добавляє назви жанрів по id
        });

        localStorage.setItem('search_films_from_beckend', JSON.stringify(data.results));
        markUpPopularFilmGallery(data.results); //Рендерить розмітку запиту із форми
      }   
    })
    .catch((error) => console.log(error));

  //refs.searchForm.reset();
}

//Очистка розмітки

// function clearMarkup() {
//   refs.gallery.innerHTML = '';
// }

pagination.on('beforeMove', handlerSearchFilm);

  
async function handlerSearchFilm(event) {
 scrollToTop();
  const currentPage = event.page;
  if (inputValue) {
     try {
       const data = await getSearch(inputValue, currentPage);
      if (data.results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name and', { timeout: 3000 });
        return
        }
      else {
      data.results.map((filmData) => {
      replaceGenresById(filmData); //Функція добавляє назви жанрів по id
      });
      localStorage.setItem('search_films_from_beckend', JSON.stringify(data.results));
      markUpPopularFilmGallery(data.results); //Рендерить розмітку запиту із форми
      }
    }
   catch(error) {console.log(error)} 
   }
  
  }