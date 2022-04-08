const imgBoxEl = document.querySelector("#imgBox");
const clickEl = document.querySelector(".click");

const heartData = `<span id="heart">❤️</span>`;

let clicked = 0;

// Update the click Times
const updateClick = () => {
  clicked++;
  // Setting text to updated clicked
  clickEl!.textContent = `${clicked}`;
};

imgBoxEl?.addEventListener("dblclick", (e) => {
  // Crating heart Element
  let divHeartCreated = document.createElement("div");
  // Setting the Heart Content
  divHeartCreated.innerHTML = heartData;
  // setting Heart == First child
  const heart = divHeartCreated.children[0] as HTMLElement;

  // Where the User Clicked from Window relative to Window
  const x = (e as MouseEvent).clientX;
  const y = (e as MouseEvent).clientY;

  // Distance between window and Layout
  const leftOffset = (
    (e.target as HTMLElement).closest("#imgBox") as HTMLDivElement
  ).offsetLeft;

  const topOffset = (
    (e.target as HTMLElement).closest("#imgBox") as HTMLDivElement
  ).offsetTop;

  // Diffence will result to position where user clicked relative layout border
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // Setting lop and left Property
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  // Appending the child
  imgBoxEl.appendChild(heart);

  // Updating clicked number
  updateClick();

  // Removing the Element
  setTimeout(() => heart.remove(), 1000);
});
