const input = document.getElementById("font-size-control");
let span = document.getElementById("text");

input.addEventListener("input", (e) => {
  span.style.fontSize = input.value + "px";
});

// input.oninput = function () {
//   span.style.fontSize = input.value + "px";
// };
