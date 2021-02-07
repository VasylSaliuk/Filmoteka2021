import refs from './refs.js';
checkPreloader();

function checkPreloader() {
  if (sessionStorage.preload) {
    refs.firstPage.remove();
  } else {
    deletePreloader();
  }
}

function deletePreloader() {
  setTimeout(() => {
    refs.firstPage.remove();
    sessionStorage.setItem('preload', 'done');
  }, 7000);
}
