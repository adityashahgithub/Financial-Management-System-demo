let previousScrollPosition = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > previousScrollPosition) {
    // Scrolling down
    navbar.style.top = '-60px'; // Hide the navbar (adjust based on your navbar height)
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

  previousScrollPosition = currentScrollPosition;
});
