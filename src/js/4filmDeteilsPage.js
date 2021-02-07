import './1iniitalHomePage.js';
import api from './1iniitalHomePage.js';
import filmCard from '../templates/filmCard.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { reloadLibraryPage } from './5libraryPage';
import refs from './refs.js';

refs.sliderImg.addEventListener('click', onClickFilm);
refs.filmItem.addEventListener('click', onClickFilm);

export function onClickFilm(e) {
  console.dir(e.target)
  


  if (e.target.nodeName !== 'IMG') return;
  const filmId = e.target.id;

  
  api.fetchMovieInfo(filmId).then(data => {
    let selectFilm = data;
    
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

    const btnWatchedAdd = document.querySelector('.js-btnWatchedAdd');
    const btnQueueAdd = document.querySelector('.js-btnQueueAdd');
    monitorButtonStatusText();
    btnQueueAdd.addEventListener('click', controlQueue);
    btnWatchedAdd.addEventListener('click', controlWatched);
    function controlQueue() {
      
      let filmsQueueArr = [];
      //   localStorage.setItem('filmsQueue', JSON.stringify(filmsQueueArr));
      let localStorageData = localStorage.getItem('filmsQueue');
      if (localStorageData !== null) {
        filmsQueueArr.push(...JSON.parse(localStorageData));
      }
      if (filmsQueueArr.find(el => el.id === selectFilm.id)) {
        filmsQueueArr = filmsQueueArr.filter(el => el.id !== selectFilm.id);
      } else {
        filmsQueueArr.push(selectFilm);
      }
      localStorage.setItem('filmsQueue', JSON.stringify(filmsQueueArr));
      monitorButtonStatusText();
      reloadLibraryPage();
    }

    function controlWatched() {
      
      let filmsWatchedArr = [];
      let localStorageData = localStorage.getItem('filmsWatched');
      if (localStorageData !== null) {
        filmsWatchedArr.push(...JSON.parse(localStorageData));
      }
      if (filmsWatchedArr.find(el => el.id === selectFilm.id)) {
        filmsWatchedArr = filmsWatchedArr.filter(el => el.id !== selectFilm.id);
      } else {
        filmsWatchedArr.push(selectFilm);
      }
      localStorage.setItem('filmsWatched', JSON.stringify(filmsWatchedArr));
      monitorButtonStatusText();
      reloadLibraryPage();
    }

    function monitorButtonStatusText() {
      let btnQueueText = document.querySelector('.details-span-queue');
      let btnWatchedText = document.querySelector('.details-span-watched');
      let btnCastText = document.querySelector('.details-span-cast');
      let btnReviewsText = document.querySelector('.details-span-reviews');
      let btnQueueSvg = document.querySelector('.details-icon-queue');
      let btnWatchedSvg = document.querySelector('.details-icon-watched');
      let btnCastSvg = document.querySelector('.details-icon-cast');
      let btnReviewsSvg = document.querySelector('.details-icon-reviews');

      btnCastSvg.textContent = 'groups';
      btnCastText.textContent = 'Cast and crew';
      btnReviewsSvg.textContent = 'auto_stories';
      btnReviewsText.textContent = 'Reviews';

      let filmsQueueArr = [];
      let localStorageData = localStorage.getItem('filmsQueue');
      if (localStorageData !== null) {
        filmsQueueArr.push(...JSON.parse(localStorageData));
      }
      if (filmsQueueArr.find(el => el.id === selectFilm.id)) {
        btnQueueSvg.textContent = 'delete';
        btnQueueText.textContent = 'Remove queue';
      } else {
        btnQueueSvg.textContent = 'add_to_queue';
        btnQueueText.textContent = 'Add to queue';
      }

      let filmsWatchedArr = [];
      localStorageData = localStorage.getItem('filmsWatched');
      if (localStorageData !== null) {
        filmsWatchedArr.push(...JSON.parse(localStorageData));
      }
      if (filmsWatchedArr.find(el => el.id === selectFilm.id)) {
        btnWatchedSvg.textContent = 'delete';
        btnWatchedText.textContent = 'Remove watched';
      } else {
        btnWatchedSvg.textContent = 'videocam';
        btnWatchedText.textContent = 'Add to watched';
      }
    }
  });
}
