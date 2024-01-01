// hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  nav.classList.toggle('hidden');
});

// nav scroll

window.onscroll = () => {
  const header = document.querySelector('header');
  const navfix = header.offsetTop;

  window.scrollY > navfix ? header.classList.add('navbarScroll') : header.classList.remove('navbarScroll');
};
