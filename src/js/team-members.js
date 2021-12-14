import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import tarasroboteckyi from '../images/team/tarasroboteckyi.png';

const refs = {
  developer: document.querySelector('.footer-link')
};

const instance = basicLightbox.create(
  `<div class="basicLightbox__placeholder" role="dialog">
    <div class="team-section">
      <div class="modal modal--design">
        <div class="team-section__container">
          <h1 class="modal__team-head">Developed by:</h1>
          <ul class="modal-team-list">
              <li class="modal-team-list__item">
              <a href="https://github.com/maksymkushnirov" class="modal-team-list__link link" target="blank" rel="noopener noreferrer"> Максим Кушниров
                <div class="modal-team-list_content>
                  <div class="modal-team_img">
                  <img class="team-member-photo" src="${tarasroboteckyi}" alt="Taras Roboteckyi">
                
                <h3 class="contentBx__title">Максим Кушниров</h3>
                </div>
              </a>
              </li>
              <li class="modal-team-list__item"><a href="https://github.com/valentynadymova" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Valentyna Dymova</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/rita-bosak" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Marharyta Bosak</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/Alona-Bulatkina" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Alona Bulatkina</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/AleksandrYakovenko1984" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Alexandr Jakovenko</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/Wed88" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Dmitriy Dudnik</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/YaroslavOnofriichuk" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Yaroslav Onofriichuk</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/Taras-Roboteckyi" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">Taras-Roboteckyi
                  <p class="list-section-team-item-description" lang="en">
                    Developer
                  </p><img class="team-member-photo" src="${tarasroboteckyi}" alt="Taras Roboteckyi"</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/Broshnitskiy" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Roman Broshnitskiy</a></li>
              <li class="modal-team-list__item"><a href="https://github.com/oleg634996" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">- Oleg Kolodiy</a></li>
          </ul>

          <a class="modal__close">Close</a>
          </div>
        </div>
        </div>
    </div>`,
  {
    onShow: (instance) => {
      instance.element().querySelector('.modal__close').onclick =
        instance.close;
      window.addEventListener('keydown', onEscKeydown);
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      window.removeEventListener('keydown', onEscKeydown);
      document.body.style.overflow = 'initial';
    }
  }
);

function onEscKeydown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

refs.developer.addEventListener('click', (e) => {
  e.preventDefault();
  instance.show();
});
