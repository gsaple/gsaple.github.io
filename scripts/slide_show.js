const slides = document.querySelectorAll(".slide-wrapper");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

function showSlide(clickedIndex) {
  if (clickedIndex >= slides.length) {
    slideIndex = 0;
    clickedIndex = 0;
  }
  slides.forEach((slide, i) => {
    slide.style.opacity = i === clickedIndex ? 1 : 0;
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === clickedIndex);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});
showSlide(slideIndex);

/* setInterval(() => {
  showSlide(++slideIndex);
}, 3000); */
