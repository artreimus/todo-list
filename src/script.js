import {
  LOCAL_STORAGE_PROJECT_KEY,
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
  LOCAL_STORAGE_DEFAULT_PROJECT_KEY,
  saveLocalStorage,
} from "./storage.js";

import {
  projectsContainer,
  newProjectForm,
  newProjectInput,
  createProject,
  renderProjectList,
} from "./userProject.js";

import {
  tasksContainer,
  newTaskForm,
  newTaskInput,
  Task,
  renderProjectHeader,
  renderRemainingTask,
  projectContainer,
  renderTasks,
} from "./tasks.js";

import {
  defaultProjectsContainer,
  loadDefaultProjects,
  renderDefaultProjects,
} from "./defaultProject.js";
import { deleteProjectButton, clearCompleteTasksButton } from "./delete.js";
import {
  displayElement,
  clearElement,
  toggleElement,
  navButton,
  navContainer,
} from "./element.js";

let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let defaultProjects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_DEFAULT_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

export function renderEverything() {
  navButton.addEventListener("click", (e) => {
    toggleElement(navContainer, projectContainer);
  });

  projectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
    toggleElement(navContainer, projectContainer);
  });

  defaultProjectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
    toggleElement(navContainer, projectContainer);
  });

  tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      let selectedProject = selectedArray();

      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      saveLocalStorage(projects, selectedProjectId, defaultProjects);
      renderRemainingTask(selectedProject);
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

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = newTaskInput.value;
    if (taskName == null || taskName === "") return;
    const task = Task(taskName);
    newTaskInput.value = null;
    let selectedProject = selectedArray();
    selectedProject.tasks.push(task);
    saveAndRender();
  });

  clearCompleteTasksButton.addEventListener("click", (e) => {
    let selectedProject = selectedArray();
    selectedProject.tasks = selectedProject.tasks.filter(
      (task) => !task.complete
    );
    saveAndRender();
  });

  deleteProjectButton.addEventListener("click", (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectId);
    selectedProjectId = null;
    saveAndRender();
  });
  render();
}

function saveAndRender() {
  saveLocalStorage(projects, selectedProjectId, defaultProjects);
  render();
}

function render() {
  let selectedProject = selectedArray();

  renderDefaultProjects(defaultProjects, selectedProjectId);
  clearElement(projectsContainer);
  loadDefaultProjects(defaultProjects);
  renderProjectList(projects, selectedProjectId);

  if (selectedProjectId === null) {
    displayElement("none");
  } else {
    displayElement("");
    renderProjectHeader(selectedProject);
    clearElement(tasksContainer);
    renderTasks(selectedProject);
  }
}

function selectedArray() {
  let selectedProject;
  if (
    selectedProjectId === "tasks" ||
    selectedProjectId === "myWeek" ||
    selectedProjectId === "myDay"
  ) {
    selectedProject = defaultProjects.find(
      (project) => project.id === selectedProjectId
    );
  } else {
    selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
  }
  return selectedProject;
}
