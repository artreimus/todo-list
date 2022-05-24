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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 0px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  display: block;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: rgb(255, 255, 255);\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n\n  /* background-color: var(--primary-light); */\n}\n\nhtml {\n  /* display: hidden; */\n  background-color: var(--primary-light);\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 50px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n}\n\n.user-project-list,\n.project-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.list-name {\n  --user-project-color: rgba(161, 224, 186, 1);\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 0px 0px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.list-name:hover {\n  opacity: 0.8;\n}\n\n.list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.user-project-list > .list-name {\n  background-color: rgba(161, 224, 186, 1);\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.fa-bars {\n  font-weight: 1000;\n  font-size: 1rem;\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px auto;\n}\n\n.new-project-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n  margin: 20px 0;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.btn.create:hover {\n  transform: scale(1.2);\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n  inline-size: 80%;\n  word-break: break-all;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  display: block;\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n  overflow: hidden;\n  transition: background-color 250ms ease-in-out;\n}\n\n.new-task-creator * {\n  position: relative;\n  z-index: 10;\n}\n\n.new-task-creator input[type=\"text\"] {\n  transition: 250ms ease-in-out;\n}\n.new-task-creator input[type=\"text\"]:focus {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 10000px 10000px rgb(255, 255, 255);\n  z-index: 5;\n}\n\n.create-new-task:hover .new-task-creator {\n  background-color: white;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  /* display: none; */\n  display: flex;\n\n  align-items: center;\n  gap: 1rem;\n}\n\n.delete-stuff.show {\n  display: block;\n}\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n.none {\n  display: none;\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .project-header {\n    flex-flow: column;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n\n  .main {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n    position: absolute;\n    top: 100px;\n    overflow: hidden;\n    transition: all 250ms ease-in;\n  }\n\n  .nav.show {\n    display: flex;\n    display: block;\n    border-top: 2px solid rgba(0, 0, 0, 0.3);\n  }\n\n  .project-preview {\n    position: relative;\n    top: 10%;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: black;\n  }\n\n  .project-preview.hide {\n    display: none;\n  }\n\n  .list-name.active-list {\n    font-weight: 700;\n\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSx5QkFBeUIsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSx3QkFBd0IsYUFBYSxXQUFXLFlBQVksVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVyxJQUFJLG9CQUFvQjtBQUNuRjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG9EOztBQUU3QztBQUNBO0FBQ0E7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSwyQkFBMkIsaUVBQW9CO0FBQy9DO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWZhdWx0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlclByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktZGFyazogcmdiKDI4LCAyOCwgMjkpO1xcbiAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gIC0tcHJpbWFyeS1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIGRpc3BsYXk6IGhpZGRlbjsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XFxufVxcblxcbmkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uZmEtYXBwbGUge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4ucGFnZS1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5idXR0b24tb3Blbi1uYXYgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogbmF2YmFyIHN1cHBvcnQgKi9cXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7IC8qICAtIGhlYWRlcl9oZWlnaHQqL1xcbn1cXG5cXG4vKiBOYXYgKi9cXG5cXG4ubmF2IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi51c2VyLXByb2plY3QtbGlzdCxcXG4ucHJvamVjdC1saXN0IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgLS11c2VyLXByb2plY3QtY29sb3I6IHJnYmEoMTYxLCAyMjQsIDE4NiwgMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5saXN0LW5hbWU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubGlzdC1uYW1lLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnVzZXItcHJvamVjdC1saXN0ID4gLmxpc3QtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMjI0LCAxODYsIDEpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi10YXNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MywgNDMpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi1kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCAxMjkpO1xcbn1cXG5cXG4ubGlzdC1uYW1lLm5hdi13ZWVrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTcyLCAyNTUpO1xcbn1cXG5cXG4uZmEtYmFycyB7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCxcXG4gICAgICByZ2IoMjU1LCA4MiwgODIpLFxcbiAgICAgIHJnYigyNTUsIDI1MywgMTA4KSxcXG4gICAgICByZ2IoMTAsIDE1NywgMjU1KVxcbiAgICApXFxuICAgIDAuNTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDY0LjNkZWcsXFxuICAgIHJnYmEoMjU0LCAxMjIsIDE1MiwgMC44MSkgMTcuNyUsXFxuICAgIHJnYmEoMjU1LCAyMDYsIDEzNCwgMSkgNjQuNyUsXFxuICAgIHJnYmEoMTcyLCAyNTMsIDE2MywgMC42NCkgMTEyLjElXFxuICApO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogUHJvamVjdCBQcmV2aWV3ICovXFxuXFxuLnByb2plY3QtcHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAzMDBweDtcXG4gIHRvcDogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7IC8qIC0gbmF2IGJhciBvbiB0aGUgbGVmdCAqL1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMDkuNmRlZyxcXG4gICAgcmdiYSgyNTUsIDE3OSwgMTg5LCAxKSAxLjglLFxcbiAgICByZ2JhKDI1NCwgMjQ4LCAxNTQsIDEpIDUwLjYlLFxcbiAgICByZ2JhKDE2MSwgMjI0LCAxODYsIDEpIDEwMC4zJVxcbiAgKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAycmVtIDAgMDtcXG4gIGlubGluZS1zaXplOiA4MCU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5wcm9qZWN0LWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogVGFza3MgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDJyZW07XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLXNpemU6IDFlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE0NywgMTQ3LCAwLjgxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDE0NywgMTQ3LCAwLjgxKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEuNXB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgKiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHRyYW5zaXRpb246IDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmV3LXRhc2stY3JlYXRvciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwMDAwcHggMTAwMDBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4uY3JlYXRlLW5ldy10YXNrOmhvdmVyIC5uZXctdGFzay1jcmVhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5ldy50YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMjUwbXMgZWFzZS1pbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogIERlbGV0ZSBCdXR0b25zICovXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5kZWxldGUtc3R1ZmYuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmJ0bi5kZWxldGUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDk5LCA5OSwgOTksIDAuODEpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG59XFxuXFxuLm5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbjtcXG4gIH1cXG5cXG4gIC5uYXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLnByb2plY3QtcHJldmlldy5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5saXN0LW5hbWUuYWN0aXZlLWxpc3Qge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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QWtEO0VBQ2xELFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjs7SUFFaEIsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1kYXJrOiByZ2IoMjgsIDI4LCAyOSk7XFxuICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLXNlY29uZGFyeS1saWdodDogI2RkZDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7ICovXFxufVxcblxcbmh0bWwge1xcbiAgLyogZGlzcGxheTogaGlkZGVuOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG59XFxuXFxuaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5mYS1hcHBsZSB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5wYWdlLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5idXR0b24tb3Blbi1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBuYXZiYXIgc3VwcG9ydCAqL1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwNHB4KTsgLyogIC0gaGVhZGVyX2hlaWdodCovXFxufVxcblxcbi8qIE5hdiAqL1xcblxcbi5uYXYge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnVzZXItcHJvamVjdC1saXN0LFxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICAtLXVzZXItcHJvamVjdC1jb2xvcjogcmdiYSgxNjEsIDIyNCwgMTg2LCAxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5saXN0LW5hbWUuYWN0aXZlLWxpc3Qge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0LWxpc3QgPiAubGlzdC1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAyMjQsIDE4NiwgMSk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQzLCA0Myk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LWRheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDEyOSk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXdlZWsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNzIsIDI1NSk7XFxufVxcblxcbi5mYS1iYXJzIHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHJpZ2h0LFxcbiAgICAgIHJnYigyNTUsIDgyLCA4MiksXFxuICAgICAgcmdiKDI1NSwgMjUzLCAxMDgpLFxcbiAgICAgIHJnYigxMCwgMTU3LCAyNTUpXFxuICAgIClcXG4gICAgMC41O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ubmV3Lmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5idXR0b24tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNjQuM2RlZyxcXG4gICAgcmdiYSgyNTQsIDEyMiwgMTUyLCAwLjgxKSAxNy43JSxcXG4gICAgcmdiYSgyNTUsIDIwNiwgMTM0LCAxKSA2NC43JSxcXG4gICAgcmdiYSgxNzIsIDI1MywgMTYzLCAwLjY0KSAxMTIuMSVcXG4gICk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiBQcm9qZWN0IFByZXZpZXcgKi9cXG5cXG4ucHJvamVjdC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTsgLyogLSBuYXYgYmFyIG9uIHRoZSBsZWZ0ICovXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEwOS42ZGVnLFxcbiAgICByZ2JhKDI1NSwgMTc5LCAxODksIDEpIDEuOCUsXFxuICAgIHJnYmEoMjU0LCAyNDgsIDE1NCwgMSkgNTAuNiUsXFxuICAgIHJnYmEoMTYxLCAyMjQsIDE4NiwgMSkgMTAwLjMlXFxuICApO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luOiAwIDJyZW0gMCAwO1xcbiAgaW5saW5lLXNpemU6IDgwJTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnByb2plY3QtY291bnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMnJlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tc2l6ZTogMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIC5jdXN0b20tY2hlY2tib3gge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ3LCAxNDcsIDAuODEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTQ3LCAxNDcsIDAuODEpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMS41cHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciAqIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmV3LXRhc2stY3JlYXRvciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5uZXctdGFzay1jcmVhdG9yIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTAwMDBweCAxMDAwMHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXRhc2s6aG92ZXIgLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3LnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKiAgRGVsZXRlIEJ1dHRvbnMgKi9cXG4uZGVsZXRlLXN0dWZmIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1zdHVmZi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYnRuLmRlbGV0ZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoOTksIDk5LCA5OSwgMC44MSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbn1cXG5cXG4ubm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuYnV0dG9uLW9wZW4tbmF2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAucHJvamVjdC1oZWFkZXIge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluO1xcbiAgfVxcblxcbiAgLm5hdi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxuXFxuICAucHJvamVjdC1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAucHJvamVjdC1wcmV2aWV3LmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjbGVhckVsZW1lbnQsIGNyZWF0ZVByb2plY3RFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1kZWZhdWx0LXByb2plY3RzXVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QobmFtZSwgaWQpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlkOiBpZCxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCkge1xuICBjbGVhckVsZW1lbnQoZGVmYXVsdFByb2plY3RzQ29udGFpbmVyKTtcbiAgZGVmYXVsdFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBkZWZhdWx0UHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREZWZhdWx0UHJvamVjdHMoZGVmYXVsdFByb2plY3RzKSB7XG4gIGlmIChkZWZhdWx0UHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgbGV0IHByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdChcIlRhc2tzXCIsIFwidGFza3NcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiTXkgRGF5XCIsIFwibXlEYXlcIik7XG4gICAgZGVmYXVsdFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiTXkgV2Vla1wiLCBcIm15V2Vla1wiKTtcbiAgICBkZWZhdWx0UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcIipcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1wcm9qZWN0LWRlbGV0ZS1jb250YWluZXJdXCJcbik7XG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtZGVsZXRlLWxpc3QtYnV0dG9uXVwiXG4pO1xuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3NdXCJcbik7XG4iLCJpbXBvcnQgeyBwcm9qZWN0SGVhZGVyLCB0YXNrc0NvbnRhaW5lciwgbmV3VGFza0Zvcm0gfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdERlbGV0ZUNvbnRhaW5lciB9IGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdi1idXR0b25dXCIpO1xuZXhwb3J0IGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtY29udGFpbmVyXVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFbGVtZW50KGRpc3BsYXkpIHtcbiAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCgpO1xuICBwcm9qZWN0SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB0YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gIHByb2plY3REZWxldGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoKSB7XG4gIHByb2plY3REZWxldGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCwgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcblxuICBpZiAocHJvamVjdC5uYW1lID09PSBcIlRhc2tzXCIpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LXRhc2tzXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbmNpbFwiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Lm5hbWUgPT09IFwiTXkgRGF5XCIpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2LWRheVwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdW5cIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSBpZiAocHJvamVjdC5uYW1lID09IFwiTXkgV2Vla1wiKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdi13ZWVrXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLXdlZWtcIj48L2k+ICR7cHJvamVjdC5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT4gJHtwcm9qZWN0Lm5hbWV9YDtcbiAgfVxuXG4gIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCkge1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lcikge1xuICBuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyRXZlcnl0aGluZyB9IGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuXG5yZW5kZXJFdmVyeXRoaW5nKCk7XG4iLCJpbXBvcnQge1xuICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVksXG4gIHNhdmVMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuaW1wb3J0IHtcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIG5ld1Byb2plY3RGb3JtLFxuICBuZXdQcm9qZWN0SW5wdXQsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHJlbmRlclByb2plY3RMaXN0LFxufSBmcm9tIFwiLi91c2VyUHJvamVjdC5qc1wiO1xuXG5pbXBvcnQge1xuICB0YXNrc0NvbnRhaW5lcixcbiAgbmV3VGFza0Zvcm0sXG4gIG5ld1Rhc2tJbnB1dCxcbiAgVGFzayxcbiAgcmVuZGVyUHJvamVjdEhlYWRlcixcbiAgcmVuZGVyUmVtYWluaW5nVGFzayxcbiAgcHJvamVjdENvbnRhaW5lcixcbiAgcmVuZGVyVGFza3MsXG59IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lcixcbiAgbG9hZERlZmF1bHRQcm9qZWN0cyxcbiAgcmVuZGVyRGVmYXVsdFByb2plY3RzLFxufSBmcm9tIFwiLi9kZWZhdWx0UHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEJ1dHRvbiwgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5RWxlbWVudCxcbiAgY2xlYXJFbGVtZW50LFxuICB0b2dnbGVFbGVtZW50LFxuICBuYXZCdXR0b24sXG4gIG5hdkNvbnRhaW5lcixcbn0gZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcbmxldCBkZWZhdWx0UHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSkpIHx8IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdmVyeXRoaW5nKCkge1xuICBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgICBzYXZlQW5kUmVuZGVyKCk7XG4gICAgfVxuICAgIHRvZ2dsZUVsZW1lbnQobmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgICB9XG4gICAgdG9nZ2xlRWxlbWVudChuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIpO1xuICB9KTtcblxuICB0YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKFxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cyk7XG4gICAgICByZW5kZXJSZW1haW5pbmdUYXNrKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrKHRhc2tOYW1lKTtcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBzZWxlY3RlZEFycmF5KCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcblxuICBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdGVkQXJyYXkoKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXG4gICAgKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9KTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHNhdmVMb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkLCBkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRBcnJheSgpO1xuXG4gIHJlbmRlckRlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgY2xlYXJFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcbiAgbG9hZERlZmF1bHRQcm9qZWN0cyhkZWZhdWx0UHJvamVjdHMpO1xuICByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PT0gbnVsbCkge1xuICAgIGRpc3BsYXlFbGVtZW50KFwibm9uZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5RWxlbWVudChcIlwiKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcbiAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGVkQXJyYXkoKSB7XG4gIGxldCBzZWxlY3RlZFByb2plY3Q7XG4gIGlmIChcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJ0YXNrc1wiIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPT09IFwibXlXZWVrXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9PT0gXCJteURheVwiXG4gICkge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXG4gICAgKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufVxuIiwiZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSBcInRhc2sucHJvamVjdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0RFRkFVTFRfUFJPSkVDVF9LRVkgPSBcInRhc2suZGVmYXVsdFByb2plY3RzXCI7XG5leHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZFByb2plY3RJZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQsIGRlZmF1bHRQcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZLFxuICAgIHNlbGVjdGVkUHJvamVjdElkXG4gICk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIExPQ0FMX1NUT1JBR0VfREVGQVVMVF9QUk9KRUNUX0tFWSxcbiAgICBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdHMpXG4gICk7XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWhlYWRlcl1cIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XG5jb25zdCBwcm9qZWN0UmVtYWluaW5nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWNvdW50XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWJvZHldXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dF1cIik7XG5jb25zdCBuZXdUYXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtcHJvamVjdC1wcmV2aWV3XVwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayhuYW1lLCBkdWVEYXRlID0gXCJObyBEYXRlXCIpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyKHNlbGVjdGVkUHJvamVjdCkge1xuICByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgcmVuZGVyUmVtYWluaW5nVGFzayhzZWxlY3RlZFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGl0bGUoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3QubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlbWFpbmluZ1Rhc2soc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza1N0cmluZyA9IGluY29tcGxldGVUYXNrQ291bnQgPT09IDEgPyBcInRhc2tcIiA6IFwidGFza3NcIjtcbiAgcHJvamVjdFJlbWFpbmluZ1Rhc2suaW5uZXJUZXh0ID0gYFJlbWFpbmluZyAke3Rhc2tTdHJpbmd9OiAke2luY29tcGxldGVUYXNrQ291bnR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCkge1xuICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShuZXdUYXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXVzZXItcHJvamVjdHNdXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCJcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9