const button = document.querySelector(".form_btn");
const input = document.querySelector(".form_input");
const errorText = document.querySelector(".form_error");

button.addEventListener("click", (e) => {

  e.preventDefault();

  let inputText = document.querySelector(".form_input").value;

  const mailRex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputText.match(mailRex)) {
    input.classList.remove("error");
    errorText.classList.add("hidden");
    alert("Great! You have subscribed.");
  } else if (inputText === "") {
    errorText.textContent = "Please enter your email first.";
    input.classList.add("error");
    errorText.classList.remove("hidden");
  } else {
    errorText.textContent = "Please provide valid email address.";
    input.classList.add("error");
    errorText.classList.remove("hidden");
  }

  setTimeout(() => {
    input.classList.remove("error");
    errorText.classList.add("hidden");
  }, 2000);
});
