// gloabl variables
const searchWord = "Gartenkralle";
let searchWordArray = [];
let searchWordLength = 0;
let inputChar = "";
let attempts = 10;
let leftAttempts = 10;
let wrongKeys = [];
let domList = document.querySelector("#wordsection");

/**
 * initial setup
 */
splitWord();
createFields();
countWrongAttempts();

/**
 * split the seachword in the characters
 */
function splitWord() {
  searchWordArray = searchWord;
  //  searchWordArray = searchWord.split("");
  searchWordLength = searchWord.length;
}

/**
 * create a div as a field for each character
 */
function createFields() {
  let main = document.querySelector("#wordsection");

  for (let i = 0; i < searchWord.length; i++) {
    //let characterFromArray = searchWordArray[i];
    let characterFromArray = searchWord[i];

    let characterField = document.createElement("div");
    let characterplace = document.createElement("p");
    characterField.setAttribute("data-char", characterFromArray);
    characterField.classList.add("characterbox");
    characterplace.classList.add("hidden");
    characterplace.classList.add("inline");

    characterplace.innerText = characterFromArray;
    main.append(characterField);
    characterField.append(characterplace);
  }
}

/**
 * attempt counter
 */
function attemptCounter() {}

/**
 * get the keyboard input
 */
document.body.addEventListener("keyup", (event) => {
  inputChar = event.key;
  checkInput();
});

/**
 * check the keyboard input with the searchWord, write the wrong input in the array
 */
function checkInput() {
  if (attempts > 0) {
    let counter = 0;

    for (let toValidate of domList.children) {
      let li = toValidate;
      let wordChar = li.getAttribute("data-char").toLowerCase();
      let pChar = toValidate.querySelector("p");

      if (wordChar === inputChar) {
        counter = counter + 1;
        pChar.classList.remove("hidden");
      }
    }
    let check = wrongKeys.includes(inputChar);

    if (counter === 0 && check === false) {
      wrongKeys.push(inputChar);
    }
  }
  countWrongAttempts();
}
/**
 * update and display the left attempts
 */
function countWrongAttempts() {
  leftAttempts = attempts - wrongKeys.length;
  let domAttempt = document.querySelector("#attempts");
  let counter = document.createElement("p");
  counter.innerText = leftAttempts;
  counter.classList.add("counter");
  let counterp = document.querySelector(".counter");
  if (counterp != null) {
    counterp.remove();
  }
  domAttempt.append(counter);
}
