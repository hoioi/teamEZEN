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

let slide;

function initializeSwiper() {
  if (!slide) {
    slide = new Swiper(".swiper", {
      slidesPerView: "5",
      spaceBetween: 5,
      loop: false,
      pagination: true,
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

function destroySwiper() {
  if (slide) {
    slide.destroy();
    slide = undefined;
  }
}


initializeSwiper();


window.addEventListener("load", function () { 
  manageSwiper();
});



window.addEventListener("resize", function () { 
  manageSwiper();
});


function manageSwiper() { 

  window.innerWidth > 900 ? initializeSwiper() : destroySwiper();
}


let modalpic = document.querySelector(".modalpic");
let modalwordtop = document.querySelector(".modalword_top > h1");
let modalsubtitle = document.querySelector(".modalword_top > span");
let modaldesc = document.querySelector(".modalword_top > p");
let modalallergy = document.querySelector(".modalword_top > h4");
let tsd = document.querySelectorAll("#tsd4");
let modal = document.querySelector(".modal");
let closemodal = document.querySelector(".closemodal");

let table = document.querySelectorAll(".table");
const url = "menu_info.json";
fetch(url)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    tsd.forEach((img, i) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";

        const infoDataI = infoData[i];
        const nutrition = infoData[i].nutrition;

        for (let a = 0; a < table.length; a++) {
          table[a].innerHTML = nutrition[a];
        }

        modalwordtop.innerHTML = infoData[i].name;
        modalsubtitle.innerHTML = infoData[i].engname;
        modaldesc.innerHTML = infoData[i].description;
        modalallergy.innerHTML = infoData[i].allergy;

        modalpic.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infoData[i].image;
        modalpic.appendChild(imgElement);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });


closemodal.addEventListener("click", () => {
  modal.style.display = "none";
});
