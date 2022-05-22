export const defaultProjectsContainer = document.querySelector(
  "[data-default-projects]"
);

export function renderProjectList(projects, selectedProjectId) {
  defaultProjects.forEach((project) => {
    if (defaultProject.id === selectedProjectId) {
      projectElement.classList.add("active-list");
    }
    projectsContainer.appendChild(projectElement);
  });
}
