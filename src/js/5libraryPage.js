import api from './1iniitalHomePage';
import refs from './refs';
import filmTemplate from '../templates/homePage.hbs';
console.log(api);

const WATCHED_ARRAY = JSON.parse(localStorage.getItem('filmsWatched'));
const QUEUE_ARRAY = JSON.parse(localStorage.getItem('filmsQueue'));

refs.queueBtnLib.addEventListener('click', onQueueBtnClick);
refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);

function onQueueBtnClick() {
  clearFilmList();
  refs.queueBtnLib.classList.add('onClick');
  refs.watchedBtnLib.classList.remove('onClick');
  if (QUEUE_ARRAY === null || QUEUE_ARRAY.length === 0) {
    refs.libraryFilmList.innerHTML =
      '<li>There is nothing in the QUEUE list.</li>';
  }

  appendFilmsMarkup(QUEUE_ARRAY);
}

function onWatchedBtnClick() {
  clearFilmList();
  refs.queueBtnLib.classList.remove('onClick');
  refs.watchedBtnLib.classList.add('onClick');
  if (WATCHED_ARRAY === null || WATCHED_ARRAY.length === 0) {
    refs.libraryFilmList.innerHTML =
      '<li>There is nothing in the WATCHED list.</li>';
  }

  appendFilmsMarkup(WATCHED_ARRAY);
}

function appendFilmsMarkup(renderArr) {
  refs.libraryFilmList.insertAdjacentHTML(
    'afterbegin',
    filmTemplate(renderArr),
  );
}

function clearFilmList() {
  refs.libraryFilmList.innerHTML = '';
}
