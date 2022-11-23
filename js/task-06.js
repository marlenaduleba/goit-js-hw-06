const validationInput = document.querySelector("input");
const requiredLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", () => {
  let currentLength = validationInput.value.length;

  if (currentLength == requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else if (currentLength === 0) {
    validationInput.classList.remove("valid", "invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
