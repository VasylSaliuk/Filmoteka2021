import refs from './refs.js';
import api from './1iniitalHomePage';
import placeholder from './spinner.js';

import { homePageRender, renderFilm } from './1iniitalHomePage.js';

export function nextBtnHandler() {
  window.scrollTo({
    top: 0 ,
    behavior: 'smooth',
  });
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
  window.scrollTo({
    top: 0 ,
    behavior: 'smooth',
  });
  api.decrementPage();
  homePageRender();
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

export function nextBtnHandlerSearch() {
  window.scrollTo({
    top: 0 ,
    behavior: 'smooth',
  });
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
  window.scrollTo({
    top: 0 ,
    behavior: 'smooth',
  });
  api.decrementPage();
  api.fetchSearchMovies().then(renderFilm);
  placeholder.spinner.show();
  refs.pageBtn.textContent = api.pageNumber;
  if (api.pageNumber === 1) {
    refs.prevBtn.classList.add('hidden');
  }
}

