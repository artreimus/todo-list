export const projectHeader = document.querySelector("[data-project-header]");
const projectTitle = document.querySelector("[data-project-title]");
const projectRemainingTask = document.querySelector("[data-project-count]");
export const tasksContainer = document.querySelector("[data-project-body]");
export const newTaskForm = document.querySelector("[data-new-task-form]");
export const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskTemplate = document.getElementById("task-template");

export function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
  };
}

export function renderProjectHeader(selectedProject) {
  renderProjectTitle(selectedProject);
  renderRemainingTask(selectedProject);
}

function renderProjectTitle(selectedProject) {
  projectTitle.innerText = selectedProject.name;
}

export function renderRemainingTask(selectedProject) {
  const incompleteTaskCount = selectedProject.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  projectRemainingTask.innerText = `Remaining ${taskString}: ${incompleteTaskCount}`;
}

export function renderTasks(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(newTaskTemplate.content, true);
    const checkBox = taskElement.querySelector("input");
    console.log(checkBox);
    checkBox.id = task.id;
    checkBox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
}
