const lists = document.querySelectorAll(".menu_slide_item");
const xbtn = document.querySelector(".xbtn .close");
const modal = document.querySelector(".modal");
const background = document.querySelector("section");
// foodinfo
const foodTitle = document.querySelector(".foodtxt_title");
const foodSubtitle = document.querySelector(".foodtxt_subtitle");
const foodDesc = document.querySelector(".foodtxt_desc");
const allergy = document.querySelector(".foodtxt_allergy_desc");
const foodImage = document.querySelector(".modal_img");
const foodInfoTable = document.querySelector(".foodinfo_table");
const tableDiv = foodInfoTable.querySelectorAll("div");

// slider image change
let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".menu_img");
  pic.style.background = `url(./deli_img/img_p_delimenu${
    i + 1
  }.jpg) no-repeat center center/cover`;
  i++;
}

//json import
const url = "menu_info.json";
fetch(url)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;
    lists.forEach((img, i) => {
      img.addEventListener("click", () => {
        modal.classList.add("on");
        const infoDataI = infoData[i];
        const nutrition = infoData[i].nutrition;

        for (let c = 0; c < tableDiv.length; c++) {
          if (c % 2 === 1) {
            tableDiv[c].innerHTML = nutrition[Math.floor(c / 2)];
          }
        }

        foodTitle.innerHTML = infoDataI.name;
        foodSubtitle.innerHTML = infoDataI.engname;
        foodDesc.innerHTML = infoDataI.description;
        allergy.innerHTML = infoDataI.allergy;

        foodImage.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infoDataI.image;
        foodImage.appendChild(imgElement);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

//xbtn remove on
xbtn.addEventListener("click", () => {
  modal.classList.remove("on");
  background.style.filter = "";
});

// /*header*/
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

// /*sticky*/
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

// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    100: {
      slidesPerView: 1, //브라우저가 100보다 클 때
    },
    750: {
      slidesPerView: 3, //브라우저가 750보다 클 때
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 4, //브라우저가 990보다 클 때
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5, //브라우저가 1200보다 클 때
      spaceBetween: 20,
    },
  },
});
