const projectsContainer = document.querySelector("[data-list]");
const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");

const LOCAL_STORAGE_PROJECT_KEY = "task.projects";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

projectsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.listId;
    saveAndRender();
  }
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
});

deleteListButton.addEventListener("click", (e) => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveAndRender();
});

function createProject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
}

function render() {
  clearElement(projectsContainer);
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.listId = project.id;
    projectElement.classList.add("list-name");
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-list");
    }
    projectsContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
