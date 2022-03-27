const slider = document.querySelector(".slider") as HTMLElement;
const dots = document.querySelector(".dots");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slideBox = document.querySelector("#slideBox");

const dot = `<div class="dot"></div>`;
// const images = [
//   "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
//   "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//   "https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
// ];

const images = [
  "./src/assets/images/img1.jpg",
  "./src/assets/images/img2.jpg",
  "./src/assets/images/img3.svg",
  "./src/assets/images/img4.png",
  "./src/assets/images/img5.png",
];

let activeImage = 0;

// When dot is clicked sctive state setting fun
const changeDotState = function () {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("active"));
  allDots[activeImage].classList.add("active");
};

// Change the slide property when slide is changed
const changeSlide = function () {
  slider!.style.transform = `translateX(-${
    (slideBox!.getBoundingClientRect().width + 40) * activeImage
  }px)`;
  document.querySelector(
    "body"
  )!.style.backgroundImage = `url('${images[activeImage]}')`;
  changeDotState();
};

// next slide
const nextSlide = function () {
  activeImage = (activeImage + 1) % images.length;
  changeSlide();
};

// Previous Slide
const prevSlide = function () {
  activeImage = activeImage == 0 ? images.length - 1 : activeImage - 1;
  changeSlide();
};

// Adding the slide to html
images.forEach((img) => {
  slider?.insertAdjacentHTML(
    "beforeend",
    `<div class="slide"> 
    <img src="${img}" alt="" />
    </div>`
  );
  dots?.insertAdjacentHTML("beforeend", dot);
});

// Next btn Event
nextBtn?.addEventListener("click", nextSlide);
// Prevois btn event
prevBtn?.addEventListener("click", prevSlide);
// Click Event on all dot to change slide
document.querySelectorAll(".dot").forEach((dot, i) => {
  dot.addEventListener("click", () => {
    activeImage = i;
    changeSlide();
  });
});

// init for body background image, timer to change img and dot state
const init = function () {
  changeDotState();
  document.querySelector(
    "body"
  )!.style.backgroundImage = `url('${images[activeImage]}')`;
  setInterval(() => nextSlide(), 2000);
};

init();
