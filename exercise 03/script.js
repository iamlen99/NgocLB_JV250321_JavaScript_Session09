let text = document.getElementById("text");

let hideText = document.getElementById("hide-text");
hideText.onclick = function () {
  text.classList.add("display-hidden");
  // text.style.display = "none";
};
let showText = document.getElementById("show-text");
showText.onclick = function () {
  text.classList.remove("display-hidden");
};
