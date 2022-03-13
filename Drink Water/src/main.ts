const remainingWater = document.querySelector(".remaining") as HTMLElement;
const drinked = document.querySelector(".drinked") as HTMLElement;

const allGlasses = document.querySelectorAll(".glass");

let glassDrinked = localStorage.getItem("glassDrinked")
  ? Number(localStorage!.getItem("glassDrinked"))
  : -1;

Array.from(allGlasses).forEach((glass, glassNum) => {
  glass.addEventListener("click", () => {
    glassDrinked = glassNum;
    if (glass.classList.contains("active")) {
      removeClassToGlass(glassDrinked);
      glassDrinked = glassNum - 1;
    } else {
      addClassToGlass(glassDrinked);
    }
    updateGlassDrinked();
    localStorage.setItem("glassDrinked", `${glassDrinked}`);
  });
});

const updateGlassDrinked = function () {
  const drinkedinPercent = ((glassDrinked + 1) / 8) * 100;
  drinked!.textContent = `${drinkedinPercent}%`;
  drinked!.style.height = `${drinkedinPercent}%`;
  drinked!.style.opacity = drinkedinPercent === 0 ? "0" : "100";
  remainingWater!.children[0].textContent = `${
    2 - (2 * drinkedinPercent) / 100
  } L`;
  remainingWater!.style.height = `${100 - drinkedinPercent}%`;
  remainingWater!.style.opacity = drinkedinPercent === 100 ? "0" : "100";
};

const addClassToGlass = function (num: number) {
  Array.from(allGlasses).forEach((glass, glassNum) => {
    if (glassNum < num + 1) {
      glass.classList.add("active");
    }
  });
};

const removeClassToGlass = function (num: number) {
  Array.from(allGlasses).forEach((glass, glassNum) => {
    if (glassNum >= num) {
      glass.classList.remove("active");
    }
  });
};

addClassToGlass(glassDrinked);
updateGlassDrinked();
