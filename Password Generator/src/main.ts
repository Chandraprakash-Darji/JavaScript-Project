const form = document.querySelector("form");
const allInput = document.querySelectorAll("input");
const prevBtn = document.querySelector(".prevBtn");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  allInput.forEach((input) => input.setAttribute("value", input.value));
  const formData = form.innerHTML;
  console.log(formData);
  form.innerHTML = `<p class="headline">Now You Can Print the Form</p>`;
  form.insertAdjacentHTML(
    "afterend",
    `<button id="print" class="btn mt-5">Print</button>`
  );

  document.querySelector("#print")?.addEventListener("click", (e) => {
    e.preventDefault();
    form.innerHTML = formData;
    print();
    form.innerHTML = `<p class="headline">Now You Can Print the Form</p>`;
  });
});
