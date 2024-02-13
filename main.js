const NO_BTN_LINES = [
  "Nope",
  "Seriously?",
  "Absolutely not?",
  "Take a moment to reconsider!",
  "Last opportunity!",
  "One more chance",
  "Still not convinced?",
  "Are you completely certain?",
  "Show some compassion!",
  "Feeling any different?",
  "Maybe rethink your decision?",
  "Any second thoughts?",
  "You're shattering my heart ;(",
  "Doubting your judgment",
  "Reconsidering ?",
  "Are you sure ?",
  "Don't break my heart pwease!",
  "Final verdict ? :(",
];

const catGIF = document.getElementById("cat__gif");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes__btn");
const noBtn = document.getElementById("no__btn");
const btnContainer = document.getElementById("btn__container");
const slideShowContainer = document.getElementById("slideshow-container");

// yesPressed fetched from local storage
let pressedYes = localStorage.getItem("YES_PRESSED");

// If it doesn't exist or it's null, initialize it to false
if (pressedYes === null) {
  pressedYes = false;
}

// initial no count and pressed yes state
let noCount = 0;

function noClickHandler() {
  noCount++;
  newNoBtnText();
  if (noCount === NO_BTN_LINES.length) {
    question.textContent = "You broke my heart into pweaces :(";
    catGIF.src = "https://media.tenor.com/P3RqQUUK9BAAAAAM/rip-juice-cry.gif";
    noBtn.disabled = true;
    noBtn.style.cursor = "not-allowed";
    noBtn.textContent = "Feeling bad for me ? Just say yes.";
  }
}

function noBtnTextGenerate() {
  return NO_BTN_LINES[Math.min(noCount, NO_BTN_LINES.length - 1)];
}

function newNoBtnText() {
  const btnText = noBtnTextGenerate();
  noBtn.textContent = btnText;
}

function yesClickHandler() {
  pressedYes = true;
  // catGIF.src = "./assets/cat-kissing.gif";
  catGIF.style.display = "none";
  slideShowContainer.style.display = "block";
  question.textContent = "Yaaayyy! So, when shall we go on a date?";
  /* noBtn.textContent = "lessgooo";
  noBtn.disabled = true;
  noBtn.style.cursor = "not-allowed";
  noBtn.style.backgroundColor = "#089f00"; 
  noBtn.style.display = "none";
  yesBtn.disabled = true;
  yesBtn.style.cursor = "not-allowed";*/
  btnContainer.style.display = "none";
  localStorage.setItem("YES_PRESSED", JSON.stringify(pressedYes));
}

//  if 'pressedYes' is true
if (pressedYes) {
  btnContainer.style.display = "none";
  // catGIF.style = "./assets/cat-kissing.gif";
  catGIF.style.display = "none";
  slideShowContainer.style.display = "block";
  question.textContent = "Yaaayyy! So, when shall we go on a date?";
}

yesBtn.addEventListener("click", yesClickHandler);
noBtn.addEventListener("click", () => {
  noClickHandler();
});

/** IMAGE SLIDER PART */
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
