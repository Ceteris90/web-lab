
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-btn');
  const body = document.body;

  themeToggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  });
});

console.log("JS is connected! 🚀");
