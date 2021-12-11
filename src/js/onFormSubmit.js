// import { refs } from './refs';
import { getSearch } from './services/fetch-backend';
import { replaceGenresById } from './services/replace_genres_by_id';
import { markUpPopularFilmGallery } from './mark-up-main-film-gallery';
import { GetPopularFilms } from './get-popular-film';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.card-list'),
  error: document.querySelector('.header-error__text'),
  spinner: document.getElementById('loading'),
};

refs.searchForm.addEventListener('submit', onSubmit);

//Функція виконується при вводі в інпуті
async function onSubmit(event) {
  event.preventDefault();
   
  clearMarkup();

  if (event.currentTarget.query.value.trim() === '') {
    //Щоб не вводити пробіли в інпуті
    Notify.failure('Please enter the title of the movie.');
    GetPopularFilms()
    return;
  }
  
  const inputValue = event.currentTarget.query.value;
    
  
 getSearch(inputValue)
    .then((data) => {
      //Функція запиту на бекенд по вводу в інпуті
      if (data.results.length === 0) {
        Notify.failure("Search result not successful. Enter the correct movie name and", {timeout: 3000})
        GetPopularFilms()
      }
    
      data.results.map((filmData) => {
        replaceGenresById(filmData); //Функція добавляє назви жанрів по id
      });

      localStorage.setItem('search_films_from_beckend', JSON.stringify(data.results));
      markUpPopularFilmGallery(data.results); //Рендерить розмітку запиту із форми
      refs.spinner.classList.add('visually-hidden');
    })
    .catch((error) => console.log(error));

  //refs.searchForm.reset();
 
}

//Очистка розмітки

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
