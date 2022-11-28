const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let fieldsValues = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  fieldsValues.email = email.value;
  fieldsValues.password = password.value;

  console.log(fieldsValues);
  event.currentTarget.reset();
}
