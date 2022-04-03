const showBtn = document.querySelector(".btn");
const toastContainer = document.querySelector(".toast");

const getMsg = (numberOfMsg: number) => {
  const msgData = [
    `
        <div class="msg success">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-patch-check-fill"
        viewBox="0 0 16 16"
      >
        <path
        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
        />
        </svg>
        <span> Success Message ${numberOfMsg + 1} </span>
        </div>
        `,
    `
      <div class="msg error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-exclamation-circle-fill"
        viewBox="0 0 16 16"
        >
        <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        />
        </svg>
        <span> Error Message ${numberOfMsg + 1} </span>
        </div>
        `,
    `
        <div class="msg info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-emoji-smile-fill"
          viewBox="0 0 16 16"
          >
          <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"
          />
          </svg>
        <span> Info Message ${numberOfMsg + 1} </span>
        </div>
        `,
  ];
  return msgData[numberOfMsg];
};

showBtn?.addEventListener("click", () => {
  const notif = document.createElement("div");
  notif.innerHTML = getMsg(Math.round(Math.random() * 2));
  const generatedMsg = notif.children[0];
  toastContainer?.insertAdjacentElement("beforeend", generatedMsg);

  setTimeout(() => {
    generatedMsg.remove();
  }, 2500);
});
