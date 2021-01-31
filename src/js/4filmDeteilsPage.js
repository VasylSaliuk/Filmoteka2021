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
    let selectFilm = data;
    // console.log(selectFilm)
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

    const btnWatchedAdd = document.querySelector('.js-btnWatchedAdd');
    const btnQueueAdd = document.querySelector('.js-btnQueueAdd');
    monitorButtonStatusText();
    btnQueueAdd.addEventListener('click', controlQueue);
    btnWatchedAdd.addEventListener('click', controlWatched);
    
    function controlQueue() {
      console.log('+');
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
    }

    function controlWatched() {
      console.log('+');
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
    }
    function monitorButtonStatusText() {
      let filmsQueueArr = [];
      let localStorageData = localStorage.getItem('filmsQueue');
      if (localStorageData !== null) {
        filmsQueueArr.push(...JSON.parse(localStorageData));
      }
      if (filmsQueueArr.find(el => el.id === selectFilm.id)) {
        btnQueueAdd.textContent = 'Remove queue';
      } else {
        btnQueueAdd.textContent = 'Add to queue';
      }
      let filmsWatchedArr = [];
      localStorageData = localStorage.getItem('filmsWatched');
      if (localStorageData !== null) {
        filmsWatchedArr.push(...JSON.parse(localStorageData));
      }
      if (filmsWatchedArr.find(el => el.id === selectFilm.id)) {
        btnWatchedAdd.textContent = 'Remove watched';
      } else {
        btnWatchedAdd.textContent = 'Add to watched';
      }
    }


  });}

  