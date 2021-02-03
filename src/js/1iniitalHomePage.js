'use strict';
import trendFilmTemplate from '../templates/homePage.hbs';
import refs from './refs.js';
import { myAlert } from './notification';
import {
  nextBtnHandler,
  prevBtnHandler,
  nextBtnHandlerSearch,
  prevBtnHandlerSearch,
} from './2searchAndPlaginationHomePage';

localStorage.setItem('curentPage', 'homePage');

const filmList = document.querySelector('.main_filmlist');
const api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'movie/popular?',
  pageNumber: 1,
  inputValue: '',
  query: '',

  getQuery() {
    return this.query;
  },

  setQuery(newQuery) {
    this.query = newQuery;
  },

  fetchTrendFilms() {
    const url = this.baseUrl + this.options + `api_key=${this.key}&language=en-US&page=${this.pageNumber}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then(data => {
        return data.results;
      });
  },

  updateURL() {
    this.newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);
    return this.newUrl;
  },

  resetPage() {
    this.pageNumber = 1;
    this.updateURL();
    console.log(this.newUrl);
  },
  setPage(newpageNumber) {
    this.pageNumber = newpageNumber;
  },

  getPage() {
    return this.pageNumber;
  },

  incrementPage() {
    this.pageNumber += 1;
    this.updateURL();
    console.log(this.newUrl);
  },

  decrementPage() {
    if (this.pageNumber === 1) return;
    this.pageNumber -= 1;
    this.updateURL();
  },

  fetchMovieInfo(id) {
    const url = this.baseUrl + `movie/${id}?api_key=${this.key}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then(data => data);
  },

  fetchSearchMovies() {
    const url = `${this.baseUrl}search/movie?api_key=${this.key}&language=en-US&page=${this.pageNumber}&query=${this.query}`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        if (results.total_pages === 0) {
          homePageRender();
          myAlert();
        } else {
          refs.searchDescription.textContent = `We found ${results.total_results} on request "${this.query}"`;
        }
        return results.results;
      });
  },
  renderTrendy() {
    const url = `${this.baseUrl}trending/all/day?api_key=${this.key}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      })
      .catch(err => {
        refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
      });
  },
};
document.addEventListener('DOMContentLoaded', homePageRender);
refs.linkLogo.addEventListener('click', homePageReset);
refs.homePage1.addEventListener('click', homePageReset);
refs.searchForm.addEventListener('submit', onSearchQuery);
refs.linkLogo.addEventListener('click', homePageReset);
refs.homePage1.addEventListener('click', homePageReset);

export function renderFilm(arr) {
  const markup = trendFilmTemplate(arr);
  filmList.innerHTML = markup;
}

export function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
  refs.prevBtn.classList.add('hidden');
  refs.nextBtn.removeEventListener('click', nextBtnHandlerSearch);
  refs.prevBtn.removeEventListener('click', prevBtnHandlerSearch);
  refs.nextBtn.addEventListener('click', nextBtnHandler);
  refs.prevBtn.addEventListener('click', prevBtnHandler);
}

function homePageReset() {
  api.resetPage(), homePageRender();
  refs.pageBtn.textContent = 1;
  refs.searchDescription.textContent = '';
}

function onSearchQuery(e) {
  e.preventDefault();
  api.setQuery(e.target.elements.query.value);
  api.pageNumber = 1;
  refs.nextBtn.removeEventListener('click', nextBtnHandler);
  refs.prevBtn.removeEventListener('click', prevBtnHandler);
  refs.nextBtn.addEventListener('click', nextBtnHandlerSearch);
  refs.prevBtn.addEventListener('click', prevBtnHandlerSearch);
  if (api.query === '' || api.query === ' ' || api.query === null) {
    api.resetPage();
    refs.searchDescription.textContent = '';
    return myAlert();
  }
  refs.pageBtn.textContent = 1;
  api.fetchSearchMovies().then(renderFilm);
  refs.inputForm.value = '';
  refs.searchDescription.textContent = '';
}
export default api;

// function nextBtnHandlerSearch(e){
//   console.log('кнопка поиска', e)
//   api.incrementPage();

//   refs.pageBtn.textContent = api.pageNumber;
//   refs.prevBtn.classList.remove('hidden');
//   if (api.pageNumber === 1) {
//     refs.prevBtn.classList.add('hidden');
//   }
// }

// function prevBtnHandlerSearch(){

// }

//         // refs.prevBtn.addEventListener('click', prevBtnHandlerSearch);
//         refs.nextBtn.addEventListener('click', nextBtnHandlerSearch)
// function nextBtnHandlerSearch(){
//   api.incrementPage();
//   api.getPage();
//   api.setPage();
//   onSearchQuery()

// }

//  drawModalForTrailler(id) {

//   const url = `${this.baseUrl}movie/${id}/videos?api_key=${this.key}&language=en-US`;
//  return fetch(url)
//     .then(response => response.json())}

// function addCardFunc(imgPath, filmTitle, movieId) {
//   const fragment = document.createDocumentFragment();

//   const listItemRef = document.createElement('li');
//   listItemRef.classList.add('movie-list__item');
//   listItemRef.addEventListener('click', () => {
//     activeDetailsPage(movieId, false);
//   });

//   const linkRef = document.createElement('a');
//   linkRef.classList.add('movie-list__link');
//   linkRef.href = '#';

//   const imgRef = document.createElement('img');
//   imgRef.classList.add('movie-list__image');
//   imgRef.src = `https://image.tmdb.org/t/p/original${imgPath}`;
//   if (imgPath === null) imgRef.src = './images/No_image.jpg';
//   imgRef.alt = filmTitle;

//   const textRef = document.createElement('p');
//   textRef.classList.add('movie-list__text');
//   textRef.textContent = filmTitle;

//   listItemRef.appendChild(linkRef);
//   linkRef.appendChild(imgRef);
//   linkRef.appendChild(textRef);
//   fragment.appendChild(listItemRef);

//   return fragment;
//   // создаёт li согласно макета и вешает на неё слушателем функцию ActiveDetailsPage(movieId, itsLibraryFilm = false)
// }

// Очистка локалсторедж по ключу Watched
// let filmsQueueArr = [];
//       localStorage.setItem('filmsWatched', JSON.stringify(filmsQueueArr));
