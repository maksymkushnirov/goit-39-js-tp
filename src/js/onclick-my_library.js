import img from '../images/screen-library.jpg';
import { pagination_2 } from './pagination.js';
import { markUpWatchedFilmGallery } from './get-watched';
import { scrollToTop } from './scrollToTop';


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
  paginationContainer: document.getElementById('tui-pagination-container'),
  paginationContainer_2: document.getElementById('tui-pagination-container-2'),
};

refs.logo.addEventListener('click', onLogo);
refs.btnHome.addEventListener('click', onBtnHome);
refs.btnLibrary.addEventListener('click', onBtnLibrary); //Виклик слухача на кнопку LIBRARY
refs.btnWatched.addEventListener('click', onBtnWatchedInMyLibrary); //Виклик слухача на кнопку Watched
refs.btnQueue.addEventListener('click', onBtnQueueInMyLibrary); //Виклик слухача на кнопку Queve

refs.btnLibrary.classList.remove('nav-item__list--activ');

function onLogo(event) {
  // console.log(event);
  // event.preventDefault()
  refs.btnLibrary.classList.remove('nav-item__list--activ');
  onBtnHome();
}
//Функція виконується при нажиманні на кнопку Home
function onBtnHome() {
  refs.btnHome.classList.add('nav-item__list--activ');
  refs.btnLibrary.classList.remove('nav-item__list--activ');
  refs.changeHeader.classList.remove('header-change');
  refs.searchForm.classList.remove('visually-hidden');
  refs.openNextBtn.classList.add('visually-hidden');
  markUpHomeScreen();
}
//Функція виконується при нажиманні на кнопку My Library
export function onBtnLibrary() {
  refs.btnHome.classList.remove('nav-item__list--activ');
  refs.btnLibrary.classList.add('nav-item__list--activ');
  refs.searchForm.classList.add('visually-hidden');
  refs.openNextBtn.classList.remove('visually-hidden');
  refs.changeHeader.classList.add('header-change');
  refs.paginationContainer.classList.add('visually-hidden');
  
  markUpLibraryScreen();
  onBtnQueueInMyLibrary();
  onBtnWatchedInMyLibrary();
}

//Функція виконується при нажиманні на кнопку Watched
function onBtnWatchedInMyLibrary() {
  const getWatched = localStorage.getItem('Watched');
  const parsedWatchedFilms = JSON.parse(getWatched);
  if (parsedWatchedFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    return;
  }
  //console.log(parsedWatchedFilms)
  if (parsedWatchedFilms.length > 0) {
    refs.gallery.innerHTML = '';
    refs.paginationContainer_2.classList.remove('visually-hidden');
    pagination_2.reset(parsedWatchedFilms.length);
    parsedWatchedFilms.splice(12);
    markUpWatchedFilmGallery(parsedWatchedFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    
    //console.log('Yesss');
    return;
  }
  if (parsedWatchedFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    refs.paginationContainer_2.classList.add('visually-hidden');
    //console.log('Nooooo');
  }
}

//Функція виконується при нажиманні на кнопку Queue
function onBtnQueueInMyLibrary() {
  const getQueue = localStorage.getItem('Queue');
  const parsedQueueFilms = JSON.parse(getQueue);
  //console.log(parsedQueueFilms);
  if (parsedQueueFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    return;
  }

  if (parsedQueueFilms.length > 0) {
    refs.gallery.innerHTML = '';
    refs.paginationContainer_2.classList.remove('visually-hidden');
    pagination_2.reset(parsedQueueFilms.length);
    parsedQueueFilms.splice(12);
    markUpWatchedFilmGallery(parsedQueueFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
   
    return;
  }

  if (parsedQueueFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    refs.paginationContainer_2.classList.add('visually-hidden');
  }
}

//Функція - рендер пустого екрана My Library
function markUpLibraryScreen() {
  refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${img}" alt="Bear" />`;

  //додається функція Дмитра//
}

//Функція - рендер на кнопку Home
function markUpHomeScreen() {
  if (localStorage.getItem('films_from_beckend')) {
    location.href = './index.html';
  }
}


pagination_2.on('afterMove', handlerLibraryLilmsPag);

function handlerLibraryLilmsPag(event) {
  scrollToTop();
  const page = event.page;
  let movies;

  if (refs.btnWatched.classList.contains("header-change__cont-btn--activ")) {
    const getWatched = localStorage.getItem('Watched');
    movies = JSON.parse(getWatched);
  
  } else if (refs.btnQueue.classList.contains("header-change__cont-btn--activ")) {
    const getQueue = localStorage.getItem('Queue');
    movies = JSON.parse(getQueue);
  }

    if (page === 1) {
    movies.splice(12);
    markUpWatchedFilmGallery(movies);
  } else {
    const startPageItem = page * 12 - 12;
    const endPageItem = startPageItem + 12;
    const pageToShow = movies.slice(startPageItem, endPageItem);
    markUpWatchedFilmGallery(pageToShow);
  }

}