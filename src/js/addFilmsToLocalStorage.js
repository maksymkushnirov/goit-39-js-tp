const addbuttons = document.querySelector('.modal-movie');
addbuttons.addEventListener('click', onAddButtonClick);

// const wanchedBtn = addbuttons.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
// console.log(wanchedBtn);

let watchedFilms = [];
let queueFilms = [];

function onAddButtonClick(e) {
  if (e.target.className === 'modal-button watched') {
    AddToWatched(e.target.parentNode.parentNode.firstElementChild.textContent);
  } else if (e.target.className === 'modal-button queue') {
    AddToQueue(e.target.parentNode.parentNode.firstElementChild.textContent);
  } else {
    return;
  }
}

function AddToWatched(filmName) {
  if (verifyFilmInLocalStorage(filmName, 'Watched')) {
    removeFilmFromLocalStorage(filmName, 'Watched');
  } else {
    watchedFilms.push(findFilmInLocalStorage(filmName));
    localStorage.setItem('Watched', JSON.stringify(watchedFilms));
  }
}

function AddToQueue(filmName) {
  if (verifyFilmInLocalStorage(filmName, 'Queue')) {
    removeFilmFromLocalStorage(filmName, 'Queue');
  } else {
    queueFilms.push(findFilmInLocalStorage(filmName));
    localStorage.setItem('Queue', JSON.stringify(queueFilms));
  }
}

function findFilmInLocalStorage(filmName) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem('films_from_beckend'));
    let filmToLocalStorage = {};
    filmsFromLocalStorage.map((film) => {
      let name = film.name || film.title;
      if (name.replace(/\s+/g, '') === filmName.replace(/\s+/g, '')) {
        filmToLocalStorage = film;
      }
    });
    return filmToLocalStorage;
  } catch {
    console.error();
  }
}

function removeFilmFromLocalStorage(filmName, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let filmToLocalStorage = [];

    for (let i = 0; i < filmsFromLocalStorage.length; i += 1) {
      let name = filmsFromLocalStorage[i].name || filmsFromLocalStorage[i].title;
      if (name.replace(/\s+/g, '') === filmName.replace(/\s+/g, '')) {
        filmsFromLocalStorage.splice(i, 1);
        filmToLocalStorage = filmsFromLocalStorage;
      }
    }

    localStorage.setItem(key, JSON.stringify(filmToLocalStorage));
  } catch {
    console.error();
  }
}

function verifyFilmInLocalStorage(filmName, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let value = false;
    filmsFromLocalStorage.map((film) => {
      let name = film.name || film.title;
      if (name.replace(/\s+/g, '') === filmName.replace(/\s+/g, '')) {
        value = true;
      }
    });
    return value;
  } catch {
    return false;
  }
}
