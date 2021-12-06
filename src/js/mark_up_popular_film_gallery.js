const gallery = document.querySelector(".card-list");

export function markUpPopularFilmGallery(films) {

  const markUp = films.map(film => {
    const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;

    return `<li class="card-item">
        <a class="link" href="#">
        <div class=""><img class="card-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
        <h2 class="card-title">${title.toUpperCase() || name.toUpperCase()}</h2>
          <div class="card-description-container">
            <p class="card-description">${genre_ids.join(", ")} | ${release_date.slice(0, 4) || first_air_date.slice(0, 4)}</p>
          </div>
      </a>
    </li>`;
  }).join("");

  gallery.insertAdjacentHTML("beforeend", markUp)
};