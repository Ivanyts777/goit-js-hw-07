const input = document.getElementById("validation-input");

input.classList.add("invalid");

input.onchange = function () {
  let inputValue = input.value;
  if (inputValue.length == 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
};

// const validInput = function () {
//   let inputValue = input.value;

//   if (inputValue.length == 6) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   }
// };

// input.addEventListener("blur", validInput);
