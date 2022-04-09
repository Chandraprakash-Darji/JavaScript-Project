// Password Area
const passWordAreaEl = document.querySelector(
  "#passWordArea"
) as HTMLInputElement;

// Copy Elements
const copiedTitleEl = document.querySelector(".copiedTitle");
const copyBtnEl = document.querySelector("#copyBtn");

// Password lenght
const passLenghtEl = document.querySelector("#passLenght") as HTMLInputElement;

// Form
const formEl = document.querySelector("form") as HTMLFormElement;

// Genrate Pass Elements
const generatePassEl = document.querySelector(
  ".generateBtn"
) as HTMLButtonElement;

// List of All Check box
const checkBoxEls = document.querySelectorAll(
  "input[type='checkbox']"
) as NodeListOf<HTMLInputElement>;

// Include Staus -> [upperCaseINC, lowerCaseINC, numbersINC, symbolINC];
const includeStatus = [true, true, true, true];

// Copy Text Function
const updateCopyBtn = () => {
  // Click Event
  copyBtnEl?.addEventListener("click", () => {
    copiedTitleEl?.classList.add("active");

    // Changing the clipboard Image
    copyBtnEl.children[0].setAttribute("src", "./src/assets/copyChecked.svg");

    // Select the text field
    passWordAreaEl.select();
    passWordAreaEl.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(passWordAreaEl.value);

    // Reseting the sctive state and clipBoard Image
    setTimeout(() => {
      copiedTitleEl?.classList.remove("active");
      copyBtnEl.children[0].setAttribute("src", "./src/assets/copy.svg");
    }, 1000);
  });
};

// This will generate a list of function According to Which checkBox is clicked
const generateListOfFunction = () => {
  // Generate PassWord elements
  const funList = [];
  if (includeStatus[0]) funList.push(getRandomUpper);
  if (includeStatus[1]) funList.push(getRandomLower);
  if (includeStatus[2]) funList.push(getRandomNumber);
  if (includeStatus[3]) funList.push(getRandomSymbol);
  return funList;
};

// This will generate password 
const generatePassword = () => {
  let password = "";

  // Checking the CheckBox active checked State and Updating the list
  for (let index = 0; index < checkBoxEls.length; index++) {
    includeStatus[index] = checkBoxEls[index].checked;
  }

  // Generate PassWord elements
  const generateFunList = generateListOfFunction();
  console.log(generateFunList);

  // This will loop for lenght of password and select the random function from function list and genertae Password and append to password Variable
  for (let index = 0; index < +passLenghtEl.value; index++) {
    password +=
      generateFunList[Math.floor(Math.random() * generateFunList.length)]();
  }

  // Update the View of Password
  passWordAreaEl!.value = password;
  console.log(passWordAreaEl!.value);
};

// Get Random lower
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Get Random Upper
const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Get Random Number
const getRandomNumber = () => {
  if (!includeStatus[2]) return "";
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Get Random Symbol
const getRandomSymbol = () => {
  if (!includeStatus[3]) return "";
  const syb = "`~!@#$%^&*()_-+={}[]:\";'<>,./?";
  return syb[Math.floor(Math.random() * syb.length)];
};

const __init__ = () => {
  formEl?.addEventListener("submit", (e) => {
    e.preventDefault();
    generatePassword();
  });
  updateCopyBtn();
  generatePassword();
};

__init__();
