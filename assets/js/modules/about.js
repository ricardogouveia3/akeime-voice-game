var aboutButtom = document.getElementById("aboutButtom");

var closeDiv = document.getElementById("closeAbout");
var modalAbout = document.getElementById("modalAbout");

function openAbout() {
  closeDiv.style.display = "block";
  modalAbout.style.display = "block";
}

function closeAbout() {
  closeDiv.style.display = "none";
  modalAbout.style.display = "none"
}
