const boxs = document.querySelectorAll(".box");
const inBox = document.querySelector(".inBox");

// Remove the classname to hide the inBox when drag is started
inBox!.addEventListener("dragstart", function () {
  // Hold class will add border to holded box
  inBox!.className += " hold";
  // after 0s delay it will remove all class from inBox
  setTimeout(() => (inBox!.className = ""), 0);
});
// removing inBox Style when drag end
inBox!.addEventListener("dragend", () => (inBox!.className = "inBox"));

// Events on Box
boxs.forEach((box) => {
  // this will prevent from happening default behaviour
  // Default behaviour: Reset the current drag operation to "none".
  box.addEventListener("dragover", (e) => e.preventDefault());

  box.addEventListener("dragenter", function (e) {
    // this will prevent from happening default behaviour
    // Reject immediate user selection as potential target element.
    e.preventDefault();
    // Adding hover class that add special style
    box.classList.add("hover");
  });

  // remove hover style on leave
  box.addEventListener("dragleave", () => box.classList.remove("hover"));

  // when drop append the box and remove hoverr style
  box.addEventListener("drop", function () {
    box.append(inBox);
    box.classList.remove("hover");
  });
});
