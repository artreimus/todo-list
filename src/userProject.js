import { createProjectElement } from "./element.js";

export const projectsContainer = document.querySelector("[data-user-projects]");
export const newProjectForm = document.querySelector("[data-new-project-form]");
export const newProjectInput = document.querySelector(
  "[data-new-project-input]"
);

export function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

export function renderProjectList(projects, selectedProjectId) {
  projects.forEach((project) => {
    const projectElement = createProjectElement(project, selectedProjectId);
    projectsContainer.appendChild(projectElement);
  });
}
