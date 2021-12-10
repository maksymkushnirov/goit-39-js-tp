const gallery = document.querySelector('.card-list');

export function markUpPopularFilmGallery(films) {
  const markUp = films
    .map((film) => {
      const { title, name, genre_ids, vote_average, release_date, first_air_date, poster_path, backdrop_path } = film;
       
      if (!name && !title) {
        return
      }

      let filmYear;
      let filmName = "";
      release_date !== undefined ? filmYear = release_date : filmYear = first_air_date;
      title !== undefined ? filmName = title : filmName = name;

      if (!release_date && !first_air_date) {
        filmYear = "";
      }
      return `<li class="card-item modalBtn" data-id="${film.id}" >
        <a class="link modalBtn" href="#" data-id="${film.id}" >
        <div class=""><img class="card-image modalBtn" data-id="${film.id}" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster-film"></div>
        <h2 class="card-title modalBtn" data-id="${film.id}">${filmName.toUpperCase()}</h2>
          <div class="card-description-container modalBtn" data-id="${film.id}">
            <p class="card-description modalBtn" data-id="${film.id}">${genre_ids.join(', ')} | ${filmYear.slice(0, 4)}</p>
          </div>
      </a>
    </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markUp);
}
