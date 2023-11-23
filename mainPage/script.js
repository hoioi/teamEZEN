new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

/*header*/
const trigger = document.querySelector(".trigger");
const dropmenu = document.querySelector(".dropmenu");
const white = document.querySelector(".logo > a > .white");
const black = document.querySelector(".logo > a > .black");
const body = document.querySelector("body");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  console.log("scroll!");
});

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

// main slider
var slide = new Swiper(".main_swiper", {
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

let currentNumber = 1;

const changeText = () => {
  document.querySelector(".changetext").textContent = currentNumber;
};

const next = () => {
  currentNumber = (currentNumber % 2) + 1;
  changeText();
};

const prev = () => {
  currentNumber = ((currentNumber - 2 + 2) % 2) + 1;
  changeText();
};

document.querySelector(".main_next").addEventListener("click", next);
document.querySelector(".main_prev").addEventListener("click", prev);

changeText();

//brand slider

let swipe = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// notice slider
let swiper = new Swiper(".notice-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoHeight: true,
  simulateTouch: true,
  slidesPerView: 1,
});
