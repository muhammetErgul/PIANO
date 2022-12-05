const volumeSlider = document.querySelector(".volumeSlider input");
const keysCheckbox = document.querySelector(".keysCheckbox input");
const keyLetters = document.querySelectorAll(".key span");
const pianoKeys = document.querySelectorAll(".key");

let letters = "AWSEDFTGYHUJKOLPQ";
let audio = new Audio();
function playTune(key) {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  let clickedKey = document.querySelector(`[data-key=${key}]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

function pressedKey(e) {
  if (letters.match(e.key.toUpperCase())) {
    playTune(e.key);
  }
}

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

keysCheckbox.addEventListener("click", () => {
  keyLetters.forEach((key) => {
    key.classList.toggle("hide");
  });
});

document.addEventListener("keydown", pressedKey);
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});
