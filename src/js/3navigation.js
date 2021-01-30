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
