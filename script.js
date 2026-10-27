const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

const setMenuOpen = (isOpen) => {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  navigation?.classList.toggle('is-open', isOpen);
};

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
