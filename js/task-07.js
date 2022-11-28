const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const { min } = range;

range.value = min;

range.addEventListener("input", () => {
  let size = range.value;
  text.style.fontSize = size + "px";
});
