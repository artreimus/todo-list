"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/defaultProjects.js":
/*!********************************!*\
  !*** ./src/defaultProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProjectsContainer": () => (/* binding */ defaultProjectsContainer),
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList)
/* harmony export */ });
const defaultProjectsContainer = document.querySelector(
  "[data-default-projects]"
);

function renderProjectList(projects, selectedProjectId) {
  defaultProjects.forEach((project) => {
    if (defaultProject.id === selectedProjectId) {
      projectElement.classList.add("active-list");
    }
    projectsContainer.appendChild(projectElement);
  });
}


/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCompleteTasksButton": () => (/* binding */ clearCompleteTasksButton),
/* harmony export */   "deleteProjectButton": () => (/* binding */ deleteProjectButton),
/* harmony export */   "projectDeleteContainer": () => (/* binding */ projectDeleteContainer)
/* harmony export */ });
const projectDeleteContainer = document.querySelector(
  "[data-project-delete-container]"
);
const deleteProjectButton = document.querySelector(
  "[data-delete-list-button]"
);
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks]"
);


/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearElement": () => (/* binding */ clearElement),
/* harmony export */   "displayElement": () => (/* binding */ displayElement)
/* harmony export */ });
/* harmony import */ var _projectTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectTasks.js */ "./src/projectTasks.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.js */ "./src/delete.js");



function displayElement(display) {
  _projectTasks_js__WEBPACK_IMPORTED_MODULE_0__.projectHeader.style.display = display;
  _projectTasks_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.style.display = display;
  _projectTasks_js__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.style.display = display;
  _delete_js__WEBPACK_IMPORTED_MODULE_1__.projectDeleteContainer.style.display = display;
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/script.js");
// import "./style.css";


(0,_script_js__WEBPACK_IMPORTED_MODULE_0__.renderEverything)();
// document.addEventListener("DOMContentLoaded", UI.loadHomepage);


/***/ }),

/***/ "./src/projectTasks.js":
/*!*****************************!*\
  !*** ./src/projectTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "newTaskForm": () => (/* binding */ newTaskForm),
/* harmony export */   "newTaskInput": () => (/* binding */ newTaskInput),
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader),
/* harmony export */   "renderProjectHeader": () => (/* binding */ renderProjectHeader),
/* harmony export */   "renderRemainingTask": () => (/* binding */ renderRemainingTask),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer)
/* harmony export */ });
const projectHeader = document.querySelector("[data-project-header]");
const projectTitle = document.querySelector("[data-project-title]");
const projectRemainingTask = document.querySelector("[data-project-count]");
const tasksContainer = document.querySelector("[data-project-body]");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskTemplate = document.getElementById("task-template");

function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
  };
}

function renderProjectHeader(selectedProject) {
  renderProjectTitle(selectedProject);
  renderRemainingTask(selectedProject);
}

function renderProjectTitle(selectedProject) {
  projectTitle.innerText = selectedProject.name;
}

function renderRemainingTask(selectedProject) {
  const incompleteTaskCount = selectedProject.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  projectRemainingTask.innerText = `Remaining ${taskString}: ${incompleteTaskCount}`;
}

function renderTasks(selectedProject) {
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


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEverything": () => (/* binding */ renderEverything)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _userProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userProject.js */ "./src/userProject.js");
/* harmony import */ var _projectTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectTasks.js */ "./src/projectTasks.js");
/* harmony import */ var _defaultProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultProjects.js */ "./src/defaultProjects.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete.js */ "./src/delete.js");
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element.js */ "./src/element.js");












let projects =
  JSON.parse(localStorage.getItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

function renderEverything() {
  _userProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
  });

  _defaultProjects_js__WEBPACK_IMPORTED_MODULE_3__.defaultProjectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
  });

  _projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
      );
      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(projects, selectedProjectId);
      (0,_projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.renderRemainingTask)(selectedProject);
    }
  });

  _userProject_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = _userProject_js__WEBPACK_IMPORTED_MODULE_1__.newProjectInput.value;
    if (projectName == null || projectName === "") return;
    const project = (0,_userProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName);
    _userProject_js__WEBPACK_IMPORTED_MODULE_1__.newProjectInput.value = null;
    projects.push(project);
    saveAndRender();
  });

  _projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = _projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskInput.value;
    if (taskName == null || taskName === "") return;
    const task = (0,_projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskName);
    _projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskInput.value = null;
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks.push(task);
    saveAndRender();
  });

  _delete_js__WEBPACK_IMPORTED_MODULE_4__.clearCompleteTasksButton.addEventListener("click", (e) => {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks = selectedProject.tasks.filter(
      (task) => !task.complete
    );
    saveAndRender();
  });

  _delete_js__WEBPACK_IMPORTED_MODULE_4__.deleteProjectButton.addEventListener("click", (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectId);
    selectedProjectId = null;
    saveAndRender();
  });
  render();
}

function saveAndRender() {
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(projects, selectedProjectId);
  render();
}

function render() {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.clearElement)(_userProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsContainer);
  (0,_userProject_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)(projects, selectedProjectId);

  if (selectedProjectId === null) {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)("none");
  } else {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)("");
    (0,_projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.renderProjectHeader)(selectedProject);
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.clearElement)(_projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasksContainer);
    (0,_projectTasks_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(selectedProject);
  }
}

renderEverything();


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCAL_STORAGE_DEFAULT_PROJECT_KEY": () => (/* binding */ LOCAL_STORAGE_DEFAULT_PROJECT_KEY),
/* harmony export */   "LOCAL_STORAGE_PROJECT_KEY": () => (/* binding */ LOCAL_STORAGE_PROJECT_KEY),
/* harmony export */   "LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY": () => (/* binding */ LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY),
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage)
/* harmony export */ });
const LOCAL_STORAGE_PROJECT_KEY = "task.projects";
const LOCAL_STORAGE_DEFAULT_PROJECT_KEY = "task.defaultProjects";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";

function saveLocalStorage(projects, selectedProjectId) {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
  //   localStorage.setItem(
  //     LOCAL_STORAGE_DEFAULT_PROJECT_KEY,
  //     JSON.stringify(defaultProjects)
  //   );
}


/***/ }),

/***/ "./src/userProject.js":
/*!****************************!*\
  !*** ./src/userProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "newProjectInput": () => (/* binding */ newProjectInput),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "renderProjectList": () => (/* binding */ renderProjectList)
/* harmony export */ });
const projectsContainer = document.querySelector("[data-user-projects]");

const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector(
  "[data-new-project-input]"
);

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function renderProjectList(projects, selectedProjectId) {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWZhdWx0UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VyUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1kZWZhdWx0LXByb2plY3RzXVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKGRlZmF1bHRQcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCkge1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saXN0XCIpO1xuICAgIH1cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3REZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXByb2plY3QtZGVsZXRlLWNvbnRhaW5lcl1cIlxuKTtcbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dXCJcbik7XG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jbGVhci1jb21wbGV0ZS10YXNrc11cIlxuKTtcbiIsImltcG9ydCB7IHByb2plY3RIZWFkZXIsIHRhc2tzQ29udGFpbmVyLCBuZXdUYXNrRm9ybSB9IGZyb20gXCIuL3Byb2plY3RUYXNrcy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdERlbGV0ZUNvbnRhaW5lciB9IGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVsZW1lbnQoZGlzcGxheSkge1xuICBwcm9qZWN0SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB0YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIHByb2plY3REZWxldGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyRXZlcnl0aGluZyB9IGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuXG5yZW5kZXJFdmVyeXRoaW5nKCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkSG9tZXBhZ2UpO1xuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1oZWFkZXJdXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xuY29uc3QgcHJvamVjdFJlbWFpbmluZ1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1jb3VudF1cIik7XG5leHBvcnQgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1ib2R5XVwiKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1mb3JtXVwiKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2staW5wdXRdXCIpO1xuY29uc3QgbmV3VGFza1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRlbXBsYXRlXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpO1xuICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpIHtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpIHtcbiAgY29uc3QgaW5jb21wbGV0ZVRhc2tDb3VudCA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICkubGVuZ3RoO1xuICBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiO1xuICBwcm9qZWN0UmVtYWluaW5nVGFzay5pbm5lclRleHQgPSBgUmVtYWluaW5nICR7dGFza1N0cmluZ306ICR7aW5jb21wbGV0ZVRhc2tDb3VudH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHNlbGVjdGVkUHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKG5ld1Rhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja0JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zb2xlLmxvZyhjaGVja0JveCk7XG4gICAgY2hlY2tCb3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1xuICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICBzYXZlTG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmltcG9ydCB7XG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBuZXdQcm9qZWN0Rm9ybSxcbiAgbmV3UHJvamVjdElucHV0LFxuICBjcmVhdGVQcm9qZWN0LFxuICByZW5kZXJQcm9qZWN0TGlzdCxcbn0gZnJvbSBcIi4vdXNlclByb2plY3QuanNcIjtcblxuaW1wb3J0IHtcbiAgdGFza3NDb250YWluZXIsXG4gIG5ld1Rhc2tGb3JtLFxuICBuZXdUYXNrSW5wdXQsXG4gIGNyZWF0ZVRhc2ssXG4gIHJlbmRlclByb2plY3RIZWFkZXIsXG4gIHJlbmRlclJlbWFpbmluZ1Rhc2ssXG4gIHJlbmRlclRhc2tzLFxufSBmcm9tIFwiLi9wcm9qZWN0VGFza3MuanNcIjtcblxuaW1wb3J0IHsgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyIH0gZnJvbSBcIi4vZGVmYXVsdFByb2plY3RzLmpzXCI7XG5cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RCdXR0b24sIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbiB9IGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuXG5pbXBvcnQgeyBkaXNwbGF5RWxlbWVudCwgY2xlYXJFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRXZlcnl0aGluZygpIHtcbiAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgICApO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbmQoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBzYXZlTG9jYWxTdG9yYWdlKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrSW5wdXQudmFsdWU7XG4gICAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTmFtZSk7XG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gbnVsbDtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICAgKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgKTtcbiAgY2xlYXJFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcbiAgcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQgPT09IG51bGwpIHtcbiAgICBkaXNwbGF5RWxlbWVudChcIm5vbmVcIik7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUVsZW1lbnQoXCJcIik7XG4gICAgcmVuZGVyUHJvamVjdEhlYWRlcihzZWxlY3RlZFByb2plY3QpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG4gICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgfVxufVxuXG5yZW5kZXJFdmVyeXRoaW5nKCk7XG4iLCJleHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9IFwidGFzay5wcm9qZWN0c1wiO1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSA9IFwidGFzay5kZWZhdWx0UHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkUHJvamVjdElkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICAgIHNlbGVjdGVkUHJvamVjdElkXG4gICk7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gIC8vICAgICBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVksXG4gIC8vICAgICBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdHMpXG4gIC8vICAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS11c2VyLXByb2plY3RzXVwiKTtcblxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IHByb2plY3QuaWQ7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXBlbmNpbFwiKTtcblxuICAgIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCkge1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saXN0XCIpO1xuICAgIH1cbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5jaWxcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==