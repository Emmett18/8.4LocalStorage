const todoForm = document.getElementById("add_todo");
const todoInput = document.getElementById("task");
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

savedTodos.forEach(function (todo) {
  // I had to redo this assignment as it didn't quite work, this time I used my forEach knowledge
  const newTodo = document.createElement("li");
  newTodo.innerText = todo.slice(0, todo.length - 1);

  const removeTodo = document.createElement("button");
  removeTodo.innerText = "X";
  newTodo.appendChild(removeTodo);
  todoList.appendChild(newTodo);
});

//Remove/line through
todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    //delete an li and update the local storage
    e.target.parentElement.remove();
    savedTodos.length = 0; // Reset savedTodos array
    localStorage.clear();
    const todoList = document.getElementsByTagName("li");
    for (let i = 0; i < todoList.length; i++) {
      // Iterate through Li's to see what goes in local storage
      savedTodos.push(todoList[i].innerText);
    }
    localStorage.setItem("todos", JSON.stringify(savedTodos)); //Saving Li's to local storage
  } else if (e.target.tagName === "LI") {
    // If the user clicks on the word to draw a line through the li
    e.target.classList.toggle("completed");
  }
});

todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents page refresh when form submit
  const newTodo = document.createElement("li");
  const removeTodo = document.createElement("button");
  removeTodo.innerText = "X";
  newTodo.innerText = todoInput.value;
  newTodo.appendChild(removeTodo);
  todoList.appendChild(newTodo);
  todoInput.value = "";

  // save to localStorage
  savedTodos.push(newTodo.innerText);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});
