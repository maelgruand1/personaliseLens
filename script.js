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
// Ici, tu peux ajouter des fonctionnalités JavaScript pour rendre ta galerie plus interactive,
// comme un effet de zoom, un diaporama, ou une modal pour afficher les images en grand format.

// Par exemple, pour ajouter un effet de zoom basique :
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});