const main = document.querySelector("main") as HTMLElement;
const p = document.querySelector("p") as HTMLElement;
let blurNo: number = 15;
p.style.backdropFilter = `blur(${blur}px)`;

const blurLoad = setInterval(() => {
  p.style.backdropFilter = `blur(${blurNo}px)`;
  p.textContent = `${Math.trunc((blurNo * 100) / 15)}%`;
  if (blurNo < 4) p.style.opacity = `${(blurNo * 1) / 15}`;
  if (blurNo <= 0) {
    clearInterval(blurLoad);
    p.textContent = "";
  } else blurNo = Number((blurNo - 0.1).toFixed(2));
}, 55);
