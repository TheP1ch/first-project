"use strict";
const slides = document.querySelectorAll(".slide");
function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

for (let slide of slides) {
  slide.addEventListener("click", function () {
    removeActive();

    slide.classList.add("active");
  });
}
