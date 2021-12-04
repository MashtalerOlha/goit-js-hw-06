const spanEl = document.querySelector("span");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
});
