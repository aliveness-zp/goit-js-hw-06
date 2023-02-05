const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", function (event) {
  textEl.style.fontSize = inputRangeEl.value + "px";
});
