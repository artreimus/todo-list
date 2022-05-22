import { projectHeader, tasksContainer, newTaskForm } from "./projectTasks.js";
import { projectDeleteContainer } from "./delete.js";

export function displayElement(display) {
  projectHeader.style.display = display;
  tasksContainer.style.display = display;
  newTaskForm.style.display = display;
  projectDeleteContainer.style.display = display;
}

export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
