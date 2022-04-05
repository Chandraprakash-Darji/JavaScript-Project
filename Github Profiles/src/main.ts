const ContentEl = document.querySelector(".Content");
const searchEl = document.querySelector("#search") as HTMLInputElement;
const formEl = document.querySelector("form") as HTMLFormElement;
const API_URL = "https://api.github.com/users/";
let username = `chandraprakash-darji`;
const repoEnd = `/repos?sort=created`;

const spinner = `
<div class="w-max spinner">
<svg
class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
  >
  <circle
  class="opacity-25"
  cx="12"
  cy="12"
  r="10"
  stroke="currentColor"
  stroke-width="4"
  ></circle>
  <path
  class="opacity-75"
  fill="currentColor"
  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  ></path>
  </svg>
</div>
`;

const fetchData = async (profileName: string, repos = false) => {
  const res = await fetch(`${API_URL}${profileName}${repos ? repoEnd : ""}`);
  const data = await res.json();
  return data;
  // REPOS ::  https://api.github.com/users/USERNAME/repos?sort=created
  // USER ::  https://api.github.com/users/USERNAME
};

// console.log(fetchData(username));

const updateUI = (html: string) => {
  ContentEl!.innerHTML = html;
};

const generateRepoLink = async () => {
  let returnHtml = ``;
  const data = await fetchData(username, true);
  data.slice(0, 5).forEach((repo: any) => {
    returnHtml += `<a href="${repo.html_url}" target="_blank" class="repo">${repo.name}</a>`;
  });
  return returnHtml;
};

const profileCard = async (data: any) => {
  return `
    <div class="profile">
    <div class="Image">
      <img
        src="${data.avatar_url}
        alt="${data.name}"
      />
    </div>
    <div class="data">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <div class="stats">
        <div class="followers"><span>${
          data.followers
        }</span><span>Followers</span></div>
        <div class="following"><span>${
          data.following
        }</span><span>Following</span></div>
        <div class="Repos"><span>${
          data.public_repos
        }</span><span>Repos</span></div>
      </div>
      <div class="recentRepos">
      ${await generateRepoLink()}
      </div>
    </div>
    </div>
    `;
};

formEl?.addEventListener("submit", async (e) => {
  e.preventDefault();
  username = searchEl.value.trim();
  searchEl.disabled = true;
  updateUI(spinner);
  try {
    const data = await fetchData(username);
    console.log(data);
    const html = await profileCard(data);
    updateUI(html);
  } catch (error) {
    console.error(error);
    updateUI(`<div class="w-max spinner"><h1> User not Found</h1> </div>`);
  }
  searchEl.disabled = false;
});
