// Header 투명 모드
const headerBox = document.querySelector('.header');
const headerHeight = headerBox.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    headerBox.classList.add('header--inverted');
  } else {
    headerBox.classList.remove('header--inverted');
  }
});
