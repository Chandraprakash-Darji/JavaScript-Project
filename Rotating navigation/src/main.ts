const menuContainer = document.querySelector(".menuContainer") as HTMLElement;
const page = document.querySelector("#page") as HTMLElement;
const menuOpen = document.querySelector("#menuOpen") as HTMLElement;
const closeOpen = document.querySelector("#closeOpen") as HTMLElement;
const bottomNav = document.querySelector(".bottomNav") as HTMLElement;

menuOpen.addEventListener("click", () => {
  menuContainer.classList.add("active");
  page.classList.add("active");
  bottomNav.classList.add("active");
  document.body.style.overflowY = "hidden";
});
closeOpen.addEventListener("click", () => {
  menuContainer.classList.remove("active");
  page.classList.remove("active");
  bottomNav.classList.remove("active");
  document.body.style.overflowY = "scroll";
});
