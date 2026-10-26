const languageToggle = document.getElementById('languageToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
let currentLanguage = 'en';

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-ha]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageToggle.textContent = language === 'en' ? 'Hausa' : 'English';
}
languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'ha' : 'en'));
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
