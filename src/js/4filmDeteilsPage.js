<<<<<<< HEAD
const btnWatchedAdd = document.querySelector('.js-btnWatchedAdd');
const btnQueueAdd = document.querySelector('.js-btnQueueAdd');

// console.log(btnQueue.textContent);

let selectFilm = {
  adult: false,
  backdrop_path: '/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
  genre_ids: (3)[(53, 28, 878)],
  id: 775996,
  original_language: 'en',
  original_title: 'Outside the Wire',
  overview:
    'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.',
  popularity: 3519.784,
  poster_path: '/e6SK2CAbO3ENy52UTzP3lv32peC.jpg',
  release_date: '2021-01-15',
  title: 'Outside the Wire',
  video: false,
  vote_average: 6.5,
  vote_count: 473,
};

// при визові функції фільм додається до черги, або видаляється з неї (як що вже є там)
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
}

monitorButtonStatusText();
btnQueueAdd.addEventListener('click', controlQueue);
btnWatchedAdd.addEventListener('click', controlWatched);

// функція контролю надписів на кнопках
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

//   let localStorageFilmsQueue = localStorage.getItem('filmsQueue');
//   addRemove(localStorageFilmsQueue, 'queue', addRemoveQueue);
//   // changeImgQueue();

//   let localStorageFilmsWatched = localStorage.getItem('filmsWatched');
//   addRemove(localStorageFilmsWatched, 'watched', addRemoveWatched);
// changeImgWatched();

// function addRemove(localStorageKey, textReplacement, selectorElem) {
//   localStorageKey === null
//     ? (selectorElem.textContent = `Add to ${textReplacement}`)
//     : JSON.parse(localStorageKey).find(el => el.id === selectFilm.id)
//     ? (selectorElem.textContent = `Delete from ${textReplacement}`)
//     : (selectorElem.textContent = `Add to ${textReplacement}`);
// }

// controlQueue(selectFilm);
=======
import './1iniitalHomePage.js'
import api from './1iniitalHomePage'
import filmCard from '../templates/filmCard.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const filmItem=document.querySelector('.main_filmlist')


filmItem.addEventListener('click', onClickFilm)
function onClickFilm(e){
console.dir(e.target.id)
const filmId=e.target.id;
console.log(api.fetchMovieInfo(filmId))
api.fetchMovieInfo(filmId).then(data=>{
    if (e.target.nodeName !== 'IMG') return;
const cardTemplate=filmCard(data)
const modal= basicLightbox.create(cardTemplate);
modal.show()

})

}
>>>>>>> f7a84796c8cb22e2768c45fbc2ea9a60f19cf043
