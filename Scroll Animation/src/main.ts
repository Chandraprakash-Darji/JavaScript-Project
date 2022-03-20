const li = document.querySelectorAll("li");

const revelLi = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
};

const liObserver = new IntersectionObserver(revelLi, {
  rootMargin: "-50px", 
});

li.forEach((li1) => {
  liObserver.observe(li1);
});
