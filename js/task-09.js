const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

btnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
});
