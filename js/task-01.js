const liItemEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${liItemEl.length}`);

liItemEl.forEach((element) => {
  const titleElement = element.querySelector("h2").textContent;
  console.log(`Category: ${titleElement}`);

  const liElementsCount = element.querySelectorAll("ul > li").length;
  console.log(`Elements: ${liElementsCount}`);
});
