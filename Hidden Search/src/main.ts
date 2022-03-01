const search = document.querySelector("#search") as HTMLElement;
const searchBtn = document.querySelector("#searchBtn") as HTMLElement;

searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
});
