const animatedTextEl = document.querySelector("#animatedText");
const speedEl = document.querySelector("#speed") as HTMLInputElement;

let speed = 300 / +speedEl.value;
const dataText = `We Love Programming !!!`;
let index = 0;

const updateText = () => {
  index++;
  (animatedTextEl as HTMLElement)!.innerText = dataText?.slice(0, index);
  if (index > dataText.length) index = 0;
  setTimeout(updateText, speed);
};
updateText();

speedEl.addEventListener("input", () => {
  speed = 300 / +speedEl.value;
});
