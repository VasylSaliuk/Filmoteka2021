'use strict';

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
console.log(api.fetchTrendFilms());

function renderFilm(arr) {
  const markup = arr.map(
    ({ title, poster_path, vote_average, id, release_date }) => {
      return `<li class="filmlist__item">
   
   <img id="${id}" width='280' src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
   <h2>${title}</h2>||<span class="release_date">${release_date}</span>
   <span class="rate">${vote_average}</span>
   
   
</li>`;
    },
  );

  filmList.insertAdjacentHTML('beforeEnd', markup.join(''));
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
