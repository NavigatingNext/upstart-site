
// Mobile nav + newsletter stub
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      alert("Thanks! We'll keep you posted at " + email + ".");
      form.reset();
    });
  }
});
