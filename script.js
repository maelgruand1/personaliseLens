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
// Fonction pour ouvrir la modal
function openModal(img) {
  // Obtenez l'image et la légende
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  // Affiche la modal
  document.getElementById("myModal").style.display = "block";
}

// Fonction pour fermer la modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
}

// Ajoute un événement click à chaque image pour ouvrir la modal
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    openModal(image);
  });
});