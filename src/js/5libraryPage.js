import api from './1iniitalHomePage';
import refs from './refs';
import filmTemplate from '../templates/homePage.hbs';
// console.log(api);

refs.queueBtnLib.addEventListener('click', onQueueBtnClick);
refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);

export function onQueueBtnClick() {
  const QUEUE_ARRAY = JSON.parse(localStorage.getItem('filmsQueue'));
  clearFilmList();
  localStorage.setItem('curentPage', 'queuePage');
  refs.queueBtnLib.classList.add('onClick');
  refs.watchedBtnLib.classList.remove('onClick');
  if (QUEUE_ARRAY === null || QUEUE_ARRAY.length === 0) {
    refs.libraryFilmList.innerHTML = '<li>There is nothing in the QUEUE list.</li>';
  }

  appendFilmsMarkup(QUEUE_ARRAY);
}

function onWatchedBtnClick() {
  const WATCHED_ARRAY = JSON.parse(localStorage.getItem('filmsWatched'));
  clearFilmList();
  localStorage.setItem('curentPage', 'watchedPage');
  refs.queueBtnLib.classList.remove('onClick');
  refs.watchedBtnLib.classList.add('onClick');
  if (WATCHED_ARRAY === null || WATCHED_ARRAY.length === 0) {
    refs.libraryFilmList.innerHTML = '<li>There is nothing in the WATCHED list.</li>';
  }

  appendFilmsMarkup(WATCHED_ARRAY);
}

function appendFilmsMarkup(renderArr) {
  refs.libraryFilmList.insertAdjacentHTML('afterbegin', filmTemplate(renderArr));
}

function clearFilmList() {
  refs.libraryFilmList.innerHTML = '';
}

export function reloadLibraryPage() {
  if (localStorage.getItem('curentPage') === 'watchedPage') {
    onWatchedBtnClick();
  }
  if (localStorage.getItem('curentPage') === 'queuePage') {
    onQueueBtnClick();
  }
}
