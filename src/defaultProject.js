import { clearElement, createProjectElement } from "./element.js";

export const defaultProjectsContainer = document.querySelector(
  "[data-default-projects]"
);

export function createDefaultProject(name, id) {
  return {
    name: name,
    id: id,
    tasks: [],
  };
}

export function renderDefaultProjects(defaultProjects, selectedProjectId) {
  clearElement(defaultProjectsContainer);
  defaultProjects.forEach((project) => {
    const projectElement = createProjectElement(project, selectedProjectId);
    defaultProjectsContainer.appendChild(projectElement);
  });
}

export function loadDefaultProjects(defaultProjects) {
  if (defaultProjects.length === 0) {
    let project = createDefaultProject("Tasks", "tasks");
    defaultProjects.push(project);
    project = createDefaultProject("My Day", "myDay");
    defaultProjects.push(project);
    project = createDefaultProject("My Week", "myWeek");
    defaultProjects.push(project);
    console.log("*");
  }
}
