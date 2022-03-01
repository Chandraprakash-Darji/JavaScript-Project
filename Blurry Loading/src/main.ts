const main = document.querySelector("main") as HTMLElement;
const p = document.querySelector("p") as HTMLElement;
let blur: number = 15;
p.style.backdropFilter = `blur(${blur}px)`;

const blurLoad = setInterval(() => {
  p.style.backdropFilter = `blur(${blur}px)`;
  p.textContent = `${Math.trunc((blur * 100) / 15)}%`;
  if (blur < 4) p.style.opacity = (blur * 1) / 15;
  if (blur <= 0) {
    clearInterval(blurLoad);
    p.textContent = "";
  } else blur = Number((blur - 0.1).toFixed(2));
}, 55);
