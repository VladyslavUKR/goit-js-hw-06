const categoriesEL = document.querySelector("#categories");
console.log("Number of categories:", categoriesEL.children.length);

const itemsEL = document.querySelectorAll(".item");
for (const item of itemsEL) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}
