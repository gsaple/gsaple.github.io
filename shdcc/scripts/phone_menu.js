const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".phone-menu");
function showMenu() {
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

function updateIcon() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 480) {
    document.querySelector(".phone-menu").style.display = "none";
    const menuButton = document.getElementById("menu-button");
    menuButton.classList.remove("fa-window-close");
    menuButton.classList.add("fa-navicon");
  }
}
menuButton.addEventListener("click", () => {
  showMenu();
});

window.addEventListener("resize", () => {
  updateIcon();
});
