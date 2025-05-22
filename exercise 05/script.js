let container = document.getElementById("container");
let green = document.getElementById("green");
let red = document.getElementById("red");
let purple = document.getElementById("purple");

green.onclick = function () {
  container.classList.add("green");
  container.classList.remove("red");
  container.classList.remove("purple");
};

red.onclick = function () {
  container.classList.add("red");
  container.classList.remove("green");
  container.classList.remove("purple");
};

purple.onclick = function () {
  container.classList.add("purple");
  container.classList.remove("green");
  container.classList.remove("red");
};
