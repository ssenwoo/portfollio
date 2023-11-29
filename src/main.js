// 스크롤시 Header 불투명 mode 전환

const headerBox = document.querySelector('.header');
const headerHeight = headerBox.getBoundingClientRect().height;

headerBox.classList.remove('header--inverted');

document.addEventListener('scroll', () => {
  if (window.scrollY < headerHeight) {
    headerBox.classList.remove('header--inverted');
  } else {
    headerBox.classList.add('header--inverted');
  }
});

// 스크롤시 Home 화면 투명 mode 전환
const homeBox = document.querySelector('.home__Box');
const homeHeight = homeBox.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const homeOpacity = 1 - window.scrollY / homeHeight;
  homeBox.style.opacity = homeOpacity;
});
