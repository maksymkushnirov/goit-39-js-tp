import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"

export const instance = basicLightbox.create(`
    <div class="modal modal--design">
        <h1 class="modal__team-head">Developed by:</h1>
        <ul class="modal-team-list">
            <li class="modal-team-list__item">- Maksym Kushnirov</li>
            <li class="modal-team-list__item">- Valentyna Dymova</li>
            <li class="modal-team-list__item">- Rita Bosak</li>
            <li class="modal-team-list__item">- Alona Bulatkina</li>
            <li class="modal-team-list__item">- Alexandr Jakovenko</li>
            <li class="modal-team-list__item">- Dmitriy Dudnik</li>
            <li class="modal-team-list__item">- Yaroslav Onofriichuk</li>
            <li class="modal-team-list__item">- Taras Roboteckyi</li>
            <li class="modal-team-list__item">- Roman Broshnitskiy</li>
            <li class="modal-team-list__item">- Oleg Kolodiy</li>
        </ul>
        <a class="modal__close">Close</a>
    </div>`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close;
        window.addEventListener("keydown", onEscKeydown);
    },
    onClose: () => window.removeEventListener("keydown", onEscKeydown)
});


function onEscKeydown(event) {
    if (event.code === "Escape") {
        instance.close();
    }
}