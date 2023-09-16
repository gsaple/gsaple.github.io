const blocks = document.querySelectorAll(".move");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("transform");
      /* observer.unobserve(entry.target); */
    } else {
      entry.target.classList.remove("transform");
    }
  });
}, observerOptions);

blocks.forEach((block) => {
  observer.observe(block);
});
