function addFilmInLocalStorage(film, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let filmToLocalStorage = [];
    if (filmsFromLocalStorage === null) {
      filmToLocalStorage = [film];
      localStorage.setItem(key, JSON.stringify(filmToLocalStorage));
    } else {
      filmToLocalStorage = [...filmsFromLocalStorage, film];
      localStorage.setItem(key, JSON.stringify(filmToLocalStorage));
    }
  } catch {
    localStorage.setItem(key, JSON.stringify(film));
    console.error();
  }
}

function removeFilmFromLocalStorage(filmId, key) {
  try {
    let filmsFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let filmToLocalStorage = filmsFromLocalStorage.filter(
      (film) => Number(film.id) !== Number(filmId)
    );
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

export {
  addFilmInLocalStorage,
  removeFilmFromLocalStorage,
  verifyFilmInLocalStorage
};
