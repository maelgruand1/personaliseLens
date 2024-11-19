//global variables
var pages = ["index.html", "mesLunettes.html"];
var redirect = "Redirection";
var redirectTo;

function redirectLunettes() {
  redirectTo = true;
  window.location.href = "mesLunettes.html";
}
function goPage() {
  redirectTo = true;
  window.location.href = "modeleLunettes.html";
}
function returnAccueil() {
  redirectTo = true;
  window.location.href = "index.html";
}

const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Make sure the carousel adjusts on window resize
window.addEventListener('resize', updateCarousel);
