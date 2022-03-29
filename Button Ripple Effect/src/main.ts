const clickMe = document.querySelector(".clickMe");

clickMe?.addEventListener("click", (e) => {
  // const circle = document.createElement("span");
  // circle.classList.add("circle");
  // circle.style.top = `${e.clientX - e.target.closest(".clickMe").offsetTop}px`;
  // circle.style.left = `${e.clientY - e.target.closest(".clickMe").offsetLeft}px`;
  // console.log(e);
  // clickMe.append(circle);
  // setTimeout(() => circle.remove(), 1000);

  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.closest(".clickMe").offsetTop;
  const buttonLeft = e.target.closest(".clickMe").offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  clickMe.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
