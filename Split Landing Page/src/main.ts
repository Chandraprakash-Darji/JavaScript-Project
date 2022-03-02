const allSection = document.querySelectorAll(".section");
const main = document.querySelector("main");
const ps5 = document.querySelector(".ps5");
const xbox = document.querySelector(".xbox");

allSection?.forEach((section) => {
  section.addEventListener("mouseover", (e) => {
    if (e.target?.closest(".ps5") === ps5) {
      main.classList.add("activeLeft");
    }
    if (e.target?.closest(".xbox") === xbox) {
      main.classList.add("activeRight");
    }
  });
  section.addEventListener("mouseleave", (e) => {
    if (e.target?.closest(".ps5") === ps5) {
      main.classList.remove("activeLeft");
    }
    if (e.target?.closest(".xbox") === xbox) {
      main.classList.remove("activeRight");
    }
  });
});
