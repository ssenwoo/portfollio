'use strict';

// 스크롤시 스크롤 메인 화면 주제 Header 아래 Border 표시
const option = {
  threshold: 0.8,
};
const observer = new IntersectionObserver(callback, option);
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.header__menu__item');
sections.forEach((section) => observer.observe(section));
function callback(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio > 0.8) {
      menuItems.forEach((item) => {
        if (`_${entry.target.id}` === item.id) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
}
