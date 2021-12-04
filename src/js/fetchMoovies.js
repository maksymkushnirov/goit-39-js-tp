// import cardMoovieModal from "../templates/modal-one-moovie.hbs"
const modal = document.querySelector('.modal-moovie')
modal.addEventListener('click', fetchMoovieModal() )

function fetchMoovieModal() {
fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=fe9ed89434aaae0a5431bf6fa09118e9`).then(showCard)

    }

function showCard({ poster_path, title, vote_average, vote_count, popularity, original_title, genre_ids, overview }) {
   modal.innerHTML = `<div class="img-container">
<div> <img src="${poster_path}" alt="{{}}"></div>

<div class="moovie-info">
    <p class="title">${title}</p>

<table class="table">

  <tr>
    <td>Vote / Votes</td>
    <td>${vote_average} / ${vote_count}</td>
    </tr>

  <tr>
    <td>Popularity</td>
<td>${popularity}</td>
   </tr>

<tr>
    <td>Original Title</td>
    <td>${original_title}</td>
    </tr>

<tr>
    <td>Genre</td>
    <td>${genre_ids}</td>
</tr>
</table>

<p class="reviews"> about${overview}</p>

<div class="buttons">
    <button>add to Watched</button>
    <button>add to queue</button>
</div>

</div>
</div>`
     }