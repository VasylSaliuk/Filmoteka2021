import refs from './refs';

console.log(refs.libraryPage);
refs.linkHomePage.classList.add('isActive');
refs.libraryPage.classList.add('hidden');

function activeHomePage() {
  refs.homePage.classList.remove('hidden');
  refs.libraryPage.classList.add('hidden');
  refs.linkHomePage.classList.add('isActive');
  refs.linkLibrary.classList.remove('isActive');
}

function activeLibraryPage() {
  refs.homePage.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.linkLibrary.classList.add('isActive');
  refs.linkHomePage.classList.remove('isActive');
}

refs.linkHomePage.addEventListener('click', activeHomePage);
refs.linkLibrary.addEventListener('click', activeLibraryPage);
refs.linkLogo.addEventListener('click', activeHomePage);

//  Плавний скролінг на верх домашньої сторінки при натисканні кнопки в футері
function scrollToHome() {
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

let scrollUpFooter = document.querySelector('.scroll-up');
scrollUpFooter.addEventListener('click', scrollToHome);

// const scrollUpId = document
//   .querySelector('.scroll-up')
//   .addEventListener('click', scrollToHome);

// =============================================================================
