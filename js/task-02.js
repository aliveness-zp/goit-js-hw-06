const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Варіант 1

// const listOfIngredientsEl = document.querySelector("#ingredients");

// const listOfIngredientsLi = ingredients.map((ingredient) => {
//   const listOfIngredientsItem = document.createElement("li");
//   listOfIngredientsItem.classList.add("item");
//   listOfIngredientsItem.textContent = ingredient;

//   return listOfIngredientsItem;
// });

// listOfIngredientsEl.append(...listOfIngredientsLi);

// console.log(listOfIngredientsEl);

// Варіант 2 (Функція)

const listOfIngredientsEl = document.querySelector("#ingredients");

const listOfIngredientsLi = (callback) => {
  return callback.map((ingredient) => {
    const listOfIngredientsItem = document.createElement("li");
    listOfIngredientsItem.classList.add("item");
    listOfIngredientsItem.textContent = ingredient;

    return listOfIngredientsItem;
  });
};

const elements = listOfIngredientsLi(ingredients);

listOfIngredientsEl.append(...elements);

console.log(listOfIngredientsEl);
