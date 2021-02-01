import refs from './refs.js';
import api from './1iniitalHomePage'

import  {homePageRender}  from './1iniitalHomePage';

refs.nextBtn.addEventListener('click', nextBtnHandler);
refs.prevBtn.addEventListener('click', prevBtnHandler);

function nextBtnHandler() {
  api.incrementPage();
  homePageRender();
  let counterValue = Number(refs.pageBtn.textContent);
  refs.pageBtn.textContent = counterValue + 1;
}

function prevBtnHandler() {
  api.decrementPage();
  homePageRender();
  let counterValue1 = Number(refs.pageBtn.textContent);

  if (counterValue1 === 1) {
    api.resetPage();
    return;
  }
  if (counterValue1 > 1) {
    refs.pageBtn.textContent = counterValue1 - 1;
  }
}


// import refs from './refs.js';
// import { myError, notice } from './notification.js';

// const apiKey = '0758483bbf141f2377e75ad4723d5ab5';


// export default {
//     fetchSearchMoviesList() {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.inputValue}&page=${this.pageNumber}`;

//     return fetch(url)
//       .then(response => response.json())
//       .then(({ results, total_pages }) => {
//         if (total_pages === 1 || results > 1 && results <= 20) {
//           refs.nextBtn.classList.add('hidden');
//           notice({
//           text: 'That`s all what we can found',
//           delay: 1500,
//           });
//         }
//         if (total_pages === 0) {
//           refs.nextBtn.classList.add('hidden');
//           refs.pageBtn.textContent = total_pages;
//           notice({
//           text: 'No movies. Please, specify your query',
//           delay: 1500,
//           });
//         }
//         return results;
//       })
//       .catch(error => myError(error));
//     },
//     updateURL() {
//         this.newUrl = new URL(`http://localhost:4040/?query=${this.inputValue}&page=${this.pageNumber}`);
//       return this.newUrl;
//     },
//     resetPage() {
//       this.pageNumber = 1;
//       this.updateURL();
//       console.log(this.newUrl);
//     },
//     incrementPage() {
//       this.pageNumber += 1;
//       this.updateURL();
//       console.log(this.newUrl);
//     },
//     decrementPage() {
//       if (this.pageNumber === 1) return;
//       this.pageNumber -= 1;
//       this.updateURL();
//       console.log(this.newUrl);
//     },
//     get query() {
//       return this.inputValue;
//     },
//     set query(newValue) {
//       this.inputValue = newValue;
//     }
//   };


  
  
