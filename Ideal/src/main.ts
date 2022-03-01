const imageContainer = document.getElementById("imageContainer");
const allImage = document.querySelectorAll(".image");
imageContainer?.addEventListener("click", (e) => {
  if (e.target?.classList.contains("image")) {
    allImage.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target?.classList.add("active");
  }
});
