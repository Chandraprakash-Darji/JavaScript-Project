"use strict";
const questionBox = document.querySelectorAll(".question-div");

questionBox.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    document.querySelector(`.question--${i}`).classList.toggle("q-active");
    document.querySelector(`.answer--${i}`).classList.toggle("answer-active");
    document.querySelector(`.arr--${i}`).classList.toggle("arr-active");
  });
});
