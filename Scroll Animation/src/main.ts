const li = document.querySelectorAll("li");

const allSection = document.querySelectorAll(".section");
const revelLi = (entries) => {
  entries.forEach((entry) => {
    // liObserver.observe(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
  // const [entry] = entries;
  console.log(entries);
};
const liObserver = new IntersectionObserver(revelLi, {
  root: null,
  threshold: 1,
  rootMargin:"-30px"
});
li.forEach((li1) => {
  liObserver.observe(li1);
});
