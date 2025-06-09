document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', function() {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);

      // Icon change (+/-)
      const icon = btn.querySelector('.faq-icon');
      if (icon) icon.textContent = expanded ? '+' : '−';

      // Toggle answer visibility
      const answer = btn.parentElement.querySelector('.faq-answer');
      if (answer) {
        if (expanded) {
          answer.hidden = true;
        } else {
          answer.hidden = false;
        }
      }
    });
  });
});
