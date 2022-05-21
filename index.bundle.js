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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 40px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n  background-color: var(--primary-light);\n}\n\n.task-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.task-list > .list-name {\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.task-list > .list-name:hover {\n  opacity: 0.8;\n}\n\n.task-list > .list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.new-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.8;\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n  margin-right: calc(3rem + 10px);\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n  }\n\n  .project-preview {\n    position: relative;\n    top: 0;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100vh;\n    background-color: black;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: rgb(28, 28, 29);\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  color: var(--primary-dark);\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  margin-bottom: 48px;\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  font-size: 1rem;\n  font-style: inherit;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n.fa-apple {\n  font-size: 40px;\n}\n\n.page-name {\n  font-family: inherit;\n  font-size: 50px;\n}\n\n.button-open-nav {\n  display: none;\n  width: 40px;\n  padding: 0;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  /* navbar support */\n  min-height: calc(100vh - 104px); /*  - header_height*/\n}\n\n/* Nav */\n\n.nav {\n  width: 300px;\n  padding: 20px;\n  background-color: var(--primary-light);\n}\n\n.task-list {\n  font-size: inherit;\n  list-style: none;\n}\n\n.task-list > .list-name {\n  width: 100%;\n  height: 3rem;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.task-list > .list-name:hover {\n  opacity: 0.8;\n}\n\n.task-list > .list-name.active-list {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.list-name.nav-tasks {\n  background-color: rgb(255, 43, 43);\n}\n\n.list-name.nav-day {\n  background-color: rgb(255, 226, 129);\n}\n\n.list-name.nav-week {\n  background-color: rgb(71, 172, 255);\n}\n\n.divider {\n  border-bottom-width: 3px;\n  border-bottom: solid;\n  border-image: linear-gradient(\n      to right,\n      rgb(255, 82, 82),\n      rgb(255, 253, 108),\n      rgb(10, 157, 255)\n    )\n    0.5;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.new-container {\n  padding: 0px;\n  border-radius: 5px;\n  border: 2px solid black;\n}\n\n.new.list {\n  background-color: transparent;\n  width: 90%;\n  height: 3rem;\n  padding: 10px 20px;\n  transition: border 250ms ease-in;\n}\n\n.btn.create {\n  font-size: 1.2rem;\n  font-weight: bold;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.8;\n}\n\n.button-project {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    64.3deg,\n    rgba(254, 122, 152, 0.81) 17.7%,\n    rgba(255, 206, 134, 1) 64.7%,\n    rgba(172, 253, 163, 0.64) 112.1%\n  );\n  text-align: left;\n}\n\n/* Project Preview */\n\n.project-preview {\n  position: absolute;\n  left: 300px;\n  top: 50px;\n  height: 100%;\n  width: calc(100% - 300px); /* - nav bar on the left */\n  padding: 20px 40px;\n  margin: 0 auto;\n  border-top-left-radius: 15px;\n  background-image: linear-gradient(\n    109.6deg,\n    rgba(255, 179, 189, 1) 1.8%,\n    rgba(254, 248, 154, 1) 50.6%,\n    rgba(161, 224, 186, 1) 100.3%\n  );\n}\n\n/* Header */\n.project-header {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-title {\n  font-family: inherit;\n  font-size: 3rem;\n  font-weight: 900;\n  margin: 0 2rem 0 0;\n}\n\n.project-count {\n  font-size: 1rem;\n  opacity: 0.5;\n  margin-right: calc(3rem + 10px);\n}\n\n/* Tasks */\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.project {\n  background-color: rgb(255, 255, 255);\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.project label {\n  position: relative;\n}\n\n.project label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.project label::after {\n  content: \"\";\n  position: absolute;\n  left: 2rem;\n  right: 0;\n  height: 3px;\n  background-color: currentColor;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 250ms ease-in-out;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: var(--size);\n  transform: scale(1);\n  transition: transform 250ms ease-in-out;\n}\n\n.project:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background-color: rgba(255, 147, 147, 0.81);\n  border-color: rgba(255, 147, 147, 0.81);\n  box-shadow: inset 0 0 0 1.5px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.7;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  opacity: 0.7;\n  transform: scaleX(1);\n}\n\n.new-task-creator {\n  border-radius: 5px;\n  border: 2px solid black;\n  padding: 0px 20px;\n}\n\n.new-task-creator form {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.new.task {\n  background-color: transparent;\n  width: 100%;\n  height: 3rem;\n  transition: border 250ms ease-in;\n  display: inline-block;\n}\n\n/*  Delete Buttons */\n.delete-stuff {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn.delete {\n  padding: 10px;\n  color: rgba(99, 99, 99, 0.81);\n  transition: color 250ms ease-in;\n}\n\n.btn.delete:hover {\n  color: rgba(255, 0, 0, 1);\n}\n\n/* Media queries */\n\n@media (max-width: 650px) {\n  .button-open-nav {\n    display: block;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .nav {\n    width: 100%;\n    display: none;\n  }\n\n  .project-preview {\n    position: relative;\n    top: 0;\n    left: 0;\n    border-radius: 0px;\n    width: 100%;\n    height: 100vh;\n    background-color: black;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZnFCOztBQUVyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktZGFyazogcmdiKDI4LCAyOCwgMjkpO1xcbiAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG59XFxuXFxuaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG5hdmJhciBzdXBwb3J0ICovXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpOyAvKiAgLSBoZWFkZXJfaGVpZ2h0Ki9cXG59XFxuXFxuLyogTmF2ICovXFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQzLCA0Myk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LWRheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDEyOSk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXdlZWsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNzIsIDI1NSk7XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiKDI1NSwgODIsIDgyKSxcXG4gICAgICByZ2IoMjU1LCAyNTMsIDEwOCksXFxuICAgICAgcmdiKDEwLCAxNTcsIDI1NSlcXG4gICAgKVxcbiAgICAwLjU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ubmV3LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5idXR0b24tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNjQuM2RlZyxcXG4gICAgcmdiYSgyNTQsIDEyMiwgMTUyLCAwLjgxKSAxNy43JSxcXG4gICAgcmdiYSgyNTUsIDIwNiwgMTM0LCAxKSA2NC43JSxcXG4gICAgcmdiYSgxNzIsIDI1MywgMTYzLCAwLjY0KSAxMTIuMSVcXG4gICk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiBQcm9qZWN0IFByZXZpZXcgKi9cXG5cXG4ucHJvamVjdC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTsgLyogLSBuYXYgYmFyIG9uIHRoZSBsZWZ0ICovXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEwOS42ZGVnLFxcbiAgICByZ2JhKDI1NSwgMTc5LCAxODksIDEpIDEuOCUsXFxuICAgIHJnYmEoMjU0LCAyNDgsIDE1NCwgMSkgNTAuNiUsXFxuICAgIHJnYmEoMTYxLCAyMjQsIDE4NiwgMSkgMTAwLjMlXFxuICApO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luOiAwIDJyZW0gMCAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb3VudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoM3JlbSArIDEwcHgpO1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qICBEZWxldGUgQnV0dG9ucyAqL1xcbi5kZWxldGUtc3R1ZmYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjgxKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5idXR0b24tb3Blbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3Nc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QVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktZGFyazogcmdiKDI4LCAyOCwgMjkpO1xcbiAgLS1zZWNvbmRhcnktZGFyazogIzQ0NDtcXG4gIC0tcHJpbWFyeS1saWdodDogI2VlZTtcXG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZGRkO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG59XFxuXFxuaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZhLWFwcGxlIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnBhZ2UtbmFtZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1vcGVuLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLW9wZW4tbmF2IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG5hdmJhciBzdXBwb3J0ICovXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpOyAvKiAgLSBoZWFkZXJfaGVpZ2h0Ki9cXG59XFxuXFxuLyogTmF2ICovXFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IC5saXN0LW5hbWU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFzay1saXN0ID4gLmxpc3QtbmFtZS5hY3RpdmUtbGlzdCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQzLCA0Myk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LWRheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDEyOSk7XFxufVxcblxcbi5saXN0LW5hbWUubmF2LXdlZWsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNzIsIDI1NSk7XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiKDI1NSwgODIsIDgyKSxcXG4gICAgICByZ2IoMjU1LCAyNTMsIDEwOCksXFxuICAgICAgcmdiKDEwLCAxNTcsIDI1NSlcXG4gICAgKVxcbiAgICAwLjU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ubmV3LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5idXR0b24tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNjQuM2RlZyxcXG4gICAgcmdiYSgyNTQsIDEyMiwgMTUyLCAwLjgxKSAxNy43JSxcXG4gICAgcmdiYSgyNTUsIDIwNiwgMTM0LCAxKSA2NC43JSxcXG4gICAgcmdiYSgxNzIsIDI1MywgMTYzLCAwLjY0KSAxMTIuMSVcXG4gICk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiBQcm9qZWN0IFByZXZpZXcgKi9cXG5cXG4ucHJvamVjdC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTsgLyogLSBuYXYgYmFyIG9uIHRoZSBsZWZ0ICovXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEwOS42ZGVnLFxcbiAgICByZ2JhKDI1NSwgMTc5LCAxODksIDEpIDEuOCUsXFxuICAgIHJnYmEoMjU0LCAyNDgsIDE1NCwgMSkgNTAuNiUsXFxuICAgIHJnYmEoMTYxLCAyMjQsIDE4NiwgMSkgMTAwLjMlXFxuICApO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luOiAwIDJyZW0gMCAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb3VudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoM3JlbSArIDEwcHgpO1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdCBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNDcsIDE0NywgMC44MSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qICBEZWxldGUgQnV0dG9ucyAqL1xcbi5kZWxldGUtc3R1ZmYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogcmdiYSg5OSwgOTksIDk5LCAwLjgxKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UtaW47XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5idXR0b24tb3Blbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZEhvbWVwYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==