const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const images = [
  { path: "images/slides/1.png", caption: "Little Ones' Sanctuary" },
  { path: "images/slides/2.png", caption: "Heartland of Childhood" },
  { path: "images/slides/3.png", caption: "Creative Minds Grow" },
];

function showSlide(nextIndex) {
  if (nextIndex >= 3) {
    nextIndex = 0;
  }
  const slides = document.getElementById("slides-show");
  const { path, caption } = images[nextIndex];
  const alt = `slide ${nextIndex + 1}`;
  if (slides.children.length === 0) {
    const defaultImage = document.createElement("img");
    defaultImage.src = path;
    defaultImage.alt = alt;
    defaultImage.classList.add("border", "aspect-ratio");
    slides.appendChild(defaultImage);
    const defaultCaption = document.createElement("div");
    defaultCaption.textContent = caption;
    defaultCaption.classList.add("caption", "transition");
    slides.appendChild(defaultCaption);
  } else {
    if (currentIndex === nextIndex) return; /* click the same picture */
    currentIndex = nextIndex;
    const [currentImage] = slides.getElementsByTagName("img");
    const [currentCaption] = slides.getElementsByTagName("div");
    slides.style.opacity = 0;
    setTimeout(() => {
      currentImage.src = path;
      currentImage.alt = alt;
      currentCaption.textContent = caption;
      slides.style.opacity = 1;
    }, 300);
  }
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === nextIndex);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

showSlide(currentIndex);

setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
