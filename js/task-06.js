const inputEl = document.getElementById("validation-input");
const value = inputEl.getAttribute("data-length");
inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(value)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
