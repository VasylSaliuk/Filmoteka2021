import './1iniitalHomePage.js';
import api from './1iniitalHomePage';
import filmCard from '../templates/filmCard.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const filmItem = document.querySelector('.main_filmlist');

filmItem.addEventListener('click', onClickFilm);

function onClickFilm(e) {
  console.dir(e.target.id);
  const filmId = e.target.id;
  console.log(api.fetchMovieInfo(filmId));
  api.fetchMovieInfo(filmId).then(data => {
    if (e.target.nodeName !== 'IMG') return;
    const cardTemplate = filmCard(data);
    const modal = basicLightbox.create(cardTemplate);
    modal.show();
    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', onClickBtnClose);
    window.addEventListener('keydown', closeModalHandler);

    function closeModalHandler(e) {
      if (e.code === 'Escape') {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }
    }
    function onClickBtnClose(e) {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
   




  });
}
