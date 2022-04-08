const imgBoxEl = document.querySelector("#imgBox");
const clickEl = document.querySelector(".click");

const heeart = `<span id="heart">❤️</span>`;

let clicked = 0;
const updateClick = () => {
  clicked++;
  clickEl!.textContent = clicked;
};

imgBoxEl?.addEventListener("dblclick", (e) => {
  // Crating heart Element
  let heart = document.createElement("div");
  heart.innerHTML = heeart;
  heart = heart.children[0];
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.closest("#imgBox").offsetLeft;
  const topOffset = e.target.closest("#imgBox").offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  imgBoxEl.appendChild(heart);

  updateClick();

  setTimeout(() => heart.remove(), 1000);
});
