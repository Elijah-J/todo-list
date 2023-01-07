/* document elements */
const addTaskButton = document.getElementById("add-task");

/* event listeners */
addTaskButton.addEventListener("click", addTask);

function addTask() {
  const task = createTask();
  const todoContainer = document.getElementById("todo-container");
  todoContainer.appendChild(task);
}

function createTask() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  const addTaskInput = document.getElementById("add-task-input");

  const taskText = document.createTextNode(addTaskInput.value);
  const removeTaskButton = document.createElement("button");
  removeTaskButton.innerText = "Remove";

  const fragment = document.createDocumentFragment();
  task = fragment.appendChild(li).appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(removeTaskButton);

  return fragment;
}
