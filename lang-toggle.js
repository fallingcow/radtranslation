document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('lang-toggle');
  let currentLang = 'de';

  btn.addEventListener('click', function() {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    // Toggle all .lang-de and .lang-en elements
    document.querySelectorAll('.lang-de').forEach(el => {
      el.style.display = currentLang === 'de' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = currentLang === 'en' ? '' : 'none';
    });
    // Update html lang attribute for accessibility
    document.documentElement.lang = currentLang;
  });
});
