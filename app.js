const addTaskContainer = document.querySelector("#add-task-container");
addTaskContainer.addEventListener("submit", handleAddTask);

const taskContainer = document.querySelector("#task-container");
taskContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("display__button--remove")) {
    handleRemoveTask(e);
  }
});

const addTaskInput = document.querySelector("#add-task-input");
const emptyStateMessage = document.querySelector("#empty-state-message");

function handleAddTask(event) {
  event.preventDefault();
  if (isValid(addTaskInput.value.trim())) {
    addTask();
  } else {
    showErrorMessage();
  }

  if (
    !emptyStateMessage.classList.contains("text--hidden") &&
    getTaskCount() > 0
  ) {
    removeEmptyStateMessage();
  }

  addTaskInput.value = "";
}

function handleRemoveTask(event) {
  removeTask(event);

  if (getTaskCount() === 0) {
    emptyStateMessage.classList.remove("text--hidden");
  }
}

function removeTask(event) {
  event.target.parentElement.remove();
}

function createTask() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  const taskText = document.createTextNode(addTaskInput.value.trim());

  const removeTaskButton = document.createElement("button");
  removeTaskButton.innerText = "Remove";
  removeTaskButton.classList.add("display__button--remove");

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(removeTaskButton);
  li.id = generateUuid();

  return li;
}

function isValid(taskInputText) {
  return taskInputText.length > 0 && taskInputText.length <= 100;
}

function addTask() {
  const task = createTask();
  taskContainer.appendChild(task);
}

function getTaskCount() {
  return document.querySelector("#task-container").childElementCount;
}

function showErrorMessage() {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.classList.remove("text--hidden");

  const messageDuration = 2000;
  setTimeout(() => {
    errorMessage.classList.add("text--hidden");
  }, messageDuration);
}

function removeEmptyStateMessage() {
  emptyStateMessage.classList.add("text--hidden");
}

function generateUuid() {
  return "id" + Math.random().toString(16).slice(2);
}
