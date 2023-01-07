/* document elements */
const addTaskButton = document.getElementById("add-task-button");

/* event listeners */
addTaskButton.addEventListener("click", handleAddTask);

const addTaskInput = document.getElementById("add-task-input");

function handleAddTask() {
  if (isValid(addTaskInput.value)) {
    addTask();
  } else {
    generateErrorMessage();
  }
  addTaskInput.value = "";
}

function addTask() {
  const task = createTask();
  const todoContainer = document.getElementById("todo-container");
  todoContainer.appendChild(task);
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

function isValid(taskInputText) {
  return taskInputText.length > 0 && taskInputText.length <= 100;
}

function generateErrorMessage() {
  const errorMessage = document.createElement("p");
  errorMessage.innerText =
    "Invalid input. Text must be between 1 and 100 characters long.";
  errorMessage.id = "error-message";
  errorMessage.classList.add("text--error");

  const addTaskContainer = document.getElementById("add-task-container");
  addTaskContainer.appendChild(errorMessage);

  const messageDuration = 2000;
  setTimeout(() => {
    errorMessage.remove();
  }, messageDuration);
}

function generateUuid() {
  const id = "id" + Math.random().toString(16).slice(2);
  return id;
}
