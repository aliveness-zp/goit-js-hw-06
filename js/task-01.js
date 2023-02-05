const listCategories = document.querySelector("#categories");

const listCategoriesItems = listCategories.querySelectorAll(".item");

console.log("Number of categories:", listCategoriesItems.length);

for (let listCategoriesItem of listCategoriesItems) {
  console.log("Category:", listCategoriesItem.firstElementChild.textContent);
  console.log("Elements:", listCategoriesItem.lastElementChild.children.length);
}
