function updatePropertyBasedOnWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 480) {
    document.querySelector(".phone-menu").style.display = "none";
    const menuButton = document.getElementById("menu-button");
    menuButton.classList.remove("fa-window-close");
    menuButton.classList.add("fa-navicon");
  }
}

window.addEventListener("resize", updatePropertyBasedOnWidth);
updatePropertyBasedOnWidth();
