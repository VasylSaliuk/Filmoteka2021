import api from './1iniitalHomePage';
import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/cardFilmSlider.hbs';

import refs from './refs.js';



const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

api.renderTrendy().then(renderSliderFilms);

function renderSliderFilms(articles) {
  refs.sliderContainer.innerHTML = filmsCardSliderTpl(articles);

}
