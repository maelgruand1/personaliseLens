const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;

// Créez des indicateurs dynamiques
images.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.dataset.index = index; // Associe un index à chaque indicateur
  if (index === currentIndex) indicator.classList.add("active"); // Active le premier indicateur
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll(".indicators div");

// Fonction pour mettre à jour la position du carousel
function updateCarousel() {
  const imageWidth = images[0].clientWidth; // Largeur d'une image
  carouselImages.style.transform = `translateX(${
    -currentIndex * imageWidth
  }px)`; // Déplace le carousel

  // Met à jour les indicateurs
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}

// Bouton Précédent
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Va à l'image précédente ou boucle
  updateCarousel();
});

// Bouton Suivant
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Va à l'image suivante ou boucle
  updateCarousel();
});

// Cliquez sur les indicateurs
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.dataset.index); // Passe à l'image correspondante
    updateCarousel();
  });
});

// Rend le carousel responsive
window.addEventListener("resize", updateCarousel);
