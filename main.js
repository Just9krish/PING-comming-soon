const button = document.querySelector(".form_btn");
const input = document.querySelector(".form_input");
const errorText = document.querySelector(".form_error");

button.addEventListener("click", (e) => {
  e.preventDefault();

  input.classList.add("error");
  errorText.classList.remove("hidden");

  setTimeout(() => {
    input.classList.remove("error");
    errorText.classList.add("hidden");
  }, 2000);
});
