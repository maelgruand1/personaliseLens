const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

// Create indicators
images.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.dataset.index = index;
  if (index === currentIndex) indicator.classList.add('active');
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicators div');

// Update carousel position
function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

  // Update indicators
  indicators.forEach((indicator) => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

// Previous button logic
prevButton.add