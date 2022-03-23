const content = document.querySelector(".content") as HTMLElement;
const search = document.querySelector("#search") as HTMLInputElement;

const searchForm = document.querySelector("form");

const fetchMovie = async function (link: string) {
  const res = await fetch(link);
  const data = await res.json();
  return data;
};

const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 7537.253,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.3,
      vote_count: 9319,
    },
    {
      adult: false,
      backdrop_path: "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      genre_ids: [80, 9648, 53],
      id: 414906,
      original_language: "en",
      original_title: "The Batman",
      overview:
        "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      popularity: 3748.264,
      poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      release_date: "2022-03-01",
      title: "The Batman",
      video: false,
      vote_average: 8,
      vote_count: 1582,
    },
    {
      adult: false,
      backdrop_path: "/tAztR7AXEesMQAAi5ncFPSZtYlI.jpg",
      genre_ids: [27, 53],
      id: 833425,
      original_language: "en",
      original_title: "No Exit",
      overview:
        "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
      popularity: 3167.629,
      poster_path: "/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
      release_date: "2022-02-25",
      title: "No Exit",
      video: false,
      vote_average: 6.5,
      vote_count: 202,
    },
    {
      adult: false,
      backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 2945.224,
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 7.7,
      vote_count: 5225,
    },
    {
      adult: false,
      backdrop_path: "/7CamWBejQ9JQOO5vAghZfrFpMXY.jpg",
      genre_ids: [28, 53, 80],
      id: 928381,
      original_language: "fr",
      original_title: "Sans répit",
      overview:
        "After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.",
      popularity: 2261.57,
      poster_path: "/9MP21x0OPv0R72obd63tMHssmGt.jpg",
      release_date: "2022-02-25",
      title: "Restless",
      video: false,
      vote_average: 5.9,
      vote_count: 146,
    },
    {
      adult: false,
      backdrop_path: "/pnZ9NMxRqbcJ2dPNROIoregruv5.jpg",
      genre_ids: [28, 80, 53],
      id: 753232,
      original_language: "en",
      original_title: "The Commando",
      overview:
        "An elite DEA agent returns home after a failed mission when his family makes an unexpected discovery in their house – a stash of money worth $3 million. They soon face the danger and threat of a newly released criminal and his crew, who will do whatever it takes to retrieve the money, including kidnap the agent’s daughters. Stakes are high and lives are at risk in this head-to-head battle as the agent stops at nothing to protect his family against the money-hungry criminals.",
      popularity: 2124.934,
      poster_path: "/pSh8MyYu5CmfyWEHzv8FEARH2zq.jpg",
      release_date: "2022-01-07",
      title: "The Commando",
      video: false,
      vote_average: 6.6,
      vote_count: 51,
    },
    {
      adult: false,
      backdrop_path: "/oQPbZ5e6J9fuAyv4Gl0mMZMIyPI.jpg",
      genre_ids: [28, 12, 53, 10752],
      id: 476669,
      original_language: "en",
      original_title: "The King's Man",
      overview:
        "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
      popularity: 1854.962,
      poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      release_date: "2021-12-22",
      title: "The King's Man",
      video: false,
      vote_average: 7,
      vote_count: 1895,
    },
    {
      adult: false,
      backdrop_path: "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
      genre_ids: [28, 35, 80, 53],
      id: 512195,
      original_language: "en",
      original_title: "Red Notice",
      overview:
        "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      popularity: 1854.319,
      poster_path: "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
      release_date: "2021-11-04",
      title: "Red Notice",
      video: false,
      vote_average: 6.8,
      vote_count: 3220,
    },
    {
      adult: false,
      backdrop_path: "/mruT954ve6P1zquaRs6XG0hA5k9.jpg",
      genre_ids: [53],
      id: 800510,
      original_language: "en",
      original_title: "Kimi",
      overview:
        "A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.",
      popularity: 1621.576,
      poster_path: "/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
      release_date: "2022-02-10",
      title: "Kimi",
      video: false,
      vote_average: 6.3,
      vote_count: 242,
    },
    {
      adult: false,
      backdrop_path: "/wMUPT99gw6IB9OVvC46rF8wHIRt.jpg",
      genre_ids: [28, 80, 14],
      id: 890656,
      original_language: "en",
      original_title: "Fistful of Vengeance",
      overview:
        "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
      popularity: 1522.538,
      poster_path: "/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
      release_date: "2022-02-17",
      title: "Fistful of Vengeance",
      video: false,
      vote_average: 5.4,
      vote_count: 127,
    },
    {
      adult: false,
      backdrop_path: "/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg",
      genre_ids: [37, 28],
      id: 928999,
      original_language: "en",
      original_title: "Desperate Riders",
      overview:
        "After Kansas Red rescues young Billy from a card-game shootout, the boy asks Red for help protecting his family from the outlaw Thorn, who’s just kidnapped Billy’s mother, Carol. As Red and Billy ride off to rescue Carol, they run into beautiful, tough-as-nails Leslie, who’s managed to escape Thorn’s men. The three race to stop Thorn’s wedding to Carol with guns a-blazing - but does she want to be rescued?",
      popularity: 1624.992,
      poster_path: "/7pYYGm1dWZGkbJuhcuaHD6nE6k7.jpg",
      release_date: "2022-02-25",
      title: "Desperate Riders",
      video: false,
      vote_average: 6,
      vote_count: 14,
    },
    {
      adult: false,
      backdrop_path: "/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg",
      genre_ids: [28, 53],
      id: 823625,
      original_language: "en",
      original_title: "Blacklight",
      overview:
        "Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.",
      popularity: 2051.042,
      poster_path: "/1KHoDh6NW8SWOJu8JnFe6wWaMD3.jpg",
      release_date: "2022-02-10",
      title: "Blacklight",
      video: false,
      vote_average: 5.2,
      vote_count: 110,
    },
    {
      adult: false,
      backdrop_path: "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
      genre_ids: [27, 9648, 53],
      id: 646385,
      original_language: "en",
      original_title: "Scream",
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      popularity: 1686.638,
      poster_path: "/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
      release_date: "2022-01-12",
      title: "Scream",
      video: false,
      vote_average: 6.8,
      vote_count: 887,
    },
    {
      adult: false,
      backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
      genre_ids: [16, 10751, 35, 14],
      id: 508947,
      original_language: "en",
      original_title: "Turning Red",
      overview:
        "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      popularity: 1424.882,
      poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      release_date: "2022-03-10",
      title: "Turning Red",
      video: false,
      vote_average: 7.6,
      vote_count: 177,
    },
    {
      adult: false,
      backdrop_path: "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
      genre_ids: [16, 35, 12, 10751],
      id: 774825,
      original_language: "en",
      original_title: "The Ice Age Adventures of Buck Wild",
      overview:
        "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash &amp; Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
      popularity: 1545.372,
      poster_path: "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
      release_date: "2022-01-28",
      title: "The Ice Age Adventures of Buck Wild",
      video: false,
      vote_average: 7.1,
      vote_count: 770,
    },
    {
      adult: false,
      backdrop_path: "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
      genre_ids: [16, 28, 14, 12],
      id: 768744,
      original_language: "ja",
      original_title:
        "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
      overview:
        "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
      popularity: 1646.762,
      poster_path: "/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
      release_date: "2021-08-06",
      title: "My Hero Academia: World Heroes' Mission",
      video: false,
      vote_average: 7.3,
      vote_count: 110,
    },
    {
      adult: false,
      backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
      genre_ids: [16, 10751, 14, 35, 12],
      id: 585083,
      original_language: "en",
      original_title: "Hotel Transylvania: Transformania",
      overview:
        "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      popularity: 1517.354,
      poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      release_date: "2022-02-25",
      title: "Hotel Transylvania: Transformania",
      video: false,
      vote_average: 7,
      vote_count: 351,
    },
    {
      adult: false,
      backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
      genre_ids: [878],
      id: 524434,
      original_language: "en",
      original_title: "Eternals",
      overview:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      popularity: 1481.698,
      poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
      release_date: "2021-11-03",
      title: "Eternals",
      video: false,
      vote_average: 7.2,
      vote_count: 4801,
    },
    {
      adult: false,
      backdrop_path: "/eVSa4TpyXbOdk9fXSD6OcORJGtv.jpg",
      genre_ids: [53],
      id: 803114,
      original_language: "en",
      original_title: "The Requin",
      overview:
        "A couple on a romantic getaway find themselves stranded at sea when a tropical storm sweeps away their villa. In order to survive, they are forced to fight the elements, while sharks circle below.",
      popularity: 1356.385,
      poster_path: "/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
      release_date: "2022-01-28",
      title: "The Requin",
      video: false,
      vote_average: 4.7,
      vote_count: 77,
    },
    {
      adult: false,
      backdrop_path: "/yKnjIWNIVECfMoKy1ayl68vX6qj.jpg",
      genre_ids: [28, 80, 53],
      id: 871799,
      original_language: "en",
      original_title: "Pursuit",
      overview:
        "Detective Breslin crosses paths with Calloway, a ruthless hacker desperate to find his wife, who has been kidnapped by a drug cartel. When Calloway escapes police custody, Breslin joins forces with a no-nonsense female cop to reclaim his prisoner. But is Calloway’s crime-boss father somehow involved in this explosive situation?",
      popularity: 1332.101,
      poster_path: "/wYihSXWYqN8Ejsdut2P1P0o97N0.jpg",
      release_date: "2022-02-18",
      title: "Pursuit",
      video: false,
      vote_average: 4,
      vote_count: 22,
    },
  ],
  total_pages: 32686,
  total_results: 653709,
};

const colorOfVote = function (res: any) {
  if (+res.vote_average < 6) return "rgb(248 113 113)";
  else if (+res.vote_average >= 8) return "rgb(74 222 128)";
  else return "rgb(251 146 60)";
};

const updateDate = async function (data: any) {
  content.innerHTML = `  <svg
  class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
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
</svg>`;
  const returnData = await data;
  content.textContent = "";
  returnData.results.forEach((res: any) => {
    const data = `
    <a
      href="https://www.themoviedb.org/movie/${res.id}-${res.title
      .split(" ")
      .join("-")}"
      target="_blank">
      <img
        src="https://image.tmdb.org/t/p/w500${res.poster_path}"
        alt=""
      />
      <div class="data">
        <h2 class="title">${res.title}</h2>
        <div class="vote" style="color: 
         ${colorOfVote(res)}">${res.vote_average * 10}%</div>
        <div class="releseDate">Release Date: <span> ${
          res.release_date
        } </span> </div>
      </div>
      <div class="description">${res.overview
        .split(".")
        .filter((sent: string, i: number) => (i < 2 ? sent : ""))
        .join(".")}
          <p>More..</p>
      </div>
    </a>`;
    content.insertAdjacentHTML("beforeend", data);
  });
};

updateDate(fetchMovie('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'));
// updateDate(data);

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = search.value.split(" ").join("%22");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=%22${query}`;
  console.log(query);
  // fetchMovie(url);/
  updateDate(fetchMovie(url));
});
