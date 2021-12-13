import modalMovieCard from '../templates/modal-oneMoovie.hbs';
import {
  addFilmInLocalStorage,
  removeFilmFromLocalStorage,
  verifyFilmInLocalStorage
} from './addFilmsToLocalStorage.js'; //Імпорт функцій для роботи з кнопками

const close = document.querySelector('.modal-close-icon');
const modalWindow = document.querySelector('.modal-movie-template');
const galery = document.querySelector('.gallery');
const modalBackdrop = document.querySelector('.backdrop');
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'fe9ed89434aaae0a5431bf6fa09118e9';

// ============================================================================

galery.addEventListener('click', (e) => {
  // const id = e.target.getAttribute('data-id');
  e.preventDefault();
  getIdMovie(e);
});
// ==========================================================================
// доббавление слушателя по открытию модалки,
// удаление по закрытию - close Х
const options = {
  once: true
};
function closeBtn() {
  close.addEventListener('click', closeModal, options);
}
// ==========================================================================
// доббавление слушателя по открытию модалки,
// удаление по закрытию close по escape
function closeModalEsc() {
  window.addEventListener(
    'keydown',
    (e) => {
      const condition = e.code === 'Escape';
      if (condition) {
        closeModal();
      }
    },
    options
  );
}
// ===========================================================================
//доббавление слушателя по открытию модалки,
// удаление по закрытию -close по бекдропу
function closeBackdropClick() {
  modalBackdrop.addEventListener(
    'click',
    (e) => {
      const condition = e.target.classList.contains('backdrop');
      if (condition) {
        closeModal();
      }
    },
    options
  );
}
// ============================================================================
function getIdMovie(e) {
  console.log(e.target.className);
  const condition = e.target.className.includes('modalBtn');
  console.log(condition);
  if (condition) {
    const id = e.target.getAttribute('data-id');
    openModal(id);
  }
}
// =====================================================================================================================================
fetchMovieModal();

async function fetchMovieModal() {
  const data = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
// открытие модалки===отрисовка контента в модалку===апи запрос 1-го элемента по id
async function openModal(id) {
  modalBackdrop.classList.remove('is-hidden');

  const infoMovie = await fetch(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });

  closeBtn();
  closeModalEsc();
  closeBackdropClick();
  // ========================================
  galery.removeEventListener('click', (e) => {
    e.preventDefault();
    getIdMovie(e);
  });
  // ============================================
  modalWindow.innerHTML = modalMovieCard(infoMovie);

  /////////////////////////////////////
  //////Робота з кнопками
  /////////////////////////////////////
  // console.log("=====", infoMovie);
  // console.log("=====", id);
  const addToWatchedBtn = document.querySelector('.watched');
  const addToQueueBtn = document.querySelector('.queue');

  if (verifyFilmInLocalStorage(id, 'Watched') === true) {
    addToWatchedBtn.textContent = 'remove from watched';
  }

  if (verifyFilmInLocalStorage(id, 'Queue') === true) {
    addToQueueBtn.textContent = 'remove from queue';
  }

  addToWatchedBtn.addEventListener('click', onAddToWadchedBtnClick);
  addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);

  function onAddToWadchedBtnClick(e) {
    if (verifyFilmInLocalStorage(id, 'Watched') === true) {
      removeFilmFromLocalStorage(id, 'Watched');
      addToWatchedBtn.textContent = 'add to watched';
    } else {
      addFilmInLocalStorage(infoMovie, 'Watched');
      addToWatchedBtn.textContent = 'remove from watched';
    }
  }

  function onAddToQueueBtnClick(e) {
    if (verifyFilmInLocalStorage(id, 'Queue') === true) {
      removeFilmFromLocalStorage(id, 'Queue');
      addToQueueBtn.textContent = 'add to queue';
    } else {
      addFilmInLocalStorage(infoMovie, 'Queue');
      addToQueueBtn.textContent = 'remove from queue';
    }
  }

  /////////////////////////////////////////
  /////////////////////////////////////////
}

//  закрытие модалки=== зачистка src
function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  modalWindow.innerHTML = ' ';
  //location.href = './index.html';////На всякий випадок))))))
}
