import '../sass/main.scss';
import { instance } from "./team-members"

const refs = {
  developer: document.querySelector(".footer-link"),
  
};


refs.developer.addEventListener("click", () => {
    instance.show()
})
