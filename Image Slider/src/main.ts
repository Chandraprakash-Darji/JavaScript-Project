const slider = document.querySelector(".slider") as HTMLElement;
const dots = document.querySelector(".dots");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const dot = `<div class="dot"></div>`;

const images = [
  "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  "https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
];

let activeImage = 0;

const changeDotState = function () {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("active"));
  allDots[activeImage].classList.add("active");
};

const changeSlide = function () {
  slider!.style.transform = `translateX(-${47 * activeImage}rem)`;
  changeDotState();
};

const nextSlide = function () {
  activeImage = (activeImage + 1) % images.length;
  changeSlide();
};

const prevSlide = function () {
  activeImage = activeImage == 0 ? images.length - 1 : activeImage - 1;
  changeSlide();
};

images.forEach((img) => {
  slider?.insertAdjacentHTML(
    "beforeend",
    `<img src="${img}" alt="" class="w-full rounded-3xl bg-white/40 p-1" />`
  );
  dots?.insertAdjacentHTML("beforeend", dot);
});

changeDotState();

nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);
const allDots = document.querySelectorAll(".dot");
allDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    activeImage = i;
    changeSlide();
  });
});

setInterval(() => nextSlide(), 2000);
