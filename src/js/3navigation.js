import refs from './refs';

console.log(refs.libraryPage);

function activeLibraryPage() {
  refs.homePage.classList.add('hidden');
  refs.libraryPage.classList.remove('hidden');
}

function activeHomePage() {
  refs.homePage.classList.remove('hidden');
  refs.libraryPage.classList.add('hidden');
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