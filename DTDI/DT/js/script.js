/*header*/
const trigger = document.querySelector(".trigger");
const dropmenu = document.querySelector(".dropmenu");
const white = document.querySelector(".logo > a > .white");
const black = document.querySelector(".logo > a > .black");
const body = document.querySelector("body");
const header = document.querySelector("header");

trigger.addEventListener("click", (e) => {
  trigger.classList.toggle("active");
  dropmenu.classList.toggle("drop");

  if (dropmenu.classList.contains("drop")) {
    body.style.overflow = "hidden";
    setTimeout(() => {
      white.style.display = "block";
      black.style.display = "none";
    }, 300);
  } else if (
    header.classList.contains("sticky") &&
    !header.classList.contains("drop")
  ) {
    white.style.display = "block";
    black.style.display = "none";
    body.style.removeProperty("overflow");
  } else {
    white.style.display = "none";
    black.style.display = "block";
    body.style.removeProperty("overflow");
  }
});

/*sticky*/

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);

  if (header.classList.contains("sticky")) {
    white.style.display = "block";
    black.style.display = "none";
  } else {
    white.style.display = "none";
    black.style.display = "block";
  }
});


// slide
let slide = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  autoHeight: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 32,
});
