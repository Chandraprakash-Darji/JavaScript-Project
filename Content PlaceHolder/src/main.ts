const HeroImgEl = document.getElementById("HeroImg");
const headingEl = document.getElementById("heading");
const headlineEl = document.getElementById("headline");
const profileLogoEl = document.getElementById("profileLogo");
const ProfileDataEl = document.getElementById("ProfileData");
const animatedBgEl = document.querySelectorAll(".animatedBg");
const animatedTextEl = document.querySelectorAll(".animatedText");
const animateEl = document.querySelectorAll(".animate");
// const crossEl = document.querySelector(".cross");
// const eraseEl = document.querySelector(".erase");

const heroImg = ` <img src="./src/assets/laptop.jpeg" 
alt="laptop Img" 
class = "heroImg"
/>`;
const heading = `Lorem ipsum dolor sit amet`;
const headline = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
perferendis`;
const profileImg = `<img src="./src/assets/45.jpg" alt="John Doe" />`;
const username = `John Doe`;
const postDate = `Oct 08, 2020`;
const dataLoad = () => {
  HeroImgEl?.insertAdjacentHTML("afterbegin", heroImg);
  headingEl!.textContent = heading;
  headlineEl!.textContent = headline;
  profileLogoEl?.insertAdjacentHTML("afterbegin", profileImg);
  ProfileDataEl!.children[0].textContent = username;
  ProfileDataEl!.children[1].textContent = postDate;

  animatedTextEl.forEach((ele) => ele.classList.remove("animatedText"));

  animateEl.forEach((ele) => ele.classList.remove("animate"));
};
setTimeout(() => dataLoad(), 2500);
