document.addEventListener("DOMContentLoaded", () => {
  const overlayLeft = document.getElementById("overlay-left");
  const overlayRight = document.getElementById("overlay-right");

  // Fonction pour changer la couleur des verres
  function changeGlassColor(color) {
    overlayLeft.style.backgroundColor = `rgba(${color}, 0.5)`; // Légère transparence
    overlayRight.style.backgroundColor = `rgba(${color}, 0.5)`; // Légère transparence
  }

  // Fonction pour changer la forme des lunettes
  function changeGlassShape(shape) {
    const gafas = document.getElementById("gafas");
    gafas.classList.remove("square", "round", "aviator"); // Retirer les classes existantes
    gafas.classList.add(shape); // Ajouter la classe correspondante
  }

  // Changement de couleur des verres
  document.getElementById("change-color-red").addEventListener("click", () => {
    changeGlassColor("255, 0, 0"); // Rouge
  });

  document.getElementById("change-color-blue").addEventListener("click", () => {
    changeGlassColor("0, 0, 255"); // Bleu
  });

  document
    .getElementById("change-color-green")
    .addEventListener("click", () => {
      changeGlassColor("0, 255, 0"); // Vert
    });

  // Changement de forme des lunettes
  document
    .getElementById("change-shape-square")
    .addEventListener("click", () => {
      changeGlassShape("square");
    });

  document
    .getElementById("change-shape-round")
    .addEventListener("click", () => {
      changeGlassShape("round");
    });

  document
    .getElementById("change-shape-aviator")
    .addEventListener("click", () => {
      changeGlassShape("aviator");
    });
});
