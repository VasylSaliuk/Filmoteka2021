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
};
console.log(api.fetchTrendFilms());
function renderFilm(arr) {
  const markup = trendFilmTemplate(arr);
  filmList.innerHTML= markup;
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
export default api;

const searchForm=document.querySelector('.search-form')
searchForm.addEventListener('submit', onSearchQuery)

function onSearchQuery(e){
  e.preventDefault();
  let queryValue=e.target.elements.query.value;
  if (queryValue === '') {
    return;
  }
  filmList.innerHTML = '';
  console.log(api.fetchSearchMovies(queryValue))
  api.fetchSearchMovies(queryValue).then(renderFilm)

}