const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

export function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);
