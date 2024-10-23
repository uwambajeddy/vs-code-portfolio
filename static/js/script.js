const menuButton = document.querySelector('.menu');
const dropDown = document.querySelector('.show-menu');

menuButton.addEventListener("click", () => {
  if (dropDown.style.display === "flex") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "flex";
  }
});