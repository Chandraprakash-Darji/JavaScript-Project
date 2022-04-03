const textBoxEl = document.querySelector(".textBox") as HTMLDivElement;
const imagesBoxEL = document.querySelector(".imagesBox") as HTMLDivElement;

const sectionImg = (url: string) => {
  return ` <section
  class="section-img"
  style="background-image: url('${url}')"
  ></section>`;
};

const setionText = (h2: string, p: string, color: string) => {
  return ` <section class="section-text" style="background-color:${color}">
  <h2>${h2}</h2>
  <p>${p}</p>
  </section>`;
};

const datas = [
  {
    img: "./src/Images/photo-1.jpeg",
    h2: "Nature flower",
    p: "all in pink",
    bgColor: "#FD3555",
  },
  {
    img: "./src/Images/photo-2.jpeg",
    h2: "Bluue Sky",
    p: "with It's mountains",
    bgColor: "#2A86BA",
  },
  {
    img: "./src/Images/photo-3.jpeg",
    h2: "Lonely castle",
    p: "in the wilderness",
    bgColor: "#252E33",
  },
  {
    img: "./src/Images/photo-4.jpeg",
    h2: "Flying eagle",
    p: "in the sunset",
    bgColor: "#FFB866",
  },
];

datas.forEach((data, i) => {
  textBoxEl?.insertAdjacentHTML(
    "beforeend",
    setionText(data.h2, data.p, data.bgColor)
  );
  imagesBoxEL?.insertAdjacentHTML(
    "beforeend",
    sectionImg(datas[datas.length - 1 - i].img)
  );
});
const upKey = document.querySelector(".upKey");
const downKey = document.querySelector(".downKey");

let active = 0;

const updateSlide = () => {
  textBoxEl.style.transform = `translateY(${-100 * active}vh)`;
  imagesBoxEL.style.transform = `translateY(${
    -100 * (datas.length - 1 - active)
  }vh)`;
};

const nextSlide = () => {
  active = (active + 1) % datas.length;
  updateSlide();
};

const prevSlide = () => {
  active = active == 0 ? (active = datas.length - 1) : active-=1;
  console.log(active)

  updateSlide();
};

downKey?.addEventListener("click", nextSlide);
upKey?.addEventListener("click", prevSlide);
updateSlide();
