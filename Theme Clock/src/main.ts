const themeMode = document.querySelector("#themeMode") as HTMLButtonElement;
const timeEL = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const secEl = document.querySelector(".sec") as HTMLDivElement;
const minEl = document.querySelector(".min") as HTMLDivElement;
const hourEl = document.querySelector(".hour") as HTMLDivElement;

// prettier-ignore
const weekDays = ['SUNDAY','MONDAY', 'TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
// prettier-ignore
const month = ["JAN",'FEB','MAR','APR','MAY','JUN','JUL','AUG','OCT','NOV','DEC']

document.documentElement.classList.add(
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
);
themeMode.textContent = `${
  document.documentElement.classList.contains("dark") ? "Dark" : "Light"
} Mode`;
themeMode?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeMode.textContent = `${
    document.documentElement.classList.contains("dark") ? "Dark" : "Light"
  } Mode`;
});

const setTime = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMin = date.getMinutes();
  const currentMonth = date.getMonth();
  const currentSec = date.getSeconds();

  timeEL!.textContent = `${
    currentHours > 12 ? currentHours % 12 : currentHours
  }:${currentMin}  ${currentHours > 12 ? "PM" : "AM"}`;

  dateEl!.textContent = `${weekDays[date.getDay()]}, ${
    month[currentMonth]
  } ${date.getDate()}`;

  secEl.style.transform = `rotate(${currentSec * 6 - 90}deg)`;
  minEl.style.transform = `rotate(${currentMin * 6 - 90}deg)`;
  hourEl.style.transform = `rotate(${(currentHours % 12) * 30 - 90}deg)`;
};
setTime();
setInterval(() => setTime(), 1000);
