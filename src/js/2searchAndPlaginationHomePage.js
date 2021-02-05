import refs from './refs.js';
import api from './1iniitalHomePage';
import placeholder from './spinner.js';

import { homePageRender, renderFilm } from './1iniitalHomePage.js';

export function nextBtnHandler() {
  api.incrementPage();
  homePageRender();
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  refs.prevBtn.classList.remove('hidden');
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

export function prevBtnHandler() {
  api.decrementPage();
  homePageRender();
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

export function nextBtnHandlerSearch() {
  api.incrementPage();
  api.fetchSearchMovies().then(renderFilm);
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  refs.prevBtn.classList.remove('hidden');
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

export function prevBtnHandlerSearch() {
  api.decrementPage();
  api.fetchSearchMovies().then(renderFilm);
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

