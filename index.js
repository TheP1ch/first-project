"use strict";
const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

container.addEventListener("click", function (event) {
  removeActive();
  event.target.closest(".slide").classList.add("active");
});
