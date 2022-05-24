import { projectHeader, tasksContainer, newTaskForm } from "./tasks.js";
import { projectDeleteContainer } from "./delete.js";

export const navButton = document.querySelector("[data-nav-button]");
export const navContainer = document.querySelector("[data-nav-container]");

export function displayElement(display) {
  removeClassFromElement();
  projectHeader.style.display = display;
  tasksContainer.style.display = display;
  newTaskForm.style.display = display;
  projectDeleteContainer.style.display = display;
}

function removeClassFromElement() {
  projectDeleteContainer.classList.remove("none");
  newTaskForm.classList.remove("none");
}

export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createProjectElement(project, selectedProjectId) {
  const projectElement = document.createElement("li");
  projectElement.dataset.listId = project.id;
  projectElement.classList.add("list-name");

  if (project.name === "Tasks") {
    projectElement.classList.add("nav-tasks");
    projectElement.innerHTML = `<i class="fa-solid fa-pencil"></i> ${project.name}`;
  } else if (project.name === "My Day") {
    projectElement.classList.add("nav-day");
    projectElement.innerHTML = `<i class="fa-solid fa-sun"></i> ${project.name}`;
  } else if (project.name == "My Week") {
    projectElement.classList.add("nav-week");
    projectElement.innerHTML = `<i class="fa-solid fa-calendar-week"></i> ${project.name}`;
  } else {
    projectElement.innerHTML = `<i class="fa-solid fa-bars"></i> ${project.name}`;
  }

  if (project.id === selectedProjectId) {
    projectElement.classList.add("active-list");
  }
  return projectElement;
}

export function toggleElement(navContainer, projectContainer) {
  navContainer.classList.toggle("show");
  projectContainer.classList.toggle("hide");
}
