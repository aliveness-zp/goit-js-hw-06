const inputText = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange() {
  nameText.textContent = inputText.value;
}
