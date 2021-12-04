function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector('.color')
const btnEl = document.querySelector('.change-color')

btnEl.addEventListener('click', () => {

  spanColorEl.textContent
   = document.body.style.backgroundColor
   = getRandomHexColor();
})

