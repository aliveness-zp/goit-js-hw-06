function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const quantityEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const removeBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = quantityEl.value;

  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();

    boxesArr.push(boxEl);
  }
  boxesEl.append(...boxesArr);
}

createBtn.addEventListener("click", createBoxes);

const destoyBoxes = () => {
  boxesEl.innerHTML = "";
};

removeBtn.addEventListener("click", destoyBoxes);
