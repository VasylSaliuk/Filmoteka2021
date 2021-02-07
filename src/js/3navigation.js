import refs from './refs.js';

import { onQueueBtnClick, onWatchedBtnClick } from './5libraryPage';

import { onClickFilm } from './4filmDeteilsPage';

refs.linkHomePage.classList.add('isActive');
refs.libraryPage.classList.add('hidden');
refs.libBtnBox.classList.add('hidden');

function activeLibraryPage() {
  localStorage.setItem('curentPage', 'queuePage');
  refs.homePage.classList.add('hidden');
  refs.searchFormWrap.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.linkLibrary.classList.add('isActive');
  refs.linkHomePage.classList.remove('isActive');
  refs.queueBtnLib.classList.add('onClick');
  refs.libBtnBox.classList.remove('hidden');
  onQueueBtnClick();
  refs.libraryFilmList.addEventListener('click', onClickFilm);
  refs.queueBtnLib.addEventListener('click', onQueueBtnClick);
  refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);
}

function activeHomePage() {
  localStorage.setItem('curentPage', 'homePage');

  refs.libraryFilmList.removeEventListener('click', onClickFilm);
  refs.queueBtnLib.removeEventListener('click', onQueueBtnClick);
  refs.watchedBtnLib.removeEventListener('click', onWatchedBtnClick);

  refs.searchFormWrap.classList.remove('hidden');
  refs.homePage.classList.remove('hidden');
  refs.libraryPage.classList.add('hidden');
  refs.linkHomePage.classList.add('isActive');
  refs.linkLibrary.classList.remove('isActive');
  refs.libBtnBox.classList.add('hidden');
}
refs.linkHomePage.addEventListener('click', activeHomePage);
refs.linkLibrary.addEventListener('click', activeLibraryPage);
refs.linkLogo.addEventListener('click', activeHomePage);

// function scrollToHome() {
//   document.querySelector('#home').scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });
// }

// let scrollUpFooter = document.querySelector('.scroll-up');
// scrollUpFooter.addEventListener('click', scrollToHome);
const body = document.querySelector('body');
const switchTheme = document.querySelector('.textBtnThemeToggle');
switchTheme.addEventListener('click', changeTheme);

function changeTheme() {
  let localStorageCurentTheme = localStorage.getItem('curentTheme');
  if (localStorageCurentTheme == null) {
    localStorage.setItem('curentTheme', 'light');
    return;
  }
  if (localStorageCurentTheme === 'light') {
    localStorage.setItem('curentTheme', 'dark');
    switchTheme.textContent = 'dark_mode';
    body.classList.add('dark_theme');
    body.classList.remove('light_theme');
  }
  if (localStorageCurentTheme === 'dark') {
    localStorage.setItem('curentTheme', 'light');
    switchTheme.textContent = 'light_mode';
    body.classList.add('light_theme');
    body.classList.remove('dark_theme');
  }
}
