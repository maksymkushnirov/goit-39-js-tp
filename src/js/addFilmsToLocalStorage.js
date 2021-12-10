
function addFilmInLocalStorage (film, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));////Думаю проблема тут
    let filmToLocalStorage = filmsFromLocalStorage.push(film);
    localStorage.setItem(key, JSON.stringify(filmToLocalStorage));
  } catch {
    localStorage.setItem(key, JSON.stringify(film));
    console.error();
  }
}

function removeFilmFromLocalStorage (filmId, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let filmToLocalStorage = [];

    for (let i = 0; i < filmsFromLocalStorage.length; i += 1) {
      if (Number(film.id) === Number(filmId)) {
        filmToLocalStorage = filmsFromLocalStorage.splice(i, 1);
      }
    }
    localStorage.setItem(key, JSON.stringify(filmToLocalStorage));
  } catch {
    console.error();
  }
}

function verifyFilmInLocalStorage(filmId, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let value = false;
    filmsFromLocalStorage.map((film) => {
      if (Number(film.id) === Number(filmId)) {
        value = true;
      }
    });
    return value;
  } catch {
    return false;
  }
}

export { addFilmInLocalStorage, removeFilmFromLocalStorage, verifyFilmInLocalStorage };