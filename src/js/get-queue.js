import imgTree from '../images/screen-library.jpg';

import { markUpWatchedFilmGallery } from './get-watched';
//import { markUpQueue } from '../js/get-queue';///////Непотрібний файл

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
  paginationConteiner: document.getElementById('tui-pagination-container')
};


export function onBtnWatchedInMyLibraryRender() {
  const getWatched = localStorage.getItem('Watched');
  const parsedWatchedFilms = JSON.parse(getWatched);
  if (parsedWatchedFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    return;
  }
  //console.log(parsedWatchedFilms)
  if (parsedWatchedFilms.length > 0) {
    refs.gallery.innerHTML = '';
    markUpWatchedFilmGallery(parsedWatchedFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    //console.log('Yesss');
    return;
  }
  if (parsedWatchedFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    //console.log('Nooooo');
  }
}


export function onBtnQueueInMyLibraryRender() {
  const getQueue = localStorage.getItem('Queue');
  const parsedQueueFilms = JSON.parse(getQueue);
 // console.log(parsedQueueFilms);
  if (parsedQueueFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    return;
  }

  if (parsedQueueFilms.length > 0) {
    refs.gallery.innerHTML = '';
    markUpWatchedFilmGallery(parsedQueueFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
   // console.log('Розметка');
    return;
  }

  if (parsedQueueFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
  //console.log('Пустой');
  }
}



/* import liberyCardTpl from '../templates/libery-card.hbs';

const getQueue = localStorage.getItem('Queue');
const parsedQueueFilms = JSON.parse(getQueue);
export const markUpQueue = creatWatchedCard(parsedQueueFilms);

function creatWatchedCard(parsedQueueFilms) {
  if (parsedQueueFilms) {
    return parsedQueueFilms.map(liberyCardTpl).join('');
  }
} */

// const markUpQueue = parsedQueueFilms
//   .map((film) => {
//     const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;

//     return `
//     <li class="card-item modalBtn" data-id="${film.id}" >
//         <a class="link modalBtn" href="#" data-id="${film.id}" >
//         <div class=""><img class="card-image modalBtn" data-id="${
//           film.id
//         }" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
//         <h2 class="card-title modalBtn" data-id="${film.id}">${title.toUpperCase() || name.toUpperCase()}</h2>
//           <div class="card-description-container modalBtn" data-id="${film.id}">
//             <p class="card-description modalBtn" data-id="${film.id}">${genre_ids.join(', ')} | ${
//       release_date.slice(0, 4) || first_air_date.slice(0, 4)
//     }</p>
//           </div>
//       </a>
//     </li>
//     `;
//   })
//   .join('');

// console.log(markUpQueue);
// console.log(parsedQueueFilms);



/* refs.logo.addEventListener('click', onLogo);
refs.btnHome.addEventListener('click', onBtnHome);
refs.btnLibrary.addEventListener('click', onBtnLibrary); //Виклик слухача на кнопку LIBRARY
refs.btnWatched.addEventListener('click', onBtnWatchedInMyLibrary); //Виклик слухача на кнопку Watched
refs.btnQueue.addEventListener('click', onBtnQueueInMyLibrary); //Виклик слухача на кнопку Queve
 */
//refs.btnLibrary.classList.remove('nav-item__list--activ');



//Функція виконується при нажиманні на кнопку My Library
/* export function onBtnLibraryMy() {
 
  markUpLibraryScreenTwo();
  onBtnQueueInMyLibraryTwo();
  onBtnWatchedInMyLibraryTwo();
}

//Функція виконується при нажиманні на кнопку Watched
function onBtnWatchedInMyLibraryTwo() {
  const getWatched = localStorage.getItem('Watched');
  const parsedWatchedFilms = JSON.parse(getWatched);
  if (parsedWatchedFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <Tree class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    return;
  }
  //console.log(parsedWatchedFilms)
  if (parsedWatchedFilms.length > 0) {
    refs.gallery.innerHTML = '';
    markUpWatchedFilmGallery(parsedWatchedFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    console.log('Yesss');
    return;
  }
  if (parsedWatchedFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.add('header-change__cont-btn--activ');
    refs.btnQueue.classList.remove('header-change__cont-btn--activ');
    console.log('Nooooo');
  }
}

//Функція виконується при нажиманні на кнопку Queue
function onBtnQueueInMyLibraryTwo() {
  const getQueue = localStorage.getItem('Queue');
  const parsedQueueFilms = JSON.parse(getQueue);
  console.log(parsedQueueFilms);
  if (parsedQueueFilms === null) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    return;
  }

  if (parsedQueueFilms.length > 0) {
    refs.gallery.innerHTML = '';
    markUpWatchedFilmGallery(parsedQueueFilms); //Рендер карточок для кнопки Watched
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
    return;
  }

  if (parsedQueueFilms.length === 0) {
    refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;
    refs.btnWatched.classList.remove('header-change__cont-btn--activ');
    refs.btnQueue.classList.add('header-change__cont-btn--activ');
  }
}

//Функція - рендер пустого екрана My Library
function markUpLibraryScreenTwo() {
  refs.gallery.innerHTML = `<p class="library-screen__text">The library is currently empty!</p>
        <img class="library-screen__image" src="${imgTree}" alt="Bear" />`;

  //додається функція Дмитра//
}


 */

