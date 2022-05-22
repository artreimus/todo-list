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
    const projectElement = document.createElement("li");
    projectElement.dataset.listId = project.id;
    projectElement.classList.add("list-name");
    const projectIcon = document.createElement("i");
    projectIcon.classList.add("fa-solid", "fa-pencil");

    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-list");
    }
    projectElement.innerHTML = `<i class="fa-solid fa-pencil"></i> ${project.name}`;
    projectsContainer.appendChild(projectElement);
  });
}
