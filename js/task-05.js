const inputText = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange() {
  if (inputText.value !== "") {
    nameText.textContent = inputText.value;
  } else {
    nameText.textContent = "Anonymous";
  }
}
