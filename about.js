const hamburger = document.querySelector('.bars');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));