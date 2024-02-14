const burgerBtn = document.getElementById('menu-toggle');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-menu__link');

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_active');
    document.body.style = 'overflow: visible;'
    burgerBtn.checked = false;
  });
});

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.checked) {
    burgerMenu.classList.add('burger-menu_active');
    document.body.style = 'overflow: hidden;'
  }
  else {
    burgerMenu.classList.remove('burger-menu_active');
    document.body.style = 'overflow: visible;'
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: '20'
  });
})