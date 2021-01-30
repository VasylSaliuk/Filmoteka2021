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
