const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailLabel = document.querySelector(".emailLabel");
const passwordLabel = document.querySelector(".passwordLabel");
import "./style.css";
// const ps5 = document.querySelector(".ps5");
// const xbox = document.querySelector(".xbox");

emailInput?.addEventListener("focus", function () {
  emailLabel?.classList.add("active");
});
emailInput?.addEventListener("blur", function () {
  if (emailInput.value === "") emailLabel?.classList.remove("active");
});
passwordInput?.addEventListener("focus", function () {
  passwordLabel?.classList.add("active");
});
passwordInput?.addEventListener("blur", function () {
  if (passwordInput.value === "") passwordLabel?.classList.remove("active");
});
