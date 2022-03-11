const bodyEl = document.querySelector<HTMLElement>("body");
const jokeText = document.getElementById("text");
const newBtn = document.getElementById("new-btn");

const randomNumber = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + 1) + min;

const fetchQuote = async function () {
  try {
    const fetchData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await fetchData.json();
    return data.joke;
  } catch (error) {
    console.error(error);
  }
};

const setColor = function () {
  const colorNum = `rgba(${randomNumber(0,55)},${randomNumber(0,55)},${randomNumber(0,55)})`;
  bodyEl!.style.transition = ".5s ease all";
  bodyEl!.style.backgroundColor = colorNum;
  jokeText!.style.transition = ".5s ease all";
  jokeText!.style.color = colorNum;
  newBtn!.style.transition = ".5s ease all";
  newBtn!.style.backgroundColor = colorNum;
};

const setQuote = async function (this: HTMLElement) {
  const btn = this;
  btn.style.opacity = "0";
  btn.style.visibility = "hidden";
  const joke = await fetchQuote();
  setColor();
  jokeText!.innerHTML = joke;
  btn.style.opacity = "1";
  btn.style.visibility = "visible";
};

newBtn?.addEventListener("click", setQuote);
newBtn?.click();
