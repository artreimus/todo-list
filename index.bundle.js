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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  display: block;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  display: block;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./src/script.js");



(0,_script_js__WEBPACK_IMPORTED_MODULE_1__.renderEverything)();


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
  console.log(defaultProjects);
  console.log(projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVkseUJBQXlCLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxXQUFXLFlBQVksVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVcsSUFBSSxvQkFBb0I7QUFDbkY7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERvRDs7QUFFN0M7QUFDQTtBQUNBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsMkJBQTJCLGlFQUFvQjtBQUMvQztBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVmYXVsdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6IHJnYigyOCwgMjgsIDI5KTtcXG4gIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAtLXByaW1hcnktbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICAvKiBkaXNwbGF5OiBoaWRkZW47ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbn1cXG5cXG5pIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG5hdmJhciBzdXBwb3J0ICovXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpOyAvKiAgLSBoZWFkZXJfaGVpZ2h0Ki9cXG59XFxuXFxuLyogTmF2ICovXFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0LWxpc3QsXFxuLnByb2plY3QtbGlzdCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIC0tdXNlci1wcm9qZWN0LWNvbG9yOiByZ2JhKDE2MSwgMjI0LCAxODYsIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi51c2VyLXByb2plY3QtbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDIyNCwgMTg2LCAxKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtdGFza3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDMsIDQzKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtZGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgMTI5KTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE3MiwgMjU1KTtcXG59XFxuXFxuLmZhLWJhcnMge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiKDI1NSwgODIsIDgyKSxcXG4gICAgICByZ2IoMjU1LCAyNTMsIDEwOCksXFxuICAgICAgcmdiKDEwLCAxNTcsIDI1NSlcXG4gICAgKVxcbiAgICAwLjU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5uZXcubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA2NC4zZGVnLFxcbiAgICByZ2JhKDI1NCwgMTIyLCAxNTIsIDAuODEpIDE3LjclLFxcbiAgICByZ2JhKDI1NSwgMjA2LCAxMzQsIDEpIDY0LjclLFxcbiAgICByZ2JhKDE3MiwgMjUzLCAxNjMsIDAuNjQpIDExMi4xJVxcbiAgKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIFByb2plY3QgUHJldmlldyAqL1xcblxcbi5wcm9qZWN0LXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzAwcHg7XFxuICB0b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpOyAvKiAtIG5hdiBiYXIgb24gdGhlIGxlZnQgKi9cXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTA5LjZkZWcsXFxuICAgIHJnYmEoMjU1LCAxNzksIDE4OSwgMSkgMS44JSxcXG4gICAgcmdiYSgyNTQsIDI0OCwgMTU0LCAxKSA1MC42JSxcXG4gICAgcmdiYSgxNjEsIDIyNCwgMTg2LCAxKSAxMDAuMyVcXG4gICk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMnJlbSAwIDA7XFxuICBpbmxpbmUtc2l6ZTogODAlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1jb3VudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIFRhc2tzICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yICoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5ldy10YXNrLWNyZWF0b3IgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMDAwMHB4IDEwMDAwcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctdGFzazpob3ZlciAubmV3LXRhc2stY3JlYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qICBEZWxldGUgQnV0dG9ucyAqL1xcbi5kZWxldGUtc3R1ZmYge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGVsZXRlLXN0dWZmLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5idG4uZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjgxKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcblxcbi5ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5idXR0b24tb3Blbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW47XFxuICB9XFxuXFxuICAubmF2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsbUJBQW1COztFQUVuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0IsRUFBRSxvQkFBb0I7QUFDdkQ7O0FBRUEs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KTtcXG4gIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAtLXByaW1hcnktbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICAvKiBkaXNwbGF5OiBoaWRkZW47ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbn1cXG5cXG5pIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG5hdmJhciBzdXBwb3J0ICovXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpOyAvKiAgLSBoZWFkZXJfaGVpZ2h0Ki9cXG59XFxuXFxuLyogTmF2ICovXFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0LWxpc3QsXFxuLnByb2plY3QtbGlzdCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIC0tdXNlci1wcm9qZWN0LWNvbG9yOiByZ2JhKDE2MSwgMjI0LCAxODYsIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi51c2VyLXByb2plY3QtbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDIyNCwgMTg2LCAxKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtdGFza3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDMsIDQzKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtZGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgMTI5KTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE3MiwgMjU1KTtcXG59XFxuXFxuLmZhLWJhcnMge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiKDI1NSwgODIsIDgyKSxcXG4gICAgICByZ2IoMjU1LCAyNTMsIDEwOCksXFxuICAgICAgcmdiKDEwLCAxNTcsIDI1NSlcXG4gICAgKVxcbiAgICAwLjU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5uZXcubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA2NC4zZGVnLFxcbiAgICByZ2JhKDI1NCwgMTIyLCAxNTIsIDAuODEpIDE3LjclLFxcbiAgICByZ2JhKDI1NSwgMjA2LCAxMzQsIDEpIDY0LjclLFxcbiAgICByZ2JhKDE3MiwgMjUzLCAxNjMsIDAuNjQpIDExMi4xJVxcbiAgKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIFByb2plY3QgUHJldmlldyAqL1xcblxcbi5wcm9qZWN0LXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzAwcHg7XFxuICB0b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpOyAvKiAtIG5hdiBiYXIgb24gdGhlIGxlZnQgKi9cXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTA5LjZkZWcsXFxuICAgIHJnYmEoMjU1LCAxNzksIDE4OSwgMSkgMS44JSxcXG4gICAgcmdiYSgyNTQsIDI0OCwgMTU0LCAxKSA1MC42JSxcXG4gICAgcmdiYSgxNjEsIDIyNCwgMTg2LCAxKSAxMDAuMyVcXG4gICk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMnJlbSAwIDA7XFxuICBpbmxpbmUtc2l6ZTogODAlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1jb3VudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIFRhc2tzICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yICoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5ldy10YXNrLWNyZWF0b3IgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMDAwMHB4IDEwMDAwcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctdGFzazpob3ZlciAubmV3LXRhc2stY3JlYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qICBEZWxldGUgQnV0dG9ucyAqL1xcbi5kZWxldGUtc3R1ZmYge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGVsZXRlLXN0dWZmLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5idG4uZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjgxKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcblxcbi5ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5idXR0b24tb3Blbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW47XFxuICB9XFxuXFxuICAubmF2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsZWFyRWxlbWVudCwgY3JlYXRlUHJvamVjdEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWRlZmF1bHQtcHJvamVjdHNdXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdChuYW1lLCBpZCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaWQ6IGlkLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIGNsZWFyRWxlbWVudChkZWZhdWx0UHJvamVjdHNDb250YWluZXIpO1xuICBkZWZhdWx0UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMpIHtcbiAgaWYgKGRlZmF1bHRQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiVGFza3NcIiwgXCJ0YXNrc1wiKTtcbiAgICBkZWZhdWx0UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoXCJNeSBEYXlcIiwgXCJteURheVwiKTtcbiAgICBkZWZhdWx0UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoXCJNeSBXZWVrXCIsIFwibXlXZWVrXCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdERlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtcHJvamVjdC1kZWxldGUtY29udGFpbmVyXVwiXG4pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbl1cIlxuKTtcbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzXVwiXG4pO1xuIiwiaW1wb3J0IHsgcHJvamVjdEhlYWRlciwgdGFza3NDb250YWluZXIsIG5ld1Rhc2tGb3JtIH0gZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IHByb2plY3REZWxldGVDb250YWluZXIgfSBmcm9tIFwiLi9kZWxldGUuanNcIjtcblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmF2LWNvbnRhaW5lcl1cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RWxlbWVudChkaXNwbGF5KSB7XG4gIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoKTtcbiAgcHJvamVjdEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgdGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICBwcm9qZWN0RGVsZXRlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KCkge1xuICBwcm9qZWN0RGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LW5hbWVcIik7XG5cbiAgaWYgKHByb2plY3QubmFtZSA9PT0gXCJUYXNrc1wiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi10YXNrc1wiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5jaWxcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSBpZiAocHJvamVjdC5uYW1lID09PSBcIk15IERheVwiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi1kYXlcIik7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3VuXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9IGVsc2UgaWYgKHByb2plY3QubmFtZSA9PSBcIk15IFdlZWtcIikge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXYtd2Vla1wiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci13ZWVrXCI+PC9pPiAke3Byb2plY3QubmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhcnNcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH1cblxuICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpIHtcbiAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlckV2ZXJ5dGhpbmcgfSBmcm9tIFwiLi9zY3JpcHQuanNcIjtcblxucmVuZGVyRXZlcnl0aGluZygpO1xuIiwiaW1wb3J0IHtcbiAgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSxcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSxcbiAgTE9DQUxfU1RPUkFHRV9ERUZBVUxUX1BST0pFQ1RfS0VZLFxuICBzYXZlTG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmltcG9ydCB7XG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBuZXdQcm9qZWN0Rm9ybSxcbiAgbmV3UHJvamVjdElucHV0LFxuICBjcmVhdGVQcm9qZWN0LFxuICByZW5kZXJQcm9qZWN0TGlzdCxcbn0gZnJvbSBcIi4vdXNlclByb2plY3QuanNcIjtcblxuaW1wb3J0IHtcbiAgdGFza3NDb250YWluZXIsXG4gIG5ld1Rhc2tGb3JtLFxuICBuZXdUYXNrSW5wdXQsXG4gIFRhc2ssXG4gIHJlbmRlclByb2plY3RIZWFkZXIsXG4gIHJlbmRlclJlbWFpbmluZ1Rhc2ssXG4gIHByb2plY3RDb250YWluZXIsXG4gIHJlbmRlclRhc2tzLFxufSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuXG5pbXBvcnQge1xuICBkZWZhdWx0UHJvamVjdHNDb250YWluZXIsXG4gIGxvYWREZWZhdWx0UHJvamVjdHMsXG4gIHJlbmRlckRlZmF1bHRQcm9qZWN0cyxcbn0gZnJvbSBcIi4vZGVmYXVsdFByb2plY3QuanNcIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3RCdXR0b24sIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbiB9IGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuaW1wb3J0IHtcbiAgZGlzcGxheUVsZW1lbnQsXG4gIGNsZWFyRWxlbWVudCxcbiAgdG9nZ2xlRWxlbWVudCxcbiAgbmF2QnV0dG9uLFxuICBuYXZDb250YWluZXIsXG59IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxubGV0IHByb2plY3RzID1cbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW107XG5sZXQgZGVmYXVsdFByb2plY3RzID1cbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVkpKSB8fCBbXTtcbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRXZlcnl0aGluZygpIHtcbiAgbmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgICAgc2F2ZUFuZFJlbmRlcigpO1xuICAgIH1cbiAgICB0b2dnbGVFbGVtZW50KG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICAgIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgdGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZChcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkLCBkZWZhdWx0UHJvamVjdHMpO1xuICAgICAgcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcbiAgICBpZiAocHJvamVjdE5hbWUgPT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrSW5wdXQudmFsdWU7XG4gICAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCB0YXNrID0gVGFzayh0YXNrTmFtZSk7XG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gbnVsbDtcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuICAgIHNlbGVjdGVkUHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG5cbiAgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICAgICk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfSk7XG4gIHJlbmRlcigpO1xuICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdHMpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkLCBkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuXG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgbG9hZERlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXJEZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCk7XG4gIHJlbmRlclByb2plY3RMaXN0KHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCk7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdElkID09PSBudWxsKSB7XG4gICAgZGlzcGxheUVsZW1lbnQoXCJub25lXCIpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbGVtZW50KFwiXCIpO1xuICAgIHJlbmRlclByb2plY3RIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0ZWRBcnJheSgpIHtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdDtcbiAgaWYgKFxuICAgIHNlbGVjdGVkUHJvamVjdElkID09PSBcInRhc2tzXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJteVdlZWtcIiB8fFxuICAgIHNlbGVjdGVkUHJvamVjdElkID09PSBcIm15RGF5XCJcbiAgKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICApO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZFByb2plY3Q7XG59XG4iLCJleHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9IFwidGFzay5wcm9qZWN0c1wiO1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSA9IFwidGFzay5kZWZhdWx0UHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkUHJvamVjdElkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCwgZGVmYXVsdFByb2plY3RzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVksXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWRcbiAgKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgTE9DQUxfU1RPUkFHRV9ERUZBVUxUX1BST0pFQ1RfS0VZLFxuICAgIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0cylcbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtaGVhZGVyXVwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcbmNvbnN0IHByb2plY3RSZW1haW5pbmdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtY291bnRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtYm9keV1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmNvbnN0IG5ld1Rhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1wcm9qZWN0LXByZXZpZXddXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKG5hbWUsIGR1ZURhdGUgPSBcIk5vIERhdGVcIikge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RIZWFkZXIoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpO1xuICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUaXRsZShzZWxlY3RlZFByb2plY3QpIHtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpIHtcbiAgY29uc3QgaW5jb21wbGV0ZVRhc2tDb3VudCA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICkubGVuZ3RoO1xuICBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiO1xuICBwcm9qZWN0UmVtYWluaW5nVGFzay5pbm5lclRleHQgPSBgUmVtYWluaW5nICR7dGFza1N0cmluZ306ICR7aW5jb21wbGV0ZVRhc2tDb3VudH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHNlbGVjdGVkUHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKG5ld1Rhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja0JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suY29tcGxldGU7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdXNlci1wcm9qZWN0c11cIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=