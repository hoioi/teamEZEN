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

/*modal coffee*/

const blackground = document.querySelector("#blackground");
const aroma_note = document.querySelector("#aromanote");
const decaf = document.querySelector("#decaf");
const modal_coffee = document.querySelector("#modal_coffee");
const Xicon01 = document.querySelector("#X_icon");

let coffees = document.querySelectorAll(".coffee");
let titleName = document.querySelector(".titleName");
let LogoName = document.querySelector(".LogoName");
let sub = document.querySelector(".sub");
let CountryText = document.querySelector(".CountryText");
let Rost = document.querySelector(".Rost");
let Rostcheck = document.querySelectorAll(".Rostcheck");
let image = document.querySelector(".modal01_img");
let modal01_imgMobile = document.querySelector(".modal01_imgMobile");

const check01 = document.querySelector("#check01");
const check02 = document.querySelector("#check02");
const check03 = document.querySelector("#check03");
const check04 = document.querySelector("#check04");
const check05 = document.querySelector("#check05");
const check06 = document.querySelector("#check06");
const check07 = document.querySelector("#check07");
const check08 = document.querySelector("#check08");
const check09 = document.querySelector("#check09");
const check10 = document.querySelector("#check10");

const url01 = "menu_info01.json";
fetch(url01)
  .then((info) => info.json())
  .then((info) => {
    const infoData01 = info;

    coffees.forEach((coffee, i) => {
      coffee.addEventListener("click", () => {
        modal_coffee.classList.add("block");

        const infoDataI = infoData01[i];
        const Rosttext = infoData01[i].Rosttext;

        for (let a = 0; a < Rostcheck.length; a++) {
          Rostcheck[a].innerHTML = Rosttext[a];
        }
        titleName.innerHTML = infoData01[i].titleName;
        LogoName.innerHTML = infoData01[i].LogoName;
        sub.innerHTML = infoData01[i].sub;
        CountryText.innerHTML = infoData01[i].CountryText;
        image.style.backgroundImage = `url(${infoData01[i].image})`;
        modal01_imgMobile.style.backgroundImage = `url(${infoData01[i].image_mobile})`;
      });
    });
  });

blackground.onclick = () => {
  check01.classList.add("red");
  check02.classList.add("red");
  check06.classList.add("red");
  check07.classList.add("red");
  check08.classList.add("red");
  check09.classList.add("red");
  check10.classList.add("red");
};

aroma_note.onclick = () => {
  check01.classList.add("red");
  check02.classList.add("red");
  check03.classList.add("red");
  check04.classList.add("red");
  check06.classList.add("red");
  check07.classList.add("red");
  check08.classList.add("red");
};

decaf.onclick = () => {
  check01.classList.add("red");
  check02.classList.add("red");
  check06.classList.add("red");
  check07.classList.add("red");
  check08.classList.add("red");
  check09.classList.add("red");
};

Xicon01.onclick = () => {
  modal_coffee.classList.remove("block");
};
/*modal drink*/

let drinks = document.querySelectorAll(".drink");
const modal_drink = document.querySelector("#modal_drink");
const Xicon = document.querySelector("#icon");
const modalWrap = document.querySelector(".modalWrap");

let modal_name = document.querySelector(".name");
let engname = document.querySelector(".engname");
let subtitle = document.querySelector(".subtitle");
let countrytext = document.querySelector(".countrytext");
let table = document.querySelectorAll(".table");
let img = document.querySelector(".modal02_img");
let imgMobile = document.querySelector(".modal02_imgMobile");

const url02 = "menu_info02.json";
fetch(url02)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    drinks.forEach((drink, i) => {
      drink.addEventListener("click", () => {
        modal_drink.classList.add("block");

        const infoDataII = infoData[i];
        const nutrition = infoData[i].nutrition;

        for (let a = 0; a < table.length; a++) {
          table[a].innerHTML = nutrition[a];
        }
        modal_name.innerHTML = infoData[i].name;
        engname.innerHTML = infoData[i].engname;
        subtitle.innerHTML = infoData[i].subtitle;
        countrytext.innerHTML = infoData[i].country;
        img.style.backgroundImage = `url(${infoData[i].imge})`;
        imgMobile.style.backgroundImage = `url(${infoData[i].imgeMobile})`;
      });
    });
  });

Xicon.onclick = () => {
  modal_drink.classList.remove("block");
};
