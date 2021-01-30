'use strict';
import trendFilmTemplate from '../templates/homePage.hbs';
const filmList = document.querySelector('.main_filmlist');
const api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'movie/popular?',
  pageNumber: 1,
  fetchTrendFilms() {
    const url =
      this.baseUrl +
      this.options +
      `api_key=${this.key}&language=en-US&page=${this.pageNumber}`;
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
};

function renderFilm(arr) {
  const markup = trendFilmTemplate(arr);

  filmList.insertAdjacentHTML('beforeEnd', markup);
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
