import api from './1iniitalHomePage';
import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/cardFilmSlider.hbs';
import trailer from './trailers.js';
import refs from './refs.js';
import {onClickSlider} from './4filmDeteilsPage'


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
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
}

// controlModal( refs.sliderImg, refs.filmItem)