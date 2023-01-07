/* document elements */
const addTaskButton = document.getElementById("add-task");

/* event listeners */
addTaskButton.addEventListener("click", addTask);

const addTaskInput = document.getElementById("add-task-input");

function addTask() {
  const task = createTask();
  const todoContainer = document.getElementById("todo-container");
  todoContainer.appendChild(task);

  addTaskInput.value = "";
}

function createTask() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  const taskText = document.createTextNode(addTaskInput.value);
  const removeTaskButton = document.createElement("button");
  removeTaskButton.innerText = "Remove";

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(removeTaskButton);
  li.id = generateUuid();

  return li;
}

function generateUuid() {
  const id = "id" + Math.random().toString(16).slice(2);
  return id;
}
