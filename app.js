const addTaskContainer = document.querySelector("#add-task-container");
addTaskContainer.addEventListener("submit", handleAddTask);

const addTaskInput = document.querySelector("#add-task-input");
const emptyStateMessage = document.querySelector("#empty-state-message");

function handleAddTask(event) {
  event.preventDefault();
  if (isValid(addTaskInput.value.trim())) {
    addTask();
  } else {
    generateErrorMessage();
  }

  if (
    !emptyStateMessage.classList.contains("text--hidden") &&
    getTaskCount() > 0
  ) {
    removeEmptyStateMessage();
  }

  addTaskInput.value = "";
}

function removeEmptyStateMessage() {
  emptyStateMessage.classList.add("text--hidden");
}

const taskContainer = document.querySelector("#task-container");

function addTask() {
  const task = createTask();
  taskContainer.appendChild(task);
}

function createTask() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  const taskText = document.createTextNode(addTaskInput.value.trim());
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
  errorMessage.classList.add("text--error");

  const addTaskContainer = document.querySelector("#add-task-container");
  addTaskContainer.appendChild(errorMessage);

  const messageDuration = 2000;
  setTimeout(() => {
    errorMessage.remove();
  }, messageDuration);
}

function getTaskCount() {
  return document.querySelector("#task-container").childElementCount;
}

function generateUuid() {
  return "id" + Math.random().toString(16).slice(2);
}
