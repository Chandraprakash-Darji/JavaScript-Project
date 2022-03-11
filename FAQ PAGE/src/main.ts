"use strict";
const questionBox = document.querySelectorAll(".question-div");

Array.from(questionBox).forEach((question) => {
  question.addEventListener("click", (e) => {
    const clicked = (e.target as HTMLElement)?.closest(".question-div");
    if (clicked?.classList.contains("active-flag")) {
      clicked?.classList.remove("active-flag");
    } else {
      resetClasses();
      clicked?.classList.add("active-flag");
    }
  });
});

const resetClasses = function () {
  Array.from(questionBox).forEach((question) => {
    question.classList.remove("active-flag");
  });
};
