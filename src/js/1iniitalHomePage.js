'use strict';
import trendFilmTemplate from '../templates/homePage.hbs';
import refs from './refs.js';

localStorage.setItem('curentPage', 'homePage');

const filmList = document.querySelector('.main_filmlist');
const api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'movie/popular?',
  pageNumber: 1,
  inputValue: '',

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
      .then(data => data.results);
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

  updateURL() {
    this.newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);
    return this.newUrl;
  },

  resetPage() {
    this.pageNumber = 1;
    this.updateURL();
    console.log(this.newUrl);
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

  fetchSearchMovies(query) {
    const url = `${this.baseUrl}search/movie?api_key=${this.key}&language=en-US&page=${this.pageNumber}&query=${query}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  },
  renderTrendy() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=0f42664b7f6700c34263c8262c49b65b`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      })
      
      .catch(err => {
        refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
      })
    },




};

document.addEventListener('DOMContentLoaded', homePageRender);
refs.linkLogo.addEventListener('click', homePageReset);
refs.homePage1.addEventListener('click', homePageReset);
refs.searchForm.addEventListener('submit', onSearchQuery);
refs.linkLogo.addEventListener('click', homePageReset);
refs.homePage1.addEventListener('click', homePageReset);

function renderFilm(arr) {
  const markup = trendFilmTemplate(arr);
  filmList.innerHTML = markup;
}

export function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}

function homePageReset() {
  api.resetPage(), homePageRender();
  refs.pageBtn.textContent = 1;
}

function onSearchQuery(e) {
  e.preventDefault();
  let queryValue = e.target.elements.query.value;
  if (queryValue === '') {
    return;
  }
  refs.pageBtn.textContent = 1;
  api.fetchSearchMovies(queryValue).then(renderFilm);
  refs.inputForm.value = '';
}

export default api;

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