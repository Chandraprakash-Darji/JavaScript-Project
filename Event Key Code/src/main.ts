const bodyEl = document.querySelector<HTMLElement>("body");
const jokeText = document.getElementById("text");
const newBtn = document.getElementById("new-btn");

document.addEventListener("keydown", (e) => {
  console.log(e.key, e.keyCode, e.code);

  (document.querySelector(".any") as HTMLElement)!.style.display = "none";
  Array.from(
    document.querySelectorAll(".opacity-0") as NodeListOf<HTMLElement>
  ).forEach((ele) => (ele!.style.opacity = "1"));
  document.querySelector("#key")!.textContent = e.key === " " ? e.code : e.key;
  document.querySelector("#keyCode")!.textContent = `${e.keyCode}`;
  document.querySelector("#code")!.textContent = e.code;
});
