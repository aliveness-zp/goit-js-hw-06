const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("change", function (event) {
  textEl.style.fontSize = this.value + "px";
});
