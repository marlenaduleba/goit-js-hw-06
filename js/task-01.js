const categoriesArray = document.querySelectorAll(".item");
const categoriesNumber = categoriesArray.length;
console.log(`Number of categories: ${categoriesNumber}`);

console.log("");

categoriesArray.forEach((element) => {
  const list = element.querySelectorAll("li").length;
  const name = element.querySelector("h2").textContent;
  console.log(`Category: ${name}`);
  console.log(`Elements: ${list}`);
  console.log("");
});
