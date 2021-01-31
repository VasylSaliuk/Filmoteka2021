import refs from './refs';
import searchAndPaginationHomePage from './2searchAndPlaginationHomePage';
import { nextBtnHandler, prevBtnHandler, nextHomeBtnHandler, prevHomeBtnHandler } from './2searchAndPlaginationHomePage.js';
import { myAlert } from './notification';
console.log(refs.libraryPage);

refs.linkHomePage.classList.add('isActive');
refs.libraryPage.classList.add('hidden');

// function activeHomePage() {
//   refs.homePage.classList.remove('hidden');
//   refs.libraryPage.classList.add('hidden');
//   refs.linkHomePage.classList.add('isActive');
//   refs.linkLibrary.classList.remove('isActive');
// }

function activeLibraryPage() {
  refs.homePage.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.linkLibrary.classList.add('isActive');
  refs.linkHomePage.classList.remove('isActive');
}

let selectFilm;
function activeHomePage1() {
  refs.homePage.classList.remove('hidden');
  refs.libraryPage.classList.add('hidden');
  refs.linkHomePage.classList.add('isActive');
  refs.linkLibrary.classList.remove('isActive');
  if (!searchAndPaginationHomePage.inputValue) {
    return createPopularMovieList(),
    myAlert();
  };
  searchAndPaginationHomePage.fetchSearchMoviesList()
    .then(updateMovieMarkUp)
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden');
  };
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden');
  };

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
  
  function activeMainPage() {
    refs.homePage.classList.remove('is-hidden');
    refs.searchForm.classList.remove('is-hidden');
    refs.btnContainer.classList.remove('is-hidden');
    refs.nextBtn.classList.remove('is-hidden');
  }
}
  function createPopularMovieList() {
    activeMainPage();
    cleanHomePage();
    cleanPopularPage();
    cleanDetailsPage();
    refs.libBtnList.classList.add('is-hidden');
    refs.pageBtn.textContent = fetchPopularMoviesList.pageNumber;
    fetchPopularMoviesList.fetchTrendFilms()
      .then(updatePopularMovieMarkUp);
    if (fetchPopularMoviesList.pageNumber !== 1) {
      refs.prevBtn.classList.remove('is-hidden')
    };
    if (fetchPopularMoviesList.pageNumber === 1) {
      refs.prevBtn.classList.add('is-hidden')
    };
  refs.nextBtn.removeEventListener('click', nextBtnHandler);
  refs.prevBtn.removeEventListener('click', prevBtnHandler);
  refs.nextHomeBtn.addEventListener('click', nextHomeBtnHandler);
  refs.prevHomeBtn.addEventListener('click', prevHomeBtnHandler);
};

  // pagination.removeEventListener('click', plagNavigation);
  // pageNumber = 1;
  // resetPlagination();
  // fetchTrendFilms(pageNumber);

  // pagination.addEventListener('click', plagNavigation);
  // form.addEventListener('submit', searchFilms);
//}

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

// const scrollUpId = document
//   .querySelector('.scroll-up')
//   .addEventListener('click', scrollToHome);

// =============================================================================
export default {createPopularMovieList, activeHomePage, activeLibraryPage}