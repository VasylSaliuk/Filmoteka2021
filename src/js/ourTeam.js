import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import vasylUrl from '../images/vasyl.jpg';
import mariaUrl from '../images/maria.jpg';
import romanUrl from '../images/roman.jpg';
import vladymyrUrl from '../images/vladymyr.jpg';
import katyaUrl from '../images/katya.png';
import annaUrl from '../images/anna.jpg';
import linkedinUrl from '../images/linkedin.svg';

const markup =`<div class="team-wrapper">
    <div class="team-card">
    <img src="${vasylUrl}" alt="Vasyl" class="team-image">
    <p class="team-name">Vasyl</p>
    <p class="team-role">Team Lead</p>
    <a href="https://www.linkedin.com/in/vasyl-saliuk-255b05169" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${mariaUrl}" alt="Maria" class="team-image">
    <p class="team-name">Maria</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://www.linkedin.com/in/mariia-randarevich-030b0a137" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
    <div class="team-card">
    <img src="${romanUrl}" alt="Roman" class="team-image">
    <p class="team-name">Roman</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/roman-larionov-385ab692" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
    <div class="team-card">
    <img src="${katyaUrl}" alt="Katya" class="team-image">
    <p class="team-name">Katya</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
    <div class="team-card">
    <img src="${vladymyrUrl}" alt="Vladymyr" class="team-image">
    <p class="team-name">Vladymyr</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
    <div class="team-card">
    <img src="${annaUrl}" alt="Anna" class="team-image">
    <p class="team-name">Anna</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/anna-reznik-92a455200" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
</div>`;
const container = document.querySelector('.js-team-modal');
const markup2 = `<img src="${vasylUrl}"/>`;

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}