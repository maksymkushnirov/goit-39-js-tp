import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import tarasroboteckyi from '../images/team/tarasroboteckyi.jpg';
import maksymKushnirov from '../images/team/maksymkushnirov.jpg';
import alonabulatkina from '../images/team/alonaBulatkina.jpg';
import aleksandryakovenko from '../images/team/aleksandryakovenko.jpg';
import dmitriydudnik from '../images/team/dmitriydudnik.jpg';
import yaroslavonofriichuk from '../images/team/YaroslavOnofriichuk.jpg';
import romanbroshnitskiy from '../images/team/roman_broshnitskiy.jpg';
import olegkolodiy from '../images/team/oleg_kolodiy.jpg';
import ritabosak from '../images/team/ritabosak.jpg';

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
                <a href="https://github.com/maksymkushnirov" class="modal-team-list__link link" target="blank" rel="noopener noreferrer"> 
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${maksymKushnirov}" alt="Maksym Kushnirov">
                  </div>

                  <h3 class="contentBx__title">Maksym Kushnirov</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/valentynadymova" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${tarasroboteckyi}" alt="valentynadymova">
                  </div>
                    <h3 class="contentBx__title">Valentyna Dymova</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/rita-bosak" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${ritabosak}" alt="marharytabosak">
                  </div>
                    <h3 class="contentBx__title">Marharyta Bosak</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/Alona-Bulatkina" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${alonabulatkina}" alt="alonabulatkina">
                  </div>
                    <h3 class="contentBx__title">Alona Bulatkina</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/AleksandrYakovenko1984" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${aleksandryakovenko}" alt="aleksandryakovenko">
                  </div>
                    <h3 class="contentBx__title">Aleksandr Yakovenko</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/Wed88" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${dmitriydudnik}" alt="dmitriydudnik">
                  </div>
                    <h3 class="contentBx__title">Dmitriy Dudnik</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/YaroslavOnofriichuk" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                <div class="modal-team_img">
                    <img class="team-member-photo" src="${yaroslavonofriichuk}" alt="yaroslavyonofriichuk">
                  </div>
                    <h3 class="contentBx__title">Yaroslav Onofriichuk</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/Taras-Roboteckyi" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${tarasroboteckyi}" alt="tarasroboteckyi">
                  </div>
                    <h3 class="contentBx__title">Taras Roboteckyi</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/Broshnitskiy" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${romanbroshnitskiy}" alt="romanbroshnitskiy">
                  </div>
                    <h3 class="contentBx__title">Roman Broshnitskiy</h3>
                </a>
              </li>
              <li class="modal-team-list__item">
                <a href="https://github.com/oleg634996" class="modal-team-list__link link" target="blank" rel="noopener noreferrer">
                  <div class="modal-team_img">
                    <img class="team-member-photo" src="${olegkolodiy}" alt="olegkolodiy">
                  </div>
                    <h3 class="contentBx__title">Oleg Kolodiy</h3>
                </a>
              </li>
            <button class="modal__close" type="button">Close</button>
          </ul>
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
