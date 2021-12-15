import imgTree from '../images/screen-library.png';
import { pagination_2 } from './pagination.js';
import { markUpWatchedFilmGallery } from './get-watched';

const refs = {
  logo: document.querySelector('.logo-link'),
  btnHome: document.querySelector('[data-home]'), //Пошук кнопки HOME в Header
  btnLibrary: document.querySelector('[data-library]'), //Пошук кнопки LIBRARY в Header
  changeHeader: document.querySelector('.header'), //Пошук класу Header
  searchForm: document.querySelector('.search-form'), //Пошук форми з інпутом в Header
  openNextBtn: document.querySelector('.header-change__cont'), //Пошук контейнера з кнопками Watchd і Queve в Header
  btnWatched: document.querySelector('[data-watched]'), //Пошук кнопки Watched в Header
  btnQueue: document.querySelector('[data-queue]'), //Пошук кнопки Queve в Header
  gallery: document.querySelector('.card-list'), //Пошук контейнера gallery в main
  paginationConteiner: document.getElementById('tui-pagination-container'),
  paginationContainer_2: document.getElementById('tui-pagination-container-2'),
};

//////////////Кнопка Watched/////////////

export function onBtnWatchedInMyLibraryRender() {
  const getWatched = localStorage.getItem('Watched');
  const parsedWatchedFilms = JSON.parse(getWatched);
  if (parsedWatchedFilms === null) {
    clearMarkupWatchedCards();
    return;
  }
  //console.log(parsedWatchedFilms)
  if (parsedWatchedFilms.length > 0) {
    refs.gallery.innerHTML = '';
    if (refs.btnWatched.classList.contains('header-change__cont-btn--activ')) {
      
      pagination_2.reset(parsedWatchedFilms.length);
      parsedWatchedFilms.splice(12);
      markUpWatchedFilmGallery(parsedWatchedFilms); 

      //Рендер карточок для кнопки Watched
    } else {
      refs.gallery.innerHTML = '';
      onBtnQueueInMyLibraryRender();
    }

    //    console.log('Yesss');
    return;
  }
  if (parsedWatchedFilms.length === 0) {
    clearMarkupWatchedCards();
    //console.log('Nooooo');
  }
}

//////////////Кнопка Queue/////////////

export function onBtnQueueInMyLibraryRender() {
  const getQueue = localStorage.getItem('Queue');
  const parsedQueueFilms = JSON.parse(getQueue);
  // console.log(parsedQueueFilms);
  if (parsedQueueFilms === null) {
    clearMarkupQueueCards();
    return;
  }

  if (parsedQueueFilms.length > 0) {
    refs.gallery.innerHTML = '';
    if (refs.btnQueue.classList.contains('header-change__cont-btn--activ')) {

      pagination_2.reset(parsedQueueFilms.length);
    
      parsedQueueFilms.splice(12);
       markUpWatchedFilmGallery(parsedQueueFilms); //Рендер карточок для кнопки Watched
      
    } else {
      refs.gallery.innerHTML = '';
      onBtnWatchedInMyLibraryRender();
    }

    //console.log('Розметка');
    return;
  }

  if (parsedQueueFilms.length === 0) {
    clearMarkupQueueCards();
    //console.log('Пустой');
  }
}

/////Очитска розмітки на кнопці Watched//////////
function clearMarkupWatchedCards() {
  refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
  refs.btnWatched.classList.add('header-change__cont-btn--activ');
  refs.btnQueue.classList.remove('header-change__cont-btn--activ');
}

/////Очитска розмітки на кнопці Queue//////////

function clearMarkupQueueCards() {
  refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
  refs.btnWatched.classList.remove('header-change__cont-btn--activ');
  refs.btnQueue.classList.add('header-change__cont-btn--activ');
}
