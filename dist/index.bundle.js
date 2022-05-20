"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  /* background-color: var(--primary-light); */\n  color: var(--primary-dark);\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.6;\n  /* footer support */\n  margin-bottom: 48px;\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.button {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\ninput {\n  /* width: 100%; */\n  padding: 10px;\n  border-radius: 5px;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.fa-apple {\n  font-size: 40px;\n}\n\n.page-name {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  /* background-color: var(--primary-dark); */\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height - footer_height */\n}\n\n.nav {\n  width: 300px;\n  min-width: 250px;\n  padding: 20px;\n  background-color: var(--primary-light);\n}\n\n.nav.active {\n  display: block;\n}\n\n.task-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.task-list > .list-name {\n  width: 100%;\n  height: 3rem;\n  background-color: greenyellow;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.task-list > .list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.new-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n}\n\n.new {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.8;\n}\n\n.button-default-project {\n  background-color: var(--secondary-light);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n/* button-default-project */\n.nav-button {\n  background-color: var(--secondary-light);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-tasks {\n  background-color: rgb(255, 43, 43);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-day {\n  background-color: rgb(255, 226, 129);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-week {\n  background-color: rgb(71, 172, 255);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.fa-inbox {\n  margin-right: 6px;\n}\n\n.projects-title {\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n.button-add-project {\n  margin-top: 10px;\n  /* margin-left: 2px; */\n  background-color: var(--secondary-light);\n  text-align: left;\n}\n\n.button-add-project.active {\n  display: none;\n}\n\n.button-project.active,\n.nav-button.active {\n  font-weight: bold;\n  font-size: large;\n}\n\n.button-project:hover,\n.button-default-project:hover,\n.button-add-project:hover {\n  background-color: #ccc;\n}\n\n.right-project-panel {\n  visibility: hidden;\n}\n\n.button-project:hover .right-project-panel {\n  visibility: visible;\n}\n\n.fa-times {\n  margin-right: 0;\n}\n\n.add-project-popup {\n  display: none;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.add-project-popup.active {\n  display: block;\n}\n\n.input-add-project-popup {\n  border: 1px solid #aaa;\n  margin-bottom: 10px;\n}\n\n.add-project-popup-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.button-add-project-popup {\n  border: 1px solid #99dd99;\n  background-color: #aaffaa;\n  font-weight: bold;\n}\n\n.button-cancel-project-popup {\n  border: 1px solid #eeadad;\n  background-color: #ffbebe;\n  font-weight: bold;\n}\n\n.button-add-project-popup:hover {\n  background-color: #a6f0a6;\n}\n\n.button-cancel-project-popup:hover {\n  background-color: #f5b2b2;\n}\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n\n  width: calc(100% - 300px);\n\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  /* border-bottom-left-radius: 15px; */\n\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n.project-preview h1 {\n  padding: 0 10px;\n  margin-bottom: 10px;\n}\n\n.button-task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: var(--primary-light);\n  cursor: default;\n  margin-bottom: 8px;\n}\n\n.button-task:hover {\n  background-color: var(--secondary-light);\n}\n\n.left-task-panel {\n  display: flex;\n  align-items: center;\n}\n\n.fa-circle {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.task-content {\n  cursor: pointer;\n}\n\n.task-content.active {\n  display: none;\n}\n\n.input-task-name {\n  display: none;\n  height: 24px;\n  padding: 5px;\n  border: 1px solid #555;\n  background-color: var(--primary-light);\n  color: inherit;\n  font-family: inherit;\n}\n\n.input-task-name.active {\n  display: block;\n}\n\n.right-task-panel {\n  display: flex;\n  align-items: center;\n}\n\n.due-date {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.due-date.active {\n  display: none;\n}\n\n.input-due-date {\n  display: none;\n  height: 24px;\n  padding: 5px;\n  border: 1px solid #555;\n  margin: 0 10px;\n  background-color: var(--primary-light);\n  color: inherit;\n  font-family: inherit;\n}\n\n.input-due-date.active {\n  display: block;\n}\n\n.button-task .right-task-panel i {\n  visibility: hidden;\n  cursor: pointer;\n}\n\n.button-task:hover .right-task-panel i {\n  visibility: visible;\n}\n\n.button-add-task {\n  display: block;\n  padding-left: 15px;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.button-add-task.active {\n  display: none;\n}\n\n.button-add-task:hover {\n  background-color: var(--secondary-light);\n}\n\n.add-task-popup {\n  display: none;\n  width: 100%;\n  /* padding: 10px; */\n  text-align: center;\n}\n\n.add-task-popup.active {\n  display: block;\n  /* background-color: black; */\n}\n\n.input-add-task-popup {\n  border: 1px solid #aaa;\n  margin-bottom: 10px;\n}\n\n.add-task-popup-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 20px;\n}\n\n.button-add-task-popup {\n  border: 1px solid #99dd99;\n  background-color: #aaffaa;\n  font-weight: bold;\n}\n\n.button-cancel-task-popup {\n  border: 1px solid #eeadad;\n  background-color: #ffbebe;\n  font-weight: bold;\n}\n\n.button-add-task-popup:hover {\n  background-color: #a6f0a6;\n}\n\n.button-cancel-task-popup:hover {\n  background-color: #f5b2b2;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n}\n\n/* Footer */\n\n.footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  background-color: var(--primary-light);\n  color: var(--primary-light);\n  font-size: 18px;\n}\n\n.fa-github {\n  color: var(--primary-light);\n  font-size: 22px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n  }\n\n  .project-preview {\n    position: relative;\n    top: 0;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100vh;\n    background-color: black;\n  }\n\n  .right-task-panel {\n    justify-content: flex-end;\n    max-width: 33%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  /* background-color: var(--primary-light); */\n  color: var(--primary-dark);\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.6;\n  /* footer support */\n  margin-bottom: 48px;\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.button {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\ninput {\n  /* width: 100%; */\n  padding: 10px;\n  border-radius: 5px;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.fa-apple {\n  font-size: 40px;\n}\n\n.page-name {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  /* background-color: var(--primary-dark); */\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height - footer_height */\n}\n\n.nav {\n  width: 300px;\n  min-width: 250px;\n  padding: 20px;\n  background-color: var(--primary-light);\n}\n\n.nav.active {\n  display: block;\n}\n\n.task-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.task-list > .list-name {\n  width: 100%;\n  height: 3rem;\n  background-color: greenyellow;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.task-list > .list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.new-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n}\n\n.new {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.8;\n}\n\n.button-default-project {\n  background-color: var(--secondary-light);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n/* button-default-project */\n.nav-button {\n  background-color: var(--secondary-light);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-tasks {\n  background-color: rgb(255, 43, 43);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-day {\n  background-color: rgb(255, 226, 129);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.nav-week {\n  background-color: rgb(71, 172, 255);\n  text-align: left;\n  margin-bottom: 10px;\n}\n\n.fa-inbox {\n  margin-right: 6px;\n}\n\n.projects-title {\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n.button-add-project {\n  margin-top: 10px;\n  /* margin-left: 2px; */\n  background-color: var(--secondary-light);\n  text-align: left;\n}\n\n.button-add-project.active {\n  display: none;\n}\n\n.button-project.active,\n.nav-button.active {\n  font-weight: bold;\n  font-size: large;\n}\n\n.button-project:hover,\n.button-default-project:hover,\n.button-add-project:hover {\n  background-color: #ccc;\n}\n\n.right-project-panel {\n  visibility: hidden;\n}\n\n.button-project:hover .right-project-panel {\n  visibility: visible;\n}\n\n.fa-times {\n  margin-right: 0;\n}\n\n.add-project-popup {\n  display: none;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.add-project-popup.active {\n  display: block;\n}\n\n.input-add-project-popup {\n  border: 1px solid #aaa;\n  margin-bottom: 10px;\n}\n\n.add-project-popup-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.button-add-project-popup {\n  border: 1px solid #99dd99;\n  background-color: #aaffaa;\n  font-weight: bold;\n}\n\n.button-cancel-project-popup {\n  border: 1px solid #eeadad;\n  background-color: #ffbebe;\n  font-weight: bold;\n}\n\n.button-add-project-popup:hover {\n  background-color: #a6f0a6;\n}\n\n.button-cancel-project-popup:hover {\n  background-color: #f5b2b2;\n}\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n\n  width: calc(100% - 300px);\n\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  /* border-bottom-left-radius: 15px; */\n\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n.project-preview h1 {\n  padding: 0 10px;\n  margin-bottom: 10px;\n}\n\n.button-task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: var(--primary-light);\n  cursor: default;\n  margin-bottom: 8px;\n}\n\n.button-task:hover {\n  background-color: var(--secondary-light);\n}\n\n.left-task-panel {\n  display: flex;\n  align-items: center;\n}\n\n.fa-circle {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.task-content {\n  cursor: pointer;\n}\n\n.task-content.active {\n  display: none;\n}\n\n.input-task-name {\n  display: none;\n  height: 24px;\n  padding: 5px;\n  border: 1px solid #555;\n  background-color: var(--primary-light);\n  color: inherit;\n  font-family: inherit;\n}\n\n.input-task-name.active {\n  display: block;\n}\n\n.right-task-panel {\n  display: flex;\n  align-items: center;\n}\n\n.due-date {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.due-date.active {\n  display: none;\n}\n\n.input-due-date {\n  display: none;\n  height: 24px;\n  padding: 5px;\n  border: 1px solid #555;\n  margin: 0 10px;\n  background-color: var(--primary-light);\n  color: inherit;\n  font-family: inherit;\n}\n\n.input-due-date.active {\n  display: block;\n}\n\n.button-task .right-task-panel i {\n  visibility: hidden;\n  cursor: pointer;\n}\n\n.button-task:hover .right-task-panel i {\n  visibility: visible;\n}\n\n.button-add-task {\n  display: block;\n  padding-left: 15px;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.button-add-task.active {\n  display: none;\n}\n\n.button-add-task:hover {\n  background-color: var(--secondary-light);\n}\n\n.add-task-popup {\n  display: none;\n  width: 100%;\n  /* padding: 10px; */\n  text-align: center;\n}\n\n.add-task-popup.active {\n  display: block;\n  /* background-color: black; */\n}\n\n.input-add-task-popup {\n  border: 1px solid #aaa;\n  margin-bottom: 10px;\n}\n\n.add-task-popup-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 20px;\n}\n\n.button-add-task-popup {\n  border: 1px solid #99dd99;\n  background-color: #aaffaa;\n  font-weight: bold;\n}\n\n.button-cancel-task-popup {\n  border: 1px solid #eeadad;\n  background-color: #ffbebe;\n  font-weight: bold;\n}\n\n.button-add-task-popup:hover {\n  background-color: #a6f0a6;\n}\n\n.button-cancel-task-popup:hover {\n  background-color: #f5b2b2;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n}\n\n/* Footer */\n\n.footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  background-color: var(--primary-light);\n  color: var(--primary-light);\n  font-size: 18px;\n}\n\n.fa-github {\n  color: var(--primary-light);\n  font-size: 22px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n  }\n\n  .project-preview {\n    position: relative;\n    top: 0;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100vh;\n    background-color: black;\n  }\n\n  .right-task-panel {\n    justify-content: flex-end;\n    max-width: 33%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// document.addEventListener("DOMContentLoaded", UI.loadHomepage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8s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Ozs7OztBQ2ZxQjs7QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6IHJnYigyOCwgMjgsIDI5KTtcXG4gIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAtLXByaW1hcnktbGlnaHQ6ICNlZWU7XFxuICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7ICovXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTsgKi9cXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBuYXZiYXIgc3VwcG9ydCAqL1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwNHB4KTsgLyogIC0gaGVhZGVyX2hlaWdodCAtIGZvb3Rlcl9oZWlnaHQgKi9cXG59XFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4ubmF2LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmxpc3QtbmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWUuYWN0aXZlLWxpc3Qge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ubmV3LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5ldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uYnV0dG9uLWRlZmF1bHQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGJ1dHRvbi1kZWZhdWx0LXByb2plY3QgKi9cXG4ubmF2LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uYXYtdGFza3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDMsIDQzKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWRheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDEyOSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5hdi13ZWVrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTcyLCAyNTUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mYS1pbmJveCB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDY0LjNkZWcsXFxuICAgIHJnYmEoMjU0LCAxMjIsIDE1MiwgMC44MSkgMTcuNyUsXFxuICAgIHJnYmEoMjU1LCAyMDYsIDEzNCwgMSkgNjQuNyUsXFxuICAgIHJnYmEoMTcyLCAyNTMsIDE2MywgMC42NCkgMTEyLjElXFxuICApO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgLyogbWFyZ2luLWxlZnQ6IDJweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uYnV0dG9uLWFkZC1wcm9qZWN0LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3QuYWN0aXZlLFxcbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5idXR0b24tcHJvamVjdDpob3ZlcixcXG4uYnV0dG9uLWRlZmF1bHQtcHJvamVjdDpob3ZlcixcXG4uYnV0dG9uLWFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5yaWdodC1wcm9qZWN0LXBhbmVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0OmhvdmVyIC5yaWdodC1wcm9qZWN0LXBhbmVsIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mYS10aW1lcyB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW5wdXQtYWRkLXByb2plY3QtcG9wdXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OWRkOTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b24tY2FuY2VsLXByb2plY3QtcG9wdXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlYWRhZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdC1wb3B1cDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZmMGE2O1xcbn1cXG5cXG4uYnV0dG9uLWNhbmNlbC1wcm9qZWN0LXBvcHVwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWIyYjI7XFxufVxcblxcbi5wcm9qZWN0LXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzAwcHg7XFxuICB0b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcblxcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgLyogYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDsgKi9cXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTA5LjZkZWcsXFxuICAgIHJnYmEoMjU1LCAxNzksIDE4OSwgMSkgMS44JSxcXG4gICAgcmdiYSgyNTQsIDI0OCwgMTU0LCAxKSA1MC42JSxcXG4gICAgcmdiYSgxNjEsIDIyNCwgMTg2LCAxKSAxMDAuMyVcXG4gICk7XFxufVxcblxcbi5wcm9qZWN0LXByZXZpZXcgaDEge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uYnV0dG9uLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmxlZnQtdGFzay1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhLWNpcmNsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250ZW50LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW5wdXQtdGFzay1uYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uaW5wdXQtdGFzay1uYW1lLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJpZ2h0LXRhc2stcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZS5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlucHV0LWR1ZS1kYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5pbnB1dC1kdWUtZGF0ZS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5idXR0b24tdGFzayAucmlnaHQtdGFzay1wYW5lbCBpIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi10YXNrOmhvdmVyIC5yaWdodC10YXNrLXBhbmVsIGkge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxufVxcblxcbi5hZGQtdGFzay1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5pbnB1dC1hZGQtdGFzay1wb3B1cCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzay1wb3B1cCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTlkZDk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnV0dG9uLWNhbmNlbC10YXNrLXBvcHVwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWFkYWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b24tYWRkLXRhc2stcG9wdXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZjBhNjtcXG59XFxuXFxuLmJ1dHRvbi1jYW5jZWwtdGFzay1wb3B1cDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViMmIyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuYnV0dG9uLW9wZW4tbmF2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLnJpZ2h0LXRhc2stcGFuZWwge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXgtd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQixFQUFFLHFDQUFxQztBQUN4RTs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUI7Ozs7O0dBS0M7RUFDRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7O0VBRVoseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixxQ0FBcUM7O0VBRXJDOzs7OztHQUtDO0FBQ0g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1kYXJrOiByZ2IoMjgsIDI4LCAyOSk7XFxuICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOyAqL1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mYS1hcHBsZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5wYWdlLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5idXR0b24tb3Blbi1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7ICovXFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5idXR0b24tb3Blbi1uYXYgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogbmF2YmFyIHN1cHBvcnQgKi9cXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7IC8qICAtIGhlYWRlcl9oZWlnaHQgLSBmb290ZXJfaGVpZ2h0ICovXFxufVxcblxcbi5uYXYge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLm5hdi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWxpc3QgPiAubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLm5ldy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBidXR0b24tZGVmYXVsdC1wcm9qZWN0ICovXFxuLm5hdi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2LXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQzLCA0Myk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5hdi1kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCAxMjkpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uYXYtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE3MiwgMjU1KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZmEtaW5ib3gge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA2NC4zZGVnLFxcbiAgICByZ2JhKDI1NCwgMTIyLCAxNTIsIDAuODEpIDE3LjclLFxcbiAgICByZ2JhKDI1NSwgMjA2LCAxMzQsIDEpIDY0LjclLFxcbiAgICByZ2JhKDE3MiwgMjUzLCAxNjMsIDAuNjQpIDExMi4xJVxcbiAgKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5idXR0b24tYWRkLXByb2plY3Qge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAycHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdC5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0LmFjdGl2ZSxcXG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3Q6aG92ZXIsXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3Q6aG92ZXIsXFxuLmJ1dHRvbi1hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4ucmlnaHQtcHJvamVjdC1wYW5lbCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5idXR0b24tcHJvamVjdDpob3ZlciAucmlnaHQtcHJvamVjdC1wYW5lbCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZmEtdGltZXMge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlucHV0LWFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdC1wb3B1cCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTlkZDk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnV0dG9uLWNhbmNlbC1wcm9qZWN0LXBvcHVwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWFkYWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b24tYWRkLXByb2plY3QtcG9wdXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZjBhNjtcXG59XFxuXFxuLmJ1dHRvbi1jYW5jZWwtcHJvamVjdC1wb3B1cDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViMmIyO1xcbn1cXG5cXG4ucHJvamVjdC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG5cXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIC8qIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7ICovXFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEwOS42ZGVnLFxcbiAgICByZ2JhKDI1NSwgMTc5LCAxODksIDEpIDEuOCUsXFxuICAgIHJnYmEoMjU0LCAyNDgsIDE1NCwgMSkgNTAuNiUsXFxuICAgIHJnYmEoMTYxLCAyMjQsIDE4NiwgMSkgMTAwLjMlXFxuICApO1xcbn1cXG5cXG4ucHJvamVjdC1wcmV2aWV3IGgxIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5idXR0b24tdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmJ1dHRvbi10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxufVxcblxcbi5sZWZ0LXRhc2stcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYS1jaXJjbGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGVudC5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlucHV0LXRhc2stbmFtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmlucHV0LXRhc2stbmFtZS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5yaWdodC10YXNrLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHVlLWRhdGUuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1kdWUtZGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uaW5wdXQtZHVlLWRhdGUuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYnV0dG9uLXRhc2sgLnJpZ2h0LXRhc2stcGFuZWwgaSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24tdGFzazpob3ZlciAucmlnaHQtdGFzay1wYW5lbCBpIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5idXR0b24tYWRkLXRhc2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzay5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbn1cXG5cXG4uYWRkLXRhc2stcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uaW5wdXQtYWRkLXRhc2stcG9wdXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzay1wb3B1cC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b24tYWRkLXRhc2stcG9wdXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5ZGQ5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbi1jYW5jZWwtdGFzay1wb3B1cCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVhZGFkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrLXBvcHVwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmYwYTY7XFxufVxcblxcbi5idXR0b24tY2FuY2VsLXRhc2stcG9wdXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YjJiMjtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5yaWdodC10YXNrLXBhbmVsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWF4LXdpZHRoOiAzMyU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZEhvbWVwYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==