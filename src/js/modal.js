import modalMovieCard from '../templates/modal-oneMoovie.hbs'; // шаблон модального окна

import {
  addFilmInLocalStorage,
  removeFilmFromLocalStorage,
  verifyFilmInLocalStorage
} from './addFilmsToLocalStorage.js'; //Імпорт функцій для роботи з кнопками
/*  import {
  onBtnWatchedInMyLibrary,
  onBtnQueueInMyLibrary,
  markUpLibraryScreen,
  } from './onclick-my_library' */
import {
  onBtnWatchedInMyLibraryRender,
  onBtnQueueInMyLibraryRender
} from './get-queue'; //Імпорт функцій для роботи з кнопками в модалці

const refs = {
  searchForm: document.querySelector('.search-form') //Пошук форми з інпутом в Header
};

const close = document.querySelector('.modal-close-icon');
const modalWindow = document.querySelector('.modal-movie-template');
const galery = document.querySelector('.gallery');
const modalBackdrop = document.querySelector('.backdrop');
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'fe9ed89434aaae0a5431bf6fa09118e9';

// ============================================================================

galery.addEventListener('click', (e) => {
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

function closeBackdropClick() {
  modalBackdrop.addEventListener('click', (e) => {
    const condition = e.target.classList.contains('backdrop');
    if (condition) {
      closeModal();
    }
  });
}
// ============================================================================
function getIdMovie(e) {
  //console.log(e.target.className);
  const condition = e.target.className.includes('modalBtn'); // условие клика на элемент с классом modalBtn
  //console.log(condition);
  if (condition) {
    const id = e.target.getAttribute('data-id'); // при выполнении условия берется значение id элемента на котором произошел клик
    openModal(id);
  }
}

// открытие модалки===отрисовка контента в модалку===апи запрос 1-го элемента по id
async function openModal(id) {
  modalBackdrop.classList.remove('is-hidden'); // открытие модалки
  document.body.style.overflow = 'hidden'; // забирає скролл сторінки за мадалкою

  // фетч запрос, обработка, запись результата в переменную

  const infoMovie = await fetch(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
  // ф-ции вешающие и удаляющие слушатели на закрытие
  // ===============================================================
  closeBtn();
  closeModalEsc();
  closeBackdropClick();
  // ========================================
  galery.removeEventListener('click', (e) => {
    e.preventDefault();
    getIdMovie(e);
  }); // удаление слушателя с галереи по открытию модалки

  // ============================================
  modalWindow.innerHTML = modalMovieCard(infoMovie); // отрисовка шаблона карточки в модалке

  /////////////////////////////////////
  //////Робота з кнопками
  /////////////////////////////////////
  // console.log("=====", infoMovie);
  // console.log("=====", id);

  const addToWatchedBtn = document.querySelector(
    'button[data-action="add-to-watched"]'
  );
  const addToQueueBtn = document.querySelector(
    'button[data-action="add-to-queue"]'
  );

  if (verifyFilmInLocalStorage(id, 'Watched') === true) {
    addToWatchedBtn.textContent = 'remove from watched';
    addToWatchedBtn.classList.replace(
      'add-to-library',
      'add-to-library--active'
    );
  }

  if (verifyFilmInLocalStorage(id, 'Queue') === true) {
    addToQueueBtn.textContent = 'remove from queue';
    addToQueueBtn.classList.replace('add-to-library', 'add-to-library--active');
  }

  /* if (refs.searchForm.classList.contains('visually-hidden') === true) {
    onBtnWatchedInMyLibrary();
    onBtnQueueInMyLibrary();
  }
   */
  addToWatchedBtn.addEventListener('click', onAddToWadchedBtnClick);
  addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);

  function onAddToWadchedBtnClick(e) {
    if (verifyFilmInLocalStorage(id, 'Watched') === true) {
      removeFilmFromLocalStorage(id, 'Watched');
      addToWatchedBtn.textContent = 'add to watched';
      addToWatchedBtn.classList.replace(
        'add-to-library--active',
        'add-to-library'
      );
    } else {
      addFilmInLocalStorage(infoMovie, 'Watched');
      addToWatchedBtn.textContent = 'remove from watched';
      addToWatchedBtn.classList.replace(
        'add-to-library',
        'add-to-library--active'
      );
    }
    if (refs.searchForm.classList.contains('visually-hidden') === true) {
      onBtnWatchedInMyLibraryRender();
    }
  }

  function onAddToQueueBtnClick(e) {
    if (verifyFilmInLocalStorage(id, 'Queue') === true) {
      removeFilmFromLocalStorage(id, 'Queue');
      addToQueueBtn.textContent = 'add to queue';
      addToQueueBtn.classList.replace(
        'add-to-library--active',
        'add-to-library'
      );
    } else {
      addFilmInLocalStorage(infoMovie, 'Queue');
      addToQueueBtn.textContent = 'remove from queue';
      addToQueueBtn.classList.replace(
        'add-to-library',
        'add-to-library--active'
      );
    }
    if (refs.searchForm.classList.contains('visually-hidden') === true) {
      onBtnQueueInMyLibraryRender();
    }
  }

  /////////////////////////////////////////
  /////////////////////////////////////////
}

//  закрытие модалки=== зачистка src
function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  modalWindow.innerHTML = ' '; // зачистка src
  document.body.style.overflow = 'initial'; // для відновлення скролу головної сторінки
  //location.href = './index.html';////На всякий випадок))))))
}
