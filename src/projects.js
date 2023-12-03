'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const allImages = document.querySelectorAll('.project');
  const filterButtons = document.querySelectorAll('.category');
  const projects = document.querySelector('.projects');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      projects.classList.add('anim-out');
      filterButtons.forEach((btn) => {
        btn.classList.remove('category--selected');
      });
      button.classList.add('category--selected');
      const category = button.getAttribute('data-category');
      allImages.forEach((image) => {
        if (image.dataset.category !== category) {
          if (category === 'all') {
            image.classList.remove('deactive');
          } else {
            image.classList.add('deactive');
          }
        } else {
          image.classList.remove('deactive');
        }
      });
      setTimeout(() => {
        projects.classList.remove('anim-out');
      }, 250);
    });
  });
});
