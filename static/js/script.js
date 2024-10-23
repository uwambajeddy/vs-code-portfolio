const menuButton = document.querySelector('.menu');
const dropDown = document.querySelector('.show-menu');

// a function for the menu button
menuButton.addEventListener("click", () => {
  if (dropDown.style.display === "flex") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "flex";
  }
});