const linkedIn = document.getElementById("linkedIn") as HTMLElement;
const twitter = document.getElementById("twitter") as HTMLElement;
const github = document.getElementById("github") as HTMLElement;

let linkedInFollow = 0,
  twitterFollow = 0,
  githubFollow = 0;

const loadingFollows = setInterval(() => {
  if (+linkedIn!.innerText <= 10000) {
    linkedIn.textContent = `${linkedInFollow}`;
    linkedInFollow += 95;
  }
  if (+github!.innerText <= 7500) {
    github.textContent = `${githubFollow}`;
    githubFollow += 57;
  }
  if (+twitter!.innerText <= 12000) {
    twitter.textContent = `${twitterFollow}`;
    twitterFollow += 95;
  } else {
    github.textContent = `${7500}`;
    twitter.textContent = `${12000}`;
    linkedIn.textContent = `${10000}`;
    clearInterval(loadingFollows);
  }
}, 1);
