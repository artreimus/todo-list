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
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.projectHeader.style.display = display;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.style.display = display;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__.newTaskForm.style.display = display;
  _delete_js__WEBPACK_IMPORTED_MODULE_1__.projectDeleteContainer.style.display = display;
  removeClassFromElement();
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
  (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.clearElement)(_userProject_js__WEBPACK_IMPORTED_MODULE_1__.projectsContainer);
  (0,_defaultProject_js__WEBPACK_IMPORTED_MODULE_3__.loadDefaultProjects)(defaultProjects);
  (0,_defaultProject_js__WEBPACK_IMPORTED_MODULE_3__.renderDefaultProjects)(defaultProjects, selectedProjectId);
  (0,_userProject_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)(projects, selectedProjectId);

  if (
    selectedProjectId === null ||
    selectedProjectId === undefined ||
    selectedProject.length === 0
  ) {
    (0,_element_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)("none");
    console.log("hide");
  } else {
    console.log("show");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxDQUFDLHFEQUFjO0FBQy9CLElBQUksc0RBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtPO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVyxJQUFJLG9CQUFvQjtBQUNuRjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG9EOztBQUU3QztBQUNBO0FBQ0E7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSwyQkFBMkIsaUVBQW9CO0FBQy9DO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlZmF1bHRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VyUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhckVsZW1lbnQsIGNyZWF0ZVByb2plY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1kZWZhdWx0LXByb2plY3RzXVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QobmFtZSwgaWQpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlkOiBpZCxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCkge1xuICBjbGVhckVsZW1lbnQoZGVmYXVsdFByb2plY3RzQ29udGFpbmVyKTtcbiAgZGVmYXVsdFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBkZWZhdWx0UHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzKSB7XG4gIGlmIChkZWZhdWx0UHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgbGV0IHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIlRhc2tzXCIsIFwidGFza3NcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiTXkgRGF5XCIsIFwibXlEYXlcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiTXkgV2Vla1wiLCBcIm15V2Vla1wiKTtcbiAgICBkZWZhdWx0UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3REZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXByb2plY3QtZGVsZXRlLWNvbnRhaW5lcl1cIlxuKTtcbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dXCJcbik7XG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jbGVhci1jb21wbGV0ZS10YXNrc11cIlxuKTtcbiIsImltcG9ydCB7IHByb2plY3RIZWFkZXIsIHRhc2tzQ29udGFpbmVyLCBuZXdUYXNrRm9ybSB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0RGVsZXRlQ29udGFpbmVyIH0gZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmF2LWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdi1jb250YWluZXJdXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVsZW1lbnQoZGlzcGxheSkge1xuICBwcm9qZWN0SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB0YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIHByb2plY3REZWxldGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCgpIHtcbiAgcHJvamVjdERlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LCBzZWxlY3RlZFByb2plY3RJZCkge1xuICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5saXN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuXG4gIGlmIChwcm9qZWN0Lm5hbWUgPT09IFwiVGFza3NcIikge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtdGFza3NcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuY2lsXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9IGVsc2UgaWYgKHByb2plY3QubmFtZSA9PT0gXCJNeSBEYXlcIikge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtZGF5XCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN1blwiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Lm5hbWUgPT0gXCJNeSBXZWVrXCIpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LXdlZWtcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItd2Vla1wiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1iYXJzXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9XG5cbiAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saXN0XCIpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn1cbiIsIi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJFdmVyeXRoaW5nIH0gZnJvbSBcIi4vc2NyaXB0LmpzXCI7XG5cbnJlbmRlckV2ZXJ5dGhpbmcoKTtcbiIsImltcG9ydCB7XG4gIExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gIExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSxcbiAgc2F2ZUxvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5pbXBvcnQge1xuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgbmV3UHJvamVjdEZvcm0sXG4gIG5ld1Byb2plY3RJbnB1dCxcbiAgY3JlYXRlUHJvamVjdCxcbiAgcmVuZGVyUHJvamVjdExpc3QsXG59IGZyb20gXCIuL3VzZXJQcm9qZWN0LmpzXCI7XG5cbmltcG9ydCB7XG4gIHRhc2tzQ29udGFpbmVyLFxuICBuZXdUYXNrRm9ybSxcbiAgbmV3VGFza0lucHV0LFxuICBUYXNrLFxuICByZW5kZXJQcm9qZWN0SGVhZGVyLFxuICByZW5kZXJSZW1haW5pbmdUYXNrLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICByZW5kZXJUYXNrcyxcbn0gZnJvbSBcIi4vdGFza3MuanNcIjtcblxuaW1wb3J0IHtcbiAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLFxuICBsb2FkRGVmYXVsdFByb2plY3RzLFxuICByZW5kZXJEZWZhdWx0UHJvamVjdHMsXG59IGZyb20gXCIuL2RlZmF1bHRQcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0QnV0dG9uLCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gfSBmcm9tIFwiLi9kZWxldGUuanNcIjtcbmltcG9ydCB7XG4gIGRpc3BsYXlFbGVtZW50LFxuICBjbGVhckVsZW1lbnQsXG4gIHRvZ2dsZUVsZW1lbnQsXG4gIG5hdkJ1dHRvbixcbiAgbmF2Q29udGFpbmVyLFxufSBmcm9tIFwiLi9lbGVtZW50LmpzXCI7XG5cbmxldCBwcm9qZWN0cyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSkpIHx8IFtdO1xubGV0IGRlZmF1bHRQcm9qZWN0cyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9ERUZBVUxUX1BST0pFQ1RfS0VZKSkgfHwgW107XG5sZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV2ZXJ5dGhpbmcoKSB7XG4gIG5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVFbGVtZW50KG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICBkZWZhdWx0UHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgICB0b2dnbGVFbGVtZW50KG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdGVkQXJyYXkoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbmQoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBzYXZlTG9jYWxTdG9yYWdlKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgZGVmYXVsdFByb2plY3RzKTtcbiAgICAgIHJlbmRlclJlbWFpbmluZ1Rhc2soc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza0lucHV0LnZhbHVlO1xuICAgIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgdGFzayA9IFRhc2sodGFza05hbWUpO1xuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdGVkQXJyYXkoKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuICAgIHNlbGVjdGVkUHJvamVjdC50YXNrcyA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcbiAgICApO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gbnVsbDtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpIHtcbiAgc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cyk7XG4gIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIGxvYWREZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzKTtcbiAgcmVuZGVyRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuXG4gIGlmIChcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gbnVsbCB8fFxuICAgIHNlbGVjdGVkUHJvamVjdElkID09PSB1bmRlZmluZWQgfHxcbiAgICBzZWxlY3RlZFByb2plY3QubGVuZ3RoID09PSAwXG4gICkge1xuICAgIGRpc3BsYXlFbGVtZW50KFwibm9uZVwiKTtcbiAgICBjb25zb2xlLmxvZyhcImhpZGVcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgIGRpc3BsYXlFbGVtZW50KFwiXCIpO1xuICAgIHJlbmRlclByb2plY3RIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0ZWRBcnJheSgpIHtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdDtcbiAgaWYgKFxuICAgIHNlbGVjdGVkUHJvamVjdElkID09PSBcInRhc2tzXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJteVdlZWtcIiB8fFxuICAgIHNlbGVjdGVkUHJvamVjdElkID09PSBcIm15RGF5XCJcbiAgKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICApO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZFByb2plY3Q7XG59XG4iLCJleHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9IFwidGFzay5wcm9qZWN0c1wiO1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSA9IFwidGFzay5kZWZhdWx0UHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkUHJvamVjdElkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgZGVmYXVsdFByb2plY3RzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWRcbiAgKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgTE9DQUxfU1RPUkFHRV9ERUZBVUxUX1BST0pFQ1RfS0VZLFxuICAgIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0cylcbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtaGVhZGVyXVwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcbmNvbnN0IHByb2plY3RSZW1haW5pbmdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtY291bnRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtYm9keV1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmNvbnN0IG5ld1Rhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1wcm9qZWN0LXByZXZpZXddXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKG5hbWUsIGR1ZURhdGUgPSBcIk5vIERhdGVcIikge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpO1xuICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpIHtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpIHtcbiAgY29uc3QgaW5jb21wbGV0ZVRhc2tDb3VudCA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICkubGVuZ3RoO1xuICBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiO1xuICBwcm9qZWN0UmVtYWluaW5nVGFzay5pbm5lclRleHQgPSBgUmVtYWluaW5nICR7dGFza1N0cmluZ306ICR7aW5jb21wbGV0ZVRhc2tDb3VudH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHNlbGVjdGVkUHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKG5ld1Rhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja0JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suY29tcGxldGU7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdXNlci1wcm9qZWN0c11cIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=