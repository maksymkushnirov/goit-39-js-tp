import './sass/main.scss';
import {instance} from "./js/team-members"

const studentsRef = document.querySelector("a")
studentsRef.addEventListener("click", () => {
    instance.show()
})
