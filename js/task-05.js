const spanEl = document.querySelector("span");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? spanEl.textContent = 'Anonymous'
    : spanEl.textContent = event.currentTarget.value;
});