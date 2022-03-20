const main = document.querySelector("main") as HTMLElement;
const p = document.querySelector("p") as HTMLElement;
let loadded: number = 100;
p.style.backdropFilter = `blur(${blur}px)`;

const blurLoad = setInterval(() => {
  p.style.backdropFilter = `blur(${(loadded * 20) / 100}px)`;
  p.textContent = `${loadded}%`;
  if (loadded < 18) p.style.opacity = `${(loadded * 20) / 100}`;
  if (loadded <= 0) {
    clearInterval(blurLoad);
    p.textContent = "";
  } else loadded = Number((loadded - 1).toFixed(2));
}, 50);
