let form = document.getElementById("myform");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputValue();
});

function checkInputValue() {
  let userName = document.getElementById("username").value.trim();
  let passWord = document.getElementById("password").value.trim();
  if (userName === "huanrose@gmail.com" && passWord === "123456") {
    console.log("Đăng nhập thành công!");
  } else {
    console.log("Đăng nhập thất bại!");
  }
}
