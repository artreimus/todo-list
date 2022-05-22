import {
  LOCAL_STORAGE_PROJECT_KEY,
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
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
  createTask,
  renderProjectHeader,
  renderRemainingTask,
  renderTasks,
} from "./projectTasks.js";

import { defaultProjectsContainer } from "./defaultProjects.js";

import { deleteProjectButton, clearCompleteTasksButton } from "./delete.js";

import { displayElement, clearElement } from "./element.js";

let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

export function renderEverything() {
  projectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
  });

  defaultProjectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
  });

  tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
      );
      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      saveLocalStorage(projects, selectedProjectId);
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
    const task = createTask(taskName);
    newTaskInput.value = null;
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks.push(task);
    saveAndRender();
  });

  clearCompleteTasksButton.addEventListener("click", (e) => {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
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
  saveLocalStorage(projects, selectedProjectId);
  render();
}

function render() {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  clearElement(projectsContainer);
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

renderEverything();
