"use strict";
const choiceInput = document.querySelector("#choiceText") as HTMLInputElement;
const choiceParent = document.querySelector(".choiceBox");

const state = {
  choiceInput: {
    text: "",
    setText(newText: string) {
      this.text = newText;
    },
  },
  choicesList: {
    choices: [] as string[],
    setChoices(choiceList: string[]) {
      this.choices = choiceList;
    },
  },
};

const divideTheChoice = function () {
  const choicesListGenerated = state.choiceInput.text
    .split(/,/)
    .map((choiEle) => choiEle.trim())
    .filter((choiEle) => choiEle.length !== 0);
  state.choicesList.setChoices(choicesListGenerated);
  updatedmarkUp();
};

const updatedmarkUp = function () {
  choiceParent!.innerHTML = "";
  state.choicesList.choices.forEach((choice) => {
    const choiceMarkup = `<span class="choice">${choice}</span>`;
    choiceParent?.insertAdjacentHTML("beforeend", choiceMarkup);
  });
};

const makeChoice = function () {
  const allChoices = document.querySelectorAll(".choice");

  const choicing = setInterval(() => {
    const choiced = Math.trunc(
      Math.random() * state.choicesList.choices.length
    );
    allChoices.forEach((ele) => ele.classList.remove("active"));
    allChoices[choiced].classList.add("active");
  }, 50);

  setTimeout(() => {
    clearInterval(choicing);
    state.choiceInput.setText(``);
    choiceInput.disabled = false;
    state.choicesList.setChoices([]);
  }, 2000);
};

choiceInput?.addEventListener("keydown", (e) => {
  state.choiceInput.setText(`${choiceInput.value}`);
  choiceParent?.classList.add("mt-5");
  divideTheChoice();
  if (choiceInput.value === "") {
    choiceParent?.classList.toggle("mt-5");
  }
  if (e.key === "Enter") {
    choiceParent?.classList.add("mt-5");
    choiceInput.value = "";
    choiceInput.blur();
    choiceInput.disabled = true;
    makeChoice();
  }
});
