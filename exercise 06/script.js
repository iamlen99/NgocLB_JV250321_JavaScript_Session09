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
    let todo = `<li>${myTodoList[i]} 
                <span class="close">X</span>
                </li>`;
    showTodos += todo;
  }
  todoList.innerHTML = showTodos;
}

showTodoList();
