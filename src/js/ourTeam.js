import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import vasylUrl from '../images/vasyl1.jpg';
import mariaUrl from '../images/maria1.jpg';
import romanUrl from '../images/roman1.jpg';
import vladymyrUrl from '../images/vladymyr1.jpg';
import katyaUrl from '../images/katya1.jpg';
import annaUrl from '../images/anna1.jpg';
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
    <img src="${vladymyrUrl}" alt="Volodymyr" class="team-image">
    <p class="team-name">Volodymyr</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/volodymyr71" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
    <use href="${linkedinUrl}#linkedin"></use>
    </svg></a>
    </div>
    <div class="team-card">
    <img src="${katyaUrl}" alt="Kateryna" class="team-image">
    <p class="team-name">Kateryna</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/kateryna-kyrylenko-2a1426206" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
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

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModalHandler);

const modal = basicLightbox.create(markup);

function openModal(e) {
  

  e.preventDefault();
  modal.show();
}

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', closeModalHandler);
  }
  }

