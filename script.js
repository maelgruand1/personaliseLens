//global variables
var pages = ["index.html", "mesLunettes.html"];
var redirect = "Redirection";
var redirectTo;

function redirectLunettes() {
  redirectTo = true;
  window.location.href = "mesLunettes.html";
}
function redirectPage1() {
  redirectTo = true;
  window.location.href = "modeleLunettes.html";
}
function returnAccueil() {
  redirectTo = true;
  window.location.href = "index.html";
}
