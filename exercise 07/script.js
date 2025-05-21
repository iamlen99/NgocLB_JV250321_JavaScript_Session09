let myTodoList = [
  "Brush my teeth",
  "Wash my face",
  "Do exercise",
  "Listen to music",
  "Play game",
];

let todoList = document.getElementById("myUL");

function showTodoList() {
  let showTodos = "";
  for (let i = 0; i < myTodoList.length; i++) {
    let todo = `<li class="addChecked-el${i}" onclick = "addChecked(${i})">${myTodoList[i]} 
                <span class="close" onClick="deleteTodos(${i}, event)">X</span>
                </li>`;
    showTodos += todo;
  }
  todoList.innerHTML = showTodos;
}

function getInputValues() {
  let inputTodo = document.getElementById("myInput");
  let inputValue = inputTodo.value.trim();
  if (inputValue === "") {
    return;
  }
  myTodoList.push(inputValue);
  inputTodo.value = "";
  showTodoList();
}

function addTodos() {
  let addTodo = document.querySelector(".addBtn");
  addTodo.addEventListener("click", getInputValues);
}

function deleteTodos(index, event) {
  event.stopPropagation();
  myTodoList.splice(index, 1);
  showTodoList();
}

function addChecked(index) {
  let addCheckedElement = document.querySelector(`.addChecked-el${index}`);
  addCheckedElement.classList.toggle("checked");
}

showTodoList();
addTodos();
