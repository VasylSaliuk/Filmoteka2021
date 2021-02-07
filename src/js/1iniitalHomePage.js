'use strict';
import trendFilmTemplate from '../templates/homePage.hbs';
import refs from './refs.js';
import placeholder from './spinner.js';
import { myAlert } from './notification.js';
import {
  nextBtnHandler,
  prevBtnHandler,
  nextBtnHandlerSearch,
  prevBtnHandlerSearch,
} from './2searchAndPlaginationHomePage';
import trailer from './trailers.js';


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

  resetPage() {
    this.pageNumber = 1;
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
    console.log(this.newUrl);
  },

  decrementPage() {
    if (this.pageNumber === 1) return;
    this.pageNumber -= 1;

  },

  fetchMovieInfo(id) {
    const url = `${this.baseUrl}movie/${id}?api_key=${this.key}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          return Promise.reject();
        }
      })
      .then(data => data);
  },

  // fetchMovieCastInfo(id) {
  //   const url = `${this.baseUrl}movie/${id}/credits?api_key=${this.key}`;
  //   return fetch(url)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       else {
  //         return Promise.reject();
  //       }
  //     })
  //     .then(data => data);
  // },

  fetchSearchMovies() {
    const url = `${this.baseUrl}search/movie?api_key=${this.key}&language=en-US&page=${this.pageNumber}&query=${this.query}`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        // console.log(results);
        if (results.total_pages === 0) {
          homePageRender();
          myAlert();
        } else {
          refs.searchDescription.textContent = `We are found ${results.total_results} on request "${this.query}"`;
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
      // .catch(err => {
      //   refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
      // });
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
  placeholder.spinner.close();
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
}

export function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);

  refs.nextBtn.removeEventListener('click', nextBtnHandlerSearch);
  refs.prevBtn.removeEventListener('click', prevBtnHandlerSearch);
  refs.nextBtn.addEventListener('click', nextBtnHandler);
  refs.prevBtn.addEventListener('click', prevBtnHandler);
  placeholder.spinner.close();
}

function homePageReset() {
  api.resetPage(), homePageRender();
  refs.pageBtn.textContent = 1;
  refs.searchDescription.textContent = '';
  refs.prevBtn.classList.add('hidden');
}

function onSearchQuery(e) {
  refs.prevBtn.classList.add('hidden');
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

