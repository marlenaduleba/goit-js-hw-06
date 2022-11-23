const validationInput = document.querySelector("input");

validationInput.addEventListener("blur", (event) => {
  const textLength = event.currentTarget.value.length;

  if (textLength > 0 && textLength <= 6) {
    validationInput.classList.add("valid");
    validationInput.classList.replace("invalid", "valid");
  } else if (textLength > 6) {
    validationInput.classList.replace("valid", "invalid");
  } else {
    validationInput.classList.remove("valid", "invalid");
  }
});
