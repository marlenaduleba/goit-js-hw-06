function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const { min } = input;

function createBoxes(amount) {
  let n = 0;

  for (let i = min; i <= amount; i++) {
    n += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.width = 20 + n + "px";
    newBox.style.height = 20 + n + "px";
    boxes.append(newBox);
  }
  return boxes;
}

function destroyBoxex() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  destroyBoxex();
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxex();
});
