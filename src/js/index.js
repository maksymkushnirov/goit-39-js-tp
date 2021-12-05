import '../sass/main.scss';
import { instance } from "./team-members";
import { getPopularFilms } from "./services/fetch-popular-films";
import { getGenres } from "./services/fetch-genres";

getGenres()
  .then(value => {
    localStorage.setItem("genres", JSON.stringify(value));
    console.log(value)
  })
  .catch(error => console.log(error))
  
getPopularFilms(1)
  .then(value => console.log(value))
  .catch(error=>console.log(error))

const refs = {
  developer: document.querySelector(".footer-link"),
  
};


refs.developer.addEventListener("click", () => {
    instance.show()
})



