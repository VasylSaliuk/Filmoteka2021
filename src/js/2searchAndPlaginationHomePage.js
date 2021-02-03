import refs from './refs.js';
import api from './1iniitalHomePage'

import  {homePageRender}  from './1iniitalHomePage';

refs.nextBtn.addEventListener('click', nextBtnHandler);
refs.prevBtn.addEventListener('click', prevBtnHandler);
// refs.prevHomeBtn.addEventListener('click', );
// refs.nextHomeBtn.addEventListener('click', );

function nextBtnHandler() {
  api.incrementPage();
  homePageRender();
  let counterValue = Number(refs.pageBtn.textContent);
  refs.pageBtn.textContent = counterValue + 1;
  refs.prevBtn.classList.remove('hidden');
  if (counterValue1 === 1) {  
    refs.prevBtn.classList.add('hidden');
  }
}

function prevBtnHandler() {
  api.decrementPage();
  homePageRender();
  let counterValue1 = Number(refs.pageBtn.textContent);
  
  if (counterValue1 === 1) {    
    api.resetPage();
    return;
  }
  if (counterValue1 ===2) {
    refs.prevBtn.classList.add('hidden');
  }
  if (counterValue1 > 1) {
    refs.pageBtn.textContent = counterValue1 - 1;
  }
}



// import navigationPages from '../js/3navigation.js';
// import { myError, notice } from './notification.js';

// import fetchTrendFilms from './1iniitalHomePage.js';
// const apiKey = '0758483bbf141f2377e75ad4723d5ab5';
// // const renderFilms = [];
// // const genres = [];
// //let pageNumber = 1;

// export default {
//     fetchSearchMoviesList() {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.inputValue}&page=${this.pageNumber}`;
  
//     return fetch(url)
//       .then(response => response.json())
//       .then(({ results, total_pages }) => {
//         if (total_pages === 1 || results > 1 && results <= 20) {
//           refs.nextBtn.classList.add('is-hidden');
//           notice({
//           text: 'That`s all what we can found',
//           delay: 1500,
//           });
//         }
//         if (total_pages === 0) {
//           refs.nextBtn.classList.add('is-hidden');
//           refs.pageBtn.textContent = total_pages;
//           notice({
//           text: 'No movies. Please, specify your query',
//           delay: 1500,
//           });
//         }
//         return results;
//       })
//     .catch(error => myError(error));
//     },
//     updateURL() {
//         this.newUrl = new URL(`http://localhost:4040/?query=${this.inputValue}&page=${this.pageNumber}`);
//       return this.newUrl;
//     },
    // resetPage() {
    //   this.pageNumber = 1;
    //   this.updateURL();
    //   console.log(this.newUrl);
    // },
    // incrementPage() {
    //   this.pageNumber += 1;
    //   this.updateURL();
    //   console.log(this.newUrl);
    // },
    // decrementPage() {
    //   if (this.pageNumber === 1) return;
    //   this.pageNumber -= 1;
    //   this.updateURL();
    //   console.log(this.newUrl);
    // },
    // get query() {
    //   return this.inputValue;
    // },
    // set query(newValue) {
    //   this.inputValue = newValue;
    // }
  // };


  // export function nextBtnHandler() {
  //   fetchPopularMoviesList.incrementPage();
  //   navigationPages.createPopularMovieList();
  // };
  
  // export function prevBtnHandler() {
  //   fetchPopularMoviesList.decrementPage();
  //   navigationPages.createPopularMovieList();
  // };

  // export function nextHomeBtnHandler() {
  //   searchAndPaginationHomePage.incrementPage();
  //   navigationPages.activeHomePage();
  // };
  
  // export function prevHomeBtnHandler() {
  //   searchAndPaginationHomePage.decrementPage();
  //   navigationPages.activeHomePage();
  // };


// const filmList = document.querySelector('.main_filmlist');

// const form = document.querySelector('#homePage__search');
// const input = document.querySelector('#homePage__search-input');

// const pagination = document.getElementById('homePage__pagination');
// const prevBtn = pagination.querySelector('[data-action = "prev"]');
// const nextBtn = pagination.querySelector('[data-action = "next"]');
// const pageValue = pagination.querySelector('.homePage__value');

// let inputValue = '';

// pageValue.textContent = pageNumber;

// const errorMessage = document.createElement('p');
// errorMessage.setAttribute('id', 'homePage__search-error-message');
// errorMessage.textContent = 'Сорян, кина не будет';
// errorMessage.hidden = true;

// form.append(errorMessage);

// function plagNavigation(e) {
//   const target = e.target;

//   if (pageNumber === 2) {
//     prevBtn.classList.add('hidden');
//   }

//   if (target === prevBtn) {
//     pageNumber -= 1;
//     pageValue.textContent = pageNumber;
//     if (inputValue === '') {
//       filmList.innerHTML = '';
//       fetchTrendFilms(pageNumber);
//     } else {
//       fetchFilms(inputValue, pageNumber);
//     }
//   }

//   if (target === nextBtn) {
//     pageNumber += 1;
//     pageValue.textContent = pageNumber;
//     prevBtn.classList.remove('hidden');

//     if (inputValue === '') {
//       filmList.innerHTML = '';
//       fetchTrendFilms(pageNumber);
//     } else {
//       fetchFilms(inputValue, pageNumber);
//     }
//   }
// }

// function searchFilms(e) {
//   pageNumber = 1;
//   e.preventDefault();
//   errorMessage.hidden = true;
//   inputValue = input.value;
//   if (inputValue === '') {
//     resetPlagination();
//     fetchTrendFilms(pageNumber);
//   } else {
//     resetPlagination();
//     fetchFilms(inputValue, pageNumber);
//   }
// }
// function hideErrorMesage() {
//   errorMessage.hidden = true;
// }

// function resetPlagination() {
//   filmList.innerHTML = '';
//   pageValue.textContent = pageNumber;
//   prevBtn.classList.add('hidden');
// }

// function fetchFilms(inputValue, pageNumber) {
//   if (inputValue === '') {
//     fetchTrendFilms();
//   }

//   const API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}&page=${pageNumber}&include_adult=false`;

//   fetch(API)
//     .then(response => response.json())
//     .then(data => {
//       const arr = data.results;
//       if (inputValue !== '' && arr.length === 0) {
//         errorMessage.hidden = false;
//         setTimeout(hideErrorMesage, 3000);
//         fetchTrendFilms(pageNumber);
//       }

//       filmList.innerHTML = '';

//       const listMarkup = document.createDocumentFragment();
//       arr.forEach(item => {
//         renderFilms.push(item);
//         listMarkup.appendChild(
//           addCardFunc(item.backdrop_path, item.title, item.id),
//         );
//       });

//       filmList.append(listMarkup);
//     })
//     .catch(error => console.log('ERROR' + error));

//   input.value = '';
// }
// refs.nextBtn.addEventListener('click',nextBtnHandler);
// refs.prevBtn.addEventListener('click',prevBtnHandler);
// refs.pageBtn

//  function nextBtnHandler() {
//  api.incrementPage();
//  homePageRender() 
//   refs.pageBtn.textContent+=1
// };

// export function prevBtnHandler() {
//   fetchPopularMoviesList.decrementPage();
//   navigationPages.createPopularMovieList();
// };

// export function nextHomeBtnHandler() {
//   searchAndPaginationHomePage.incrementPage();
//   navigationPages.activeHomePage();
// };

// export function prevHomeBtnHandler() {
//   searchAndPaginationHomePage.decrementPage();
//   navigationPages.activeHomePage();
// };