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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  /* display: block; */\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  /* display: block; */\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVkseUJBQXlCLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxXQUFXLFlBQVksVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVcsSUFBSSxvQkFBb0I7QUFDbkY7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERvRDs7QUFFN0M7QUFDQTtBQUNBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsMkJBQTJCLGlFQUFvQjtBQUMvQztBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVmYXVsdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6IHJnYigyOCwgMjgsIDI5KTtcXG4gIC0tc2Vjb25kYXJ5LWRhcms6ICM0NDQ7XFxuICAtLXByaW1hcnktbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICAvKiBkaXNwbGF5OiBoaWRkZW47ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbn1cXG5cXG5pIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG5hdmJhciBzdXBwb3J0ICovXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpOyAvKiAgLSBoZWFkZXJfaGVpZ2h0Ki9cXG59XFxuXFxuLyogTmF2ICovXFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udXNlci1wcm9qZWN0LWxpc3QsXFxuLnByb2plY3QtbGlzdCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIC0tdXNlci1wcm9qZWN0LWNvbG9yOiByZ2JhKDE2MSwgMjI0LCAxODYsIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi51c2VyLXByb2plY3QtbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDIyNCwgMTg2LCAxKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtdGFza3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDMsIDQzKTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtZGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgMTI5KTtcXG59XFxuXFxuLmxpc3QtbmFtZS5uYXYtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE3MiwgMjU1KTtcXG59XFxuXFxuLmZhLWJhcnMge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiKDI1NSwgODIsIDgyKSxcXG4gICAgICByZ2IoMjU1LCAyNTMsIDEwOCksXFxuICAgICAgcmdiKDEwLCAxNTcsIDI1NSlcXG4gICAgKVxcbiAgICAwLjU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5uZXcubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5jcmVhdGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA2NC4zZGVnLFxcbiAgICByZ2JhKDI1NCwgMTIyLCAxNTIsIDAuODEpIDE3LjclLFxcbiAgICByZ2JhKDI1NSwgMjA2LCAxMzQsIDEpIDY0LjclLFxcbiAgICByZ2JhKDE3MiwgMjUzLCAxNjMsIDAuNjQpIDExMi4xJVxcbiAgKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIFByb2plY3QgUHJldmlldyAqL1xcblxcbi5wcm9qZWN0LXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzAwcHg7XFxuICB0b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpOyAvKiAtIG5hdiBiYXIgb24gdGhlIGxlZnQgKi9cXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTA5LjZkZWcsXFxuICAgIHJnYmEoMjU1LCAxNzksIDE4OSwgMSkgMS44JSxcXG4gICAgcmdiYSgyNTQsIDI0OCwgMTU0LCAxKSA1MC42JSxcXG4gICAgcmdiYSgxNjEsIDIyNCwgMTg2LCAxKSAxMDAuMyVcXG4gICk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMnJlbSAwIDA7XFxuICBpbmxpbmUtc2l6ZTogODAlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1jb3VudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIFRhc2tzICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yICoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5ldy10YXNrLWNyZWF0b3IgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMDAwMHB4IDEwMDAwcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctdGFzazpob3ZlciAubmV3LXRhc2stY3JlYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qICBEZWxldGUgQnV0dG9ucyAqL1xcbi5kZWxldGUtc3R1ZmYge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGVsZXRlLXN0dWZmLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5idG4uZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjgxKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcblxcbi5ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5idXR0b24tb3Blbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW47XFxuICB9XFxuXFxuICAubmF2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsbUJBQW1COztFQUVuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0IsRUFB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cnktZGFyazogcmdiKDI4LCAyOCwgMjkpO1xcbiAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gIC0tcHJpbWFyeS1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIGRpc3BsYXk6IGhpZGRlbjsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XFxufVxcblxcbmkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uZmEtYXBwbGUge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4ucGFnZS1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5idXR0b24tb3Blbi1uYXYgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogbmF2YmFyIHN1cHBvcnQgKi9cXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7IC8qICAtIGhlYWRlcl9oZWlnaHQqL1xcbn1cXG5cXG4vKiBOYXYgKi9cXG5cXG4ubmF2IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi51c2VyLXByb2plY3QtbGlzdCxcXG4ucHJvamVjdC1saXN0IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgLS11c2VyLXByb2plY3QtY29sb3I6IHJnYmEoMTYxLCAyMjQsIDE4NiwgMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5saXN0LW5hbWU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnVzZXItcHJvamVjdC1saXN0ID4gLmxpc3QtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMjI0LCAxODYsIDEpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi10YXNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MywgNDMpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi1kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCAxMjkpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi13ZWVrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTcyLCAyNTUpO1xcbn1cXG5cXG4uZmEtYmFycyB7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICByZ2IoMjU1LCA4MiwgODIpLFxcbiAgICAgIHJnYigyNTUsIDI1MywgMTA4KSxcXG4gICAgICByZ2IoMTAsIDE1NywgMjU1KVxcbiAgICApXFxuICAgIDAuNTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDY0LjNkZWcsXFxuICAgIHJnYmEoMjU0LCAxMjIsIDE1MiwgMC44MSkgMTcuNyUsXFxuICAgIHJnYmEoMjU1LCAyMDYsIDEzNCwgMSkgNjQuNyUsXFxuICAgIHJnYmEoMTcyLCAyNTMsIDE2MywgMC42NCkgMTEyLjElXFxuICApO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogUHJvamVjdCBQcmV2aWV3ICovXFxuXFxuLnByb2plY3QtcHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAzMDBweDtcXG4gIHRvcDogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7IC8qIC0gbmF2IGJhciBvbiB0aGUgbGVmdCAqL1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMDkuNmRlZyxcXG4gICAgcmdiYSgyNTUsIDE3OSwgMTg5LCAxKSAxLjglLFxcbiAgICByZ2JhKDI1NCwgMjQ4LCAxNTQsIDEpIDUwLjYlLFxcbiAgICByZ2JhKDE2MSwgMjI0LCAxODYsIDEpIDEwMC4zJVxcbiAgKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAycmVtIDAgMDtcXG4gIGlubGluZS1zaXplOiA4MCU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5wcm9qZWN0LWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogVGFza3MgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDJyZW07XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLXNpemU6IDFlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE0NywgMTQ3LCAwLjgxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDE0NywgMTQ3LCAwLjgxKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEuNXB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciB7XFxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgKiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHRyYW5zaXRpb246IDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmV3LXRhc2stY3JlYXRvciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwMDAwcHggMTAwMDBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4uY3JlYXRlLW5ldy10YXNrOmhvdmVyIC5uZXctdGFzay1jcmVhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5ldy50YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogIERlbGV0ZSBCdXR0b25zICovXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZWxldGUtc3R1ZmYuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmJ0bi5kZWxldGUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDk5LCA5OSwgOTksIDAuODEpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG59XFxuXFxuLm5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbjtcXG4gIH1cXG5cXG4gIC5uYXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJldmlldy5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5saXN0LW5hbWUuYWN0aXZlLWxpc3Qge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2xlYXJFbGVtZW50LCBjcmVhdGVQcm9qZWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtZGVmYXVsdC1wcm9qZWN0c11cIlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KG5hbWUsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpZDogaWQsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgY2xlYXJFbGVtZW50KGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lcik7XG4gIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LCBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cykge1xuICBpZiAoZGVmYXVsdFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoXCJUYXNrc1wiLCBcInRhc2tzXCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIk15IERheVwiLCBcIm15RGF5XCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIk15IFdlZWtcIiwgXCJteVdlZWtcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1wcm9qZWN0LWRlbGV0ZS1jb250YWluZXJdXCJcbik7XG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtZGVsZXRlLWxpc3QtYnV0dG9uXVwiXG4pO1xuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3NdXCJcbik7XG4iLCJpbXBvcnQgeyBwcm9qZWN0SGVhZGVyLCB0YXNrc0NvbnRhaW5lciwgbmV3VGFza0Zvcm0gfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdERlbGV0ZUNvbnRhaW5lciB9IGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdi1idXR0b25dXCIpO1xuZXhwb3J0IGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtY29udGFpbmVyXVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFbGVtZW50KGRpc3BsYXkpIHtcbiAgcHJvamVjdEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgdGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICBwcm9qZWN0RGVsZXRlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICByZW1vdmVDbGFzc0Zyb21FbGVtZW50KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoKSB7XG4gIHByb2plY3REZWxldGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcblxuICBpZiAocHJvamVjdC5uYW1lID09PSBcIlRhc2tzXCIpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LXRhc2tzXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbmNpbFwiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Lm5hbWUgPT09IFwiTXkgRGF5XCIpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LWRheVwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdW5cIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSBpZiAocHJvamVjdC5uYW1lID09IFwiTXkgV2Vla1wiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi13ZWVrXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLXdlZWtcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfVxuXG4gIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCkge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lcikge1xuICBuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyRXZlcnl0aGluZyB9IGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuXG5yZW5kZXJFdmVyeXRoaW5nKCk7XG4iLCJpbXBvcnQge1xuICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVksXG4gIHNhdmVMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuaW1wb3J0IHtcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIG5ld1Byb2plY3RGb3JtLFxuICBuZXdQcm9qZWN0SW5wdXQsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHJlbmRlclByb2plY3RMaXN0LFxufSBmcm9tIFwiLi91c2VyUHJvamVjdC5qc1wiO1xuXG5pbXBvcnQge1xuICB0YXNrc0NvbnRhaW5lcixcbiAgbmV3VGFza0Zvcm0sXG4gIG5ld1Rhc2tJbnB1dCxcbiAgVGFzayxcbiAgcmVuZGVyUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUmVtYWluaW5nVGFzayxcbiAgcHJvamVjdENvbnRhaW5lcixcbiAgcmVuZGVyVGFza3MsXG59IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lcixcbiAgbG9hZERlZmF1bHRQcm9qZWN0cyxcbiAgcmVuZGVyRGVmYXVsdFByb2plY3RzLFxufSBmcm9tIFwiLi9kZWZhdWx0UHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEJ1dHRvbiwgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5RWxlbWVudCxcbiAgY2xlYXJFbGVtZW50LFxuICB0b2dnbGVFbGVtZW50LFxuICBuYXZCdXR0b24sXG4gIG5hdkNvbnRhaW5lcixcbn0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcbmxldCBkZWZhdWx0UHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSkpIHx8IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdmVyeXRoaW5nKCkge1xuICBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICAgIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICB0YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKFxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cyk7XG4gICAgICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrKHRhc2tOYW1lKTtcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdGVkQXJyYXkoKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICAgKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkLCBkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuICBjbGVhckVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xuICBsb2FkRGVmYXVsdFByb2plY3RzKGRlZmF1bHRQcm9qZWN0cyk7XG4gIHJlbmRlckRlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcblxuICBpZiAoXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPT09IG51bGwgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0Lmxlbmd0aCA9PT0gMFxuICApIHtcbiAgICBkaXNwbGF5RWxlbWVudChcIm5vbmVcIik7XG4gICAgY29uc29sZS5sb2coXCJoaWRlXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICBkaXNwbGF5RWxlbWVudChcIlwiKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcbiAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGVkQXJyYXkoKSB7XG4gIGxldCBzZWxlY3RlZFByb2plY3Q7XG4gIGlmIChcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJ0YXNrc1wiIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPT09IFwibXlXZWVrXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJteURheVwiXG4gICkge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufVxuIiwiZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSBcInRhc2sucHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVkgPSBcInRhc2suZGVmYXVsdFByb2plY3RzXCI7XG5leHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZFByb2plY3RJZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICAgIHNlbGVjdGVkUHJvamVjdElkXG4gICk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSxcbiAgICBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdHMpXG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWhlYWRlcl1cIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XG5jb25zdCBwcm9qZWN0UmVtYWluaW5nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWNvdW50XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWJvZHldXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dF1cIik7XG5jb25zdCBuZXdUYXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtcHJvamVjdC1wcmV2aWV3XVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayhuYW1lLCBkdWVEYXRlID0gXCJObyBEYXRlXCIpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCkge1xuICByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3QubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlbWFpbmluZ1Rhc2soc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza1N0cmluZyA9IGluY29tcGxldGVUYXNrQ291bnQgPT09IDEgPyBcInRhc2tcIiA6IFwidGFza3NcIjtcbiAgcHJvamVjdFJlbWFpbmluZ1Rhc2suaW5uZXJUZXh0ID0gYFJlbWFpbmluZyAke3Rhc2tTdHJpbmd9OiAke2luY29tcGxldGVUYXNrQ291bnR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCkge1xuICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShuZXdUYXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItcHJvamVjdHNdXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9