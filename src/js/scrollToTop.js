// const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// const rootElement = document.documentElement;

// export function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }
// scrollToTopBtn.addEventListener('click', scrollToTop);

const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add('showBtn');
  } else {
    // Hide button
    scrollToTopBtn.classList.remove('showBtn');
  }
}

export function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);
