const emailInput = document.querySelector("#email") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;
const emailLabel = document.querySelector(".emailLabel") as HTMLLabelElement;
const passwordLabel = document.querySelector(".passwordLabel") as HTMLLabelElement;

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
