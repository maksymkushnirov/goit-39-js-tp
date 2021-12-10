
function addFilmInLocalStorage (film, key) {
  console.log("add");
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
  
function removeFilmFromLocalStorage (filmId, key) {
  console.log("remove");
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

