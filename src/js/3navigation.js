import refs from './refs.js';
// import searchAndPaginationHomePage from './2searchAndPlaginationHomePage.js';
// import {
//   nextBtnHandler,
//   prevBtnHandler,
//   nextHomeBtnHandler,
//   prevHomeBtnHandler,
// } from './2searchAndPlaginationHomePage.js';
// import { myAlert } from './notification';
import { onQueueBtnClick } from './5libraryPage';
import { onClickFilm } from './4filmDeteilsPage';
// console.log(refs.libraryPage);

// import searchAndPaginationHomePage from './2searchAndPlaginationHomePage';
// import { nextBtnHandler, prevBtnHandler, nextHomeBtnHandler, prevHomeBtnHandler } from './2searchAndPlaginationHomePage.js';
// import { myAlert } from './notification'
// console.log(refs.libraryPage);

export let selectFilm = {
  id : 1,
};

function activeHomePage() {
  refs.homePage.classList.remove('hidden');
  refs.libraryPage.classList.add('hidden');
  refs.linkHomePage.classList.add('isActive');
  refs.linkLibrary.classList.remove('isActive');
  refs.searchFormWrap.classList.remove('hidden');
}

function activeLibraryPage() {
  localStorage.setItem('curentPage', 'queuePage');
  refs.homePage.classList.add('hidden');
  refs.searchFormWrap.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.linkLibrary.classList.add('isActive');
  refs.linkHomePage.classList.remove('isActive');
  refs.queueBtnLib.classList.add('onClick');
  onQueueBtnClick();
  refs.libraryFilmList.addEventListener('click', onClickFilm);
}

refs.linkHomePage.addEventListener('click', activeHomePage);
refs.linkLibrary.addEventListener('click', activeLibraryPage);
refs.linkLogo.addEventListener('click', activeHomePage);

function scrollToHome() {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

let scrollUpFooter = document.querySelector('.scroll-up');
scrollUpFooter.addEventListener('click', scrollToHome);


// let selectFilm;
// function activeHomePage1() {
//   localStorage.setItem('curentPage', 'homePage');
//   refs.searchFormWrap.classList.remove('hidden');
//   refs.homePage.classList.remove('hidden');
//   refs.libraryPage.classList.add('hidden');
//   refs.linkHomePage.classList.add('isActive');
//   refs.linkLibrary.classList.remove('isActive');
//   if (!searchAndPaginationHomePage.inputValue) {
//     return createPopularMovieList(), myAlert();
//   }
//   searchAndPaginationHomePage.fetchSearchMoviesList().then(updateMovieMarkUp);
//   refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
//   if (searchAndPaginationHomePage.pageNumber !== 1) {
//     refs.prevBtn.classList.remove('is-hidden');
//   }
//   if (searchAndPaginationHomePage.pageNumber === 1) {
//     refs.prevBtn.classList.add('is-hidden');
//   }

//   function cleanPopularPage() {
//     refs.popularPage.innerHTML = '';
//   }

//   function cleanHomePage() {
//     refs.moviesContainer.innerHTML = '';
//   }

//   function cleanDetailsPage() {
//     refs.detailsPage.innerHTML = '';
//   }

//   function cleanLibraryPage() {
//     refs.libraryPage.innerHTML = '';
//   }


// // let selectFilm;
// // function activeHomePage1() {
// //   refs.homePage.classList.remove('hidden');
// //   refs.libraryPage.classList.add('hidden');
// //   if (!searchAndPaginationHomePage.inputValue) {
// //     return createPopularMovieList(),
// //     myAlert();
// //   };
// //   searchAndPaginationHomePage.fetchSearchMoviesList()
// //     .then(updateMovieMarkUp)
// //   refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
// //   if (searchAndPaginationHomePage.pageNumber !== 1) {
// //     refs.prevBtn.classList.remove('is-hidden');
// //   };
// //   if (searchAndPaginationHomePage.pageNumber === 1) {
// //     refs.prevBtn.classList.add('is-hidden');
// //   };

//   // function cleanPopularPage() {
//   //   refs.popularPage.innerHTML = '';
//   // }
  
//   // function cleanHomePage() {
//   //   refs.moviesContainer.innerHTML = '';
//   // }
  
//   // function cleanDetailsPage() {
//   //   refs.detailsPage.innerHTML = '';
//   // }
  
//   // function cleanLibraryPage() {
//   //   refs.libraryPage.innerHTML = '';
//   // }
  
//   function activeMainPage() {
//     refs.homePage.classList.remove('is-hidden');
//     refs.searchForm.classList.remove('is-hidden');
//     refs.btnContainer.classList.remove('is-hidden');
//     refs.nextBtn.classList.remove('is-hidden');
//   }
// }

// function createPopularMovieList() {
//   activeMainPage();
//   cleanHomePage();
//   cleanPopularPage();
//   cleanDetailsPage();
//   refs.libBtnList.classList.add('is-hidden');
//   refs.pageBtn.textContent = fetchPopularMoviesList.pageNumber;
//   fetchPopularMoviesList.fetchTrendFilms().then(updatePopularMovieMarkUp);
//   if (fetchPopularMoviesList.pageNumber !== 1) {
//     refs.prevBtn.classList.remove('is-hidden');
//   }
//   if (fetchPopularMoviesList.pageNumber === 1) {
//     refs.prevBtn.classList.add('is-hidden');
//   }
//   refs.nextBtn.removeEventListener('click', nextBtnHandler);
//   refs.prevBtn.removeEventListener('click', prevBtnHandler);
//   refs.nextHomeBtn.addEventListener('click', nextHomeBtnHandler);
//   refs.prevHomeBtn.addEventListener('click', prevHomeBtnHandler);
// }


// pagination.addEventListener('click', plagNavigation);
// form.addEventListener('submit', searchFilms);

// }
//   function createPopularMovieList() {
//     activeMainPage();
//     cleanHomePage();
//     cleanPopularPage();
//     cleanDetailsPage();
//     refs.libBtnList.classList.add('is-hidden');
//     refs.pageBtn.textContent = fetchPopularMoviesList.pageNumber;
//     fetchPopularMoviesList.fetchTrendFilms()
//       .then(updatePopularMovieMarkUp);
//     if (fetchPopularMoviesList.pageNumber !== 1) {
//       refs.prevBtn.classList.remove('is-hidden')
//     };
//     if (fetchPopularMoviesList.pageNumber === 1) {
//       refs.prevBtn.classList.add('is-hidden')
//     };
//   refs.nextBtn.removeEventListener('click', nextBtnHandler);
//   refs.prevBtn.removeEventListener('click', prevBtnHandler);
//   refs.nextHomeBtn.addEventListener('click', nextHomeBtnHandler);
//   refs.prevHomeBtn.addEventListener('click', prevHomeBtnHandler);
// };

  // pagination.removeEventListener('click', plagNavigation);
  // pageNumber = 1;
  // resetPlagination();
  // fetchTrendFilms(pageNumber);

  // pagination.addEventListener('click', plagNavigation);
  // form.addEventListener('submit', searchFilms);
//}


//  Плавний скролінг на верх домашньої сторінки при натисканні кнопки в футері

function updateMovieMarkUp(results) {
  const markUp = fetchMovieTpl(results); 
  refs.moviesContainer.insertAdjacentHTML('beforeend', markUp);
}
// =============================================================================
// export default {createPopularMovieList, activeHomePage, activeLibraryPage}
