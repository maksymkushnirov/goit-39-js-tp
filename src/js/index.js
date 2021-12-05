import '../sass/main.scss';
import { instance } from "./team-members"
import onClickBtnLibrary from './onclick-my_library';

const refs = {
  developer: document.querySelector(".footer-link"),
  
};


refs.developer.addEventListener("click", () => {
    instance.show()
})
onClickBtnLibrary()//Функція виконується при нажиманні на кнопку My Library