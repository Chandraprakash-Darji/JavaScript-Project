const heroSectionEl = document.querySelector(".heroSection");
const contentSectionEl = document.getElementById("contentSection");

const header = document.querySelector("header");
const navheight = header!.getBoundingClientRect().height;
const stickyNav = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting) header?.classList.add("stickyNav");
  else header?.classList.remove("stickyNav");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.2,
  rootMargin: `${navheight}px`,
});
contentSectionEl && headerObserver.observe(contentSectionEl);
