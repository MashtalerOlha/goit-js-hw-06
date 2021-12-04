const spanEl = document.getElementById("text");
const scrollEl = document.getElementById("font-size-control");

scrollEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
});
