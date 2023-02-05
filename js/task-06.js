const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputText.value.length === Number(inputText.dataset.length)) {
    inputText.classList.remove("invalid");
    return inputText.classList.add("valid");
  }

  return inputText.classList.add("invalid");
}
