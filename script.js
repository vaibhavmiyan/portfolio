// Toggle navbar for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Highlight active section
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < offset + height) {
      current = id;
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
