const menuButton = document.getElementById("menu-button");
function showMenu() {
  const menu = document.querySelector(".phone-menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    menuButton.classList.remove("fa-window-close");
    menuButton.classList.add("fa-navicon");
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.justifyContent = "space-around";
    menuButton.classList.remove("fa-navicon");
    menuButton.classList.add("fa-window-close");
  }
}
menuButton.addEventListener("click", () => {
  showMenu();
});
