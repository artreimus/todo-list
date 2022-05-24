"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/defaultProject.js":
/*!*******************************!*\
  !*** ./src/defaultProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultProject": () => (/* binding */ createDefaultProject),
/* harmony export */   "defaultProjectsContainer": () => (/* binding */ defaultProjectsContainer),
/* harmony export */   "loadDefaultProjects": () => (/* binding */ loadDefaultProjects),
/* harmony export */   "renderDefaultProjects": () => (/* binding */ renderDefaultProjects)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");


const defaultProjectsContainer = document.querySelector(
  "[data-default-projects]"
);

function createDefaultProject(name, id) {
  return {
    name: name,
    id: id,
    tasks: [],
  };
}

function renderDefaultProjects(defaultProjects, selectedProjectId) {
  (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.clearElement)(defaultProjectsContainer);
  defaultProjects.forEach((project) => {
    const projectElement = (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.createProjectElement)(project, selectedProjectId);
    defaultProjectsContainer.appendChild(projectElement);
  });
}

function loadDefaultProjects(defaultProjects) {
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
/* harmony export */   "createProjectElement": () => (/* binding */ createProjectElement),
/* harmony export */   "displayElement": () => (/* binding */ displayElement),
/* harmony export */   "navButton": () => (/* binding */ navButton),
/* harmony export */   "navContainer": () => (/* binding */ navContainer),
/* harmony export */   "toggleElement": () => (/* binding */ toggleElement)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.js */ "./src/delete.js");



const navButton = document.querySelector("[data-nav-button]");
const navContainer = document.querySelector("[data-nav-container]");

function displayElement(display) {
  removeClassFromElement();
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.projectHeader.style.display = display;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.style.display = display;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.style.display = display;
  _delete_js__WEBPACK_IMPORTED_MODULE_1__.projectDeleteContainer.style.display = display;
}

function removeClassFromElement() {
  _delete_js__WEBPACK_IMPORTED_MODULE_1__.projectDeleteContainer.classList.remove("none");
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.classList.remove("none");
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createProjectElement(project, selectedProjectId) {
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

function toggleElement(navContainer, projectContainer) {
  navContainer.classList.toggle("show");
  projectContainer.classList.toggle("hide");
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
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _defaultProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultProject.js */ "./src/defaultProject.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete.js */ "./src/delete.js");
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element.js */ "./src/element.js");










let projects =
  JSON.parse(localStorage.getItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECT_KEY)) || [];
let defaultProjects =
  JSON.parse(localStorage.getItem(_storage_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_DEFAULT_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

function renderEverything() {
  _element_js__WEBPACK_IMPORTED_MODULE_5__.navButton.addEventListener("click", (e) => {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(_element_js__WEBPACK_IMPORTED_MODULE_5__.navContainer, _tasks_js__WEBPACK_IMPORTED_MODULE_2__.projectContainer);
  });

  _userProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(_element_js__WEBPACK_IMPORTED_MODULE_5__.navContainer, _tasks_js__WEBPACK_IMPORTED_MODULE_2__.projectContainer);
  });

  _defaultProject_js__WEBPACK_IMPORTED_MODULE_3__.defaultProjectsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.listId;
      saveAndRender();
    }
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(_element_js__WEBPACK_IMPORTED_MODULE_5__.navContainer, _tasks_js__WEBPACK_IMPORTED_MODULE_2__.projectContainer);
  });

  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      let selectedProject = selectedArray();

      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(projects, selectedProjectId, defaultProjects);
      (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.renderRemainingTask)(selectedProject);
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

  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = _tasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskInput.value;
    if (taskName == null || taskName === "") return;
    const task = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.Task)(taskName);
    _tasks_js__WEBPACK_IMPORTED_MODULE_2__.newTaskInput.value = null;
    let selectedProject = selectedArray();
    selectedProject.tasks.push(task);
    saveAndRender();
  });

  _delete_js__WEBPACK_IMPORTED_MODULE_4__.clearCompleteTasksButton.addEventListener("click", (e) => {
    let selectedProject = selectedArray();
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
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(projects, selectedProjectId, defaultProjects);
  render();
}

function render() {
  let selectedProject = selectedArray();

  (0,_defaultProject_js__WEBPACK_IMPORTED_MODULE_3__.renderDefaultProjects)(defaultProjects, selectedProjectId);
  (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.clearElement)(_userProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsContainer);
  (0,_defaultProject_js__WEBPACK_IMPORTED_MODULE_3__.loadDefaultProjects)(defaultProjects);
  (0,_userProject_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)(projects, selectedProjectId);

  if (selectedProjectId === null) {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)("none");
  } else {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)("");
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.renderProjectHeader)(selectedProject);
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.clearElement)(_tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasksContainer);
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(selectedProject);
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

function saveLocalStorage(projects, selectedProjectId, defaultProjects) {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
  localStorage.setItem(
    LOCAL_STORAGE_DEFAULT_PROJECT_KEY,
    JSON.stringify(defaultProjects)
  );
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "newTaskForm": () => (/* binding */ newTaskForm),
/* harmony export */   "newTaskInput": () => (/* binding */ newTaskInput),
/* harmony export */   "projectContainer": () => (/* binding */ projectContainer),
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
const projectContainer = document.querySelector(
  "[data-project-preview]"
);

function Task(name, dueDate = "No Date") {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
    dueDate: dueDate,
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
    checkBox.id = task.id;
    checkBox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
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
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");


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
    const projectElement = (0,_element_js__WEBPACK_IMPORTED_MODULE_0__.createProjectElement)(project, selectedProjectId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNEQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KTztBQUNBO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTztBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVcsSUFBSSxvQkFBb0I7QUFDbkY7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERvRDs7QUFFN0M7QUFDQTtBQUNBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsMkJBQTJCLGlFQUFvQjtBQUMvQztBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWZhdWx0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlclByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYXJFbGVtZW50LCBjcmVhdGVQcm9qZWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtZGVmYXVsdC1wcm9qZWN0c11cIlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KG5hbWUsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpZDogaWQsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgY2xlYXJFbGVtZW50KGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lcik7XG4gIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LCBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cykge1xuICBpZiAoZGVmYXVsdFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoXCJUYXNrc1wiLCBcInRhc2tzXCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIk15IERheVwiLCBcIm15RGF5XCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIk15IFdlZWtcIiwgXCJteVdlZWtcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coXCIqXCIpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdERlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtcHJvamVjdC1kZWxldGUtY29udGFpbmVyXVwiXG4pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbl1cIlxuKTtcbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzXVwiXG4pO1xuIiwiaW1wb3J0IHsgcHJvamVjdEhlYWRlciwgdGFza3NDb250YWluZXIsIG5ld1Rhc2tGb3JtIH0gZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IHByb2plY3REZWxldGVDb250YWluZXIgfSBmcm9tIFwiLi9kZWxldGUuanNcIjtcblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmF2LWNvbnRhaW5lcl1cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RWxlbWVudChkaXNwbGF5KSB7XG4gIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoKTtcbiAgcHJvamVjdEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgdGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICBwcm9qZWN0RGVsZXRlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KCkge1xuICBwcm9qZWN0RGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LW5hbWVcIik7XG5cbiAgaWYgKHByb2plY3QubmFtZSA9PT0gXCJUYXNrc1wiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi10YXNrc1wiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5jaWxcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSBpZiAocHJvamVjdC5uYW1lID09PSBcIk15IERheVwiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi1kYXlcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3VuXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9IGVsc2UgaWYgKHByb2plY3QubmFtZSA9PSBcIk15IFdlZWtcIikge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtd2Vla1wiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci13ZWVrXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhcnNcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH1cblxuICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpIHtcbiAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuIiwiLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgcmVuZGVyRXZlcnl0aGluZyB9IGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuXG5yZW5kZXJFdmVyeXRoaW5nKCk7XG4iLCJpbXBvcnQge1xuICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVksXG4gIHNhdmVMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuaW1wb3J0IHtcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIG5ld1Byb2plY3RGb3JtLFxuICBuZXdQcm9qZWN0SW5wdXQsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHJlbmRlclByb2plY3RMaXN0LFxufSBmcm9tIFwiLi91c2VyUHJvamVjdC5qc1wiO1xuXG5pbXBvcnQge1xuICB0YXNrc0NvbnRhaW5lcixcbiAgbmV3VGFza0Zvcm0sXG4gIG5ld1Rhc2tJbnB1dCxcbiAgVGFzayxcbiAgcmVuZGVyUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUmVtYWluaW5nVGFzayxcbiAgcHJvamVjdENvbnRhaW5lcixcbiAgcmVuZGVyVGFza3MsXG59IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lcixcbiAgbG9hZERlZmF1bHRQcm9qZWN0cyxcbiAgcmVuZGVyRGVmYXVsdFByb2plY3RzLFxufSBmcm9tIFwiLi9kZWZhdWx0UHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEJ1dHRvbiwgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5RWxlbWVudCxcbiAgY2xlYXJFbGVtZW50LFxuICB0b2dnbGVFbGVtZW50LFxuICBuYXZCdXR0b24sXG4gIG5hdkNvbnRhaW5lcixcbn0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcbmxldCBkZWZhdWx0UHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSkpIHx8IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdmVyeXRoaW5nKCkge1xuICBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICAgIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICB0YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKFxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cyk7XG4gICAgICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrKHRhc2tOYW1lKTtcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdGVkQXJyYXkoKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICAgKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkLCBkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuXG4gIHJlbmRlckRlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgY2xlYXJFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcbiAgbG9hZERlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PT0gbnVsbCkge1xuICAgIGRpc3BsYXlFbGVtZW50KFwibm9uZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RWxlbWVudChcIlwiKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcbiAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGVkQXJyYXkoKSB7XG4gIGxldCBzZWxlY3RlZFByb2plY3Q7XG4gIGlmIChcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJ0YXNrc1wiIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPT09IFwibXlXZWVrXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJteURheVwiXG4gICkge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufVxuIiwiZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSBcInRhc2sucHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVkgPSBcInRhc2suZGVmYXVsdFByb2plY3RzXCI7XG5leHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZFByb2plY3RJZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICAgIHNlbGVjdGVkUHJvamVjdElkXG4gICk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSxcbiAgICBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdHMpXG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWhlYWRlcl1cIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XG5jb25zdCBwcm9qZWN0UmVtYWluaW5nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWNvdW50XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWJvZHldXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dF1cIik7XG5jb25zdCBuZXdUYXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtcHJvamVjdC1wcmV2aWV3XVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayhuYW1lLCBkdWVEYXRlID0gXCJObyBEYXRlXCIpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCkge1xuICByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3QubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlbWFpbmluZ1Rhc2soc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza1N0cmluZyA9IGluY29tcGxldGVUYXNrQ291bnQgPT09IDEgPyBcInRhc2tcIiA6IFwidGFza3NcIjtcbiAgcHJvamVjdFJlbWFpbmluZ1Rhc2suaW5uZXJUZXh0ID0gYFJlbWFpbmluZyAke3Rhc2tTdHJpbmd9OiAke2luY29tcGxldGVUYXNrQ291bnR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCkge1xuICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShuZXdUYXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItcHJvamVjdHNdXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9