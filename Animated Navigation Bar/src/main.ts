const menu = document.querySelector(".menu") as HTMLElement;
const mainContainer = document.querySelector(".mainContainer") as HTMLElement;

menu.addEventListener("click", (e) => {
  const clicked = (e.target as HTMLElement).closest(".mainContainer");
  clicked?.classList.toggle("active");
});
