import refs from './refs.js';
import searchAndPaginationHomePage from './2searchAndPlaginationHomePage.js';
import {
  nextBtnHandler,
  prevBtnHandler,
  nextHomeBtnHandler,
  prevHomeBtnHandler,
} from './pagination.js';
import { myAlert } from './notification.js';
import fetchTrendFilms from './1iniitalHomePage.js';

export let selectFilm = {
  id : 1,
};

// refs.linkHomePage.classList.add('isActive');
// refs.libraryPage.classList.add('hidden');

function cleanPopularPage() {
  refs.popularPage.innerHTML = '';
}

function cleanHomePage() {
  refs.moviesContainer.innerHTML = '';
}

function cleanDetailsPage() {
  refs.detailsPage.innerHTML = '';
}

function cleanLibraryPage() {
  refs.libraryPage.innerHTML = '';
}

function activeHomePage() {
  refs.homePage.classList.remove('hidden');
  refs.searchForm.classList.add('hidden');
  refs.btnContainer.classList.add('hidden');
  refs.nextBtn.classList.remove('hidden');
}



function createPopularMovieList() {
  activeHomePage();
  cleanHomePage();
  cleanPopularPage();
  cleanDetailsPage();
  refs.libBtnList.classList.add('hidden');
  refs.pageBtn.textContent = fetchTrendFilmsList.pageNumber;
  fetchTrendFilmsList.fetchTrendFilms().then(updateTrendMovieMarkUp);
  if (fetchTrendFilmsList.pageNumber !== 1) {
    refs.prevBtn.classList.remove('hidden');
  }
  if (fetchTrendFilmsList.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
  refs.nextHomeBtn.addEventListener('click', nextHomeBtnHandler);
  refs.prevHomeBtn.addEventListener('click', prevHomeBtnHandler);
  refs.nextBtn.removeEventListener('click', nextBtnHandler);
  refs.prevBtn.removeEventListener('click', prevBtnHandler);
 
};


function activeMainPage() {
  activeHomePage();
  cleanPopularPage();
  cleanHomePage();
  cleanDetailsPage();
 
  refs.libraryPage.classList.add('activeBtnHeader');
  refs.linkHomePage.classList.add('activeBtnHeader');
  refs.linkLibrary.classList.remove('hidden');
  if (!searchAndPaginationHomePage.inputValue) {
    return createPopularMovieList(), myAlert();
  };

  searchAndPaginationHomePage.fetchSearchMoviesList().then(updateMovieMarkUp);
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('hidden');
  }
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
  refs.nextBtn.removeEventListener('click', nextBtnHandler);
  refs.prevBtn.removeEventListener('click', prevBtnHandler);
  refs.nextHomeBtn.addEventListener('click', nextHomeBtnHandler);
  refs.prevHomeBtn.addEventListener('click', prevHomeBtnHandler);
}


function activeLibraryPage() {
  refs.homePage.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.linkLibrary.classList.add('isActive');
  refs.linkHomePage.classList.remove('isActive');
}


refs.linkHomePage.addEventListener('click', activeHomePage);
refs.linkLibrary.addEventListener('click', activeLibraryPage);
refs.linkLogo.addEventListener('click', activeHomePage);

//  Плавний скролінг на верх домашньої сторінки при натисканні кнопки в футері
function scrollToHome() {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

let scrollUpFooter = document.querySelector('.scroll-up');
scrollUpFooter.addEventListener('click', scrollToHome);

function updateMovieMarkUp(results) {
  const markUp = fetchMovieTpl(results); 
  refs.moviesContainer.insertAdjacentHTML('beforeend', markUp);
}
// =============================================================================

function updateTrendMovieMarkUp(results) {
  const markUp = fetchPopularMovieTpl(results); 
  refs.popularPage.insertAdjacentHTML('beforeend', markUp);
}

export default { createPopularMovieList, activeMainPage, activeLibraryPage };