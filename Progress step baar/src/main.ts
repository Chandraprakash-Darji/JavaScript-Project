const next = document.querySelector(".next") as HTMLElement;
const prev = document.querySelector(".prev") as HTMLElement;

const boxActive = document.querySelector(".boxActive") as HTMLElement;
const allDots = document.querySelectorAll(".dot") as NodeListOf<Element>;

let active: number = 0;
const btnState = () => {
  prev?.classList.add("activeBtn");
  next?.classList.add("activeBtn");
  if (active >= allDots.length - 1) {
    next?.classList.remove("activeBtn");
  } else if (active === 0) {
    prev?.classList.remove("activeBtn");
  }
};

next?.addEventListener("click", () => {
  if (active < allDots.length - 1) {
    active++;
    allDots[active].classList.add("dotActive");
    boxActive.style.width = `${33.33 * active}%`;
  }
  btnState();
});
prev?.addEventListener("click", () => {
  if (active > 0) {
    active--;
    allDots[active + 1].classList.remove("dotActive");
    boxActive.style.width = `${33.33 * active}%`;
  }
  btnState();
});
