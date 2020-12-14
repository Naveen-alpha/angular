(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<marquee style=\"color:rgb(4, 136, 4)\" style=\"font-size: 30px\"> BOOK CRUD</marquee>\n\n\n<div class=\"header\">\n    <h1>Welcome</h1>\n    <p>“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”</p>\n  </div>\n\n<style>\n  .header {\n  padding: 30px;\n  text-align: center;\n  background: white;\n}\n\n.header h1 {\n  font-size: 50px;\n}\n   .sidenav {\n    height: 100%;\n    width: 160px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(7, 184, 95);\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n  \n  .sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 20px;\n    color: #000000;\n    display: block;\n  }\n  \n  .sidenav a:hover {\n    color: rgb(4, 59, 209);\n  }\n   \n  /* @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  } */\n  .main {\n  margin-left: 160px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n  .search {\n    background-color: forestgreen;\n    color: black;\n    border-style: ridge \n     \n    \n  }\n  </style>\n \n  <div  class=\"sidenav\">\n      <nav>\n      <ul>\n      <li><a routerLink=\"/insert\" routerLinkActive=\"active\" title=\"insert\"> insert</a></li>\n      <li><a routerLink=\"/viewbooks\" routerLinkActive=\"active\" title=\"view all book\"> show book</a></li>\n      <li><a routerLink=\"/getByID\" routerLinkActive=\"active\" title=\"view book by id\"> custom show</a></li>\n      <li><a routerLink=\"/updateByID\" routerLinkActive=\"active\" title=\"update book by id\"> update </a></li>\n      <li><a routerLink=\"/deletebyID\" routerLinkActive=\"active\" title=\"delete book by id\"> delete </a></li>\n      <li><a routerLink=\"/notes\" routerLinkActive=\"active\" title=\"notes\"> Notes </a></li>\n\n      \n      \n      </ul>\n      </nav>\n      <div class=\"search\">\n        <p>\n          Books stock\n        </p>\n      <input [(ngModel)]=\"searchText\"  placeholder=\"search text goes here\">\n    <ul>\n      <li style=\"color: #000000\" *ngFor=\"let b of book | filter : searchText\">\n          {{b.BookName}}\n      </li>\n    </ul> \n    </div>\n  </div> \n  \n<div class=\"main\">\n   \n<router-outlet></router-outlet>\n</div>\n<div style=\"margin-left: 200px\">\n    <code>promise|async</code>: \n    <button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n    <span>Wait for it... {{ greeting | async }}</span>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-id/delete-id.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-id/delete-id.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style=\"background-color:powderblue;\">Delete Book By ID details</h2>\n\n<!-- <div id=\"DeleteID\">\n  <form (ngSubmit)=\"onSubmit(DeleteID)\" #DeleteID=\"ngForm\">\n    <div class=\"modal\" class=\"form-group\">\n      <label for=\"name\">ID\n        <input class=\"form-control\" name=\"ID\" required [(ngModel)]=\"ID\" placeholder=\"Enter Bookid\">      \n        </label>\n    </div>\n    <button class=\"d\" type=\"submit\" >Submit</button>\n    <p>{{d}}</p>\n  </form>  \n</div> -->\n\n<input #box (keyup.enter)=\"onEnter(box.value)\" placeholder=\"Press Enter after type ID\">\n\n<table width=100% border=\"collapse\">\n    <tr style=\"font-family:verdana;\"  style=\"background-color:Tomato;\">\n      <th>BookId</th>\n      <th>BookName</th>\n      <th>AuthorName</th>\n      <th>Price</th>\n    </tr>\n    <tr align=\"center\" *ngFor=\"let b of book\">\n      <td>{{b.ID}}</td>\n      <td>{{b.BookName}}</td>\n      <td>{{b.AuthorName}}</td>\n      <td>{{b.Price}}</td>\n    </tr>\n  </table>\n  <p style=\"color:red;\">End of document</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-id/get-id.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-id/get-id.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style=\"background-color:powderblue;\">Get Book By ID details</h2>\n\n<!-- <div id=\"GetID\">\n  <form (ngSubmit)=\"onSubmit(GetID)\" #GetID=\"ngForm\">\n    <div class=\"modal\" class=\"form-group\">\n      <label for=\"name\">ID\n        <input class=\"form-control\" name=\"ID\"  required [(ngModel)]=\"ID\" placeholder=\"Enter Bookid\">      \n        </label>\n    </div>\n    <button type=\"submit\" >Submit</button>\n  </form>  \n</div> -->\n\n<input #box (keyup.enter)=\"onEnter(box.value)\" placeholder=\"Press Enter after type ID\">\n<table width=100% border=\"collapse\">\n    <tr style=\"font-family:verdana;\"  style=\"background-color:Tomato;\">\n      <th>BookId</th>\n      <th>BookName</th>\n      <th>AuthorName</th>\n      <th>Price</th>\n    </tr>\n    <tr align=\"center\" *ngFor=\"let bbid of getbookbyid\">\n      <td>{{bbid.ID}}</td>\n      <td>{{bbid.BookName}}</td>\n      <td>{{bbid.AuthorName}}</td>\n      <td>{{bbid.Price}}</td>\n    </tr>\n  </table>\n  <p style=\"color:red;\">End of document</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/insert/insert.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insert/insert.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <h2 style=\"background-color:powderblue;\">INSERT BOOK</h2> \n  <div [class]=\"message\" id=\"bookForm\">\n    <form (ngSubmit)=\"onSubmit(bookForm)\" #bookForm=\"ngForm\">\n      <div class=\"modal\" class=\"form-group\">\n        <label for=\"name\">ID\n          <input class=\"form-control\" name=\"ID\" required [(ngModel)]=\"ID\" placeholder=\"Enter Bookid\">      \n          </label>\n          <label for=\"name\">BookName\n          <input class=\"form-control\" name=\"BookName\" required [(ngModel)]=\"BookName\" placeholder=\"BookName\">\n          </label>\n          <label for=\"name\">AuthorName\n          <input class=\"form-control\" name=\"AuthorName\" required [(ngModel)]=\"AuthorName\" placeholder=\"AuthorName\">      \n          </label>\n          <label for=\"name\">Price\n          <input class=\"form-control\" name=\"Price\" required [(ngModel)]=\"Price\" placeholder=\"Price\">      \n          </label>\n      </div>\n      <button class=\"i\" type=\"submit\" >Submit</button>\n    </form>  \n  </div>\n \n <table  width=100% border=\"collapse\">\n  <tr  style=\"font-family:verdana;\" style=\"background-color:Tomato;\">\n    <th>BookId</th>\n    <th>BookName</th>\n    <th>AuthorName</th>\n    <th>Price</th>\n  </tr>\n  <tr align=\"center\" *ngFor=\"let b of book\">\n    <td>{{b.ID}}</td>\n    <td>{{b.BookName}}</td>\n    <td>{{b.AuthorName}}</td>\n    <td>{{b.Price}}</td>\n  </tr>\n</table>\n<p style=\"color:red;\">End of document</p> \n\n<!-- <h2 style=\"background-color:powderblue;\">INSERT BOOK</h2> \n  <form  [formGroup]=\"bookdetails\" (ngSubmit)=\"onSubmit()\">\n    <h5 *ngIf=\"success\">Your Book is added!</h5>\n      <label >ID\n        <input type=\"text\" formControlName=\"id\"  placeholder=\"Enter Bookid\">      \n        <div *ngIf=\"submitted && bookdetails.controls.id.errors\" class=\"error\">\n          <div *ngIf=\"bookdetails.controls.id.errors.required\">Id is required</div>\n        </div>\n      </label>\n        <label >BookName\n            <input type=\"text\" formControlName=\"bname\"  placeholder=\"Enter Bookname\">      \n            <div *ngIf=\"submitted && bookdetails.controls.bname.errors\" class=\"error\">\n              <div *ngIf=\"bookdetails.controls.bname.errors.required\">Bookname is required</div>\n            </div>\n        </label>\n        <label >AuthorName\n            <input type=\"text\" formControlName=\"aname\" placeholder=\"Enter Authorname\">      \n            <div *ngIf=\"submitted && bookdetails.controls.aname.errors\" class=\"error\">\n              <div *ngIf=\"bookdetails.controls.aname.errors.required\">Authorname is required</div>\n            </div>        \n          </label>\n        <label >Price\n            <input type=\"text\" formControlName=\"price\"  placeholder=\"Enter Price\">      \n            <div *ngIf=\"submitted && bookdetails.controls.price.errors\" class=\"error\">\n              <div *ngIf=\"bookdetails.controls.price.errors.required\">price is required</div>\n            </div>        \n          </label>\n    <input typr=\"submit\" value=\"add book\" class=\"cta\">\n  </form>  \n\n<div *ngIf=\"submitted\" class=\"results\">\n<table  width=100% border=\"collapse\">\n<tr  style=\"font-family:verdana;\" style=\"background-color:Tomato;\">\n  <th>BookId</th>\n  <th>BookName</th>\n  <th>AuthorName</th>\n  <th>Price</th>\n</tr>\n<tr align=\"center\" *ngFor=\"let b of book\">\n  <td>{{b.ID}}</td>\n  <td>{{b.BookName}}</td>\n  <td>{{b.AuthorName}}</td>\n  <td>{{b.Price}}</td>\n</tr>\n</table>\n<p style=\"color:red;\">End of document</p> \n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\" style=\"margin-top: 10px;\">\n  <div class=\"container\">\n    <div class=\"head-commen\">Notes</div>\n  </div>\n</div>\n\n<form (ngSubmit)=\"onSubmit(user)\"  #user= \"ngForm\"> \n    <label style=\"font-size: 14px;\n    font-weight: 500;\">Note : <b> {{Display}} </b>&nbsp; Last updated on {{Date}}</label>\n    <br>\n    <br>\n    <button class=\"input\" type=\"button\" (click)=\"Edit()\" >Edit </button><br>\n\n<div *ngIf=\"EditAvailable\">\n  <textarea class=\"text\" rows=\"20\" cols=\"40\" name = \"Notes\" autofocus=\"autofocus\" placeholder=\"Text here...\" class=\"form-control\" value={{Notes}}  required [(ngModel)]=\"Notes\" >  </textarea><br>\n  <input class=\"input\" mat-input type = \"submit\" value = \"Submit\"> &nbsp;\n</div>\n</form>\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-id/update-id.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-id/update-id.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 style=\"background-color:powderblue;\">Update Book By ID details</h2>\nEnter ID to update :\n<input #box (keyup.enter)=\"onEnter(box.value)\" placeholder=\"Press Enter after type ID\">\n    <div class=\"message\"  id=\"updateID\">\n        <form (ngSubmit)=\"onSubmit(updateID)\" #updateID=\"ngForm\">\n          <div class=\"modal\" class=\"form-group\">\n            <label for=\"name\">ID\n              <input class=\"form-control\" value={{ID}}  name=\"ID\" required [(ngModel)]=\"ID\" >      \n              </label>\n              <label for=\"name\">BookName\n              <input class=\"form-control\"  value={{BookName}} name=\"BookName\" required [(ngModel)]=\"BookName\" >\n              </label>\n              <label for=\"name\">AuthorName\n              <input class=\"form-control\" value={{AuthorName}} name=\"AuthorName\" required [(ngModel)]=\"AuthorName\" >      \n              </label>\n              <label for=\"name\">Price\n              <input class=\"form-control\" value={{Price}} name=\"Price\" required [(ngModel)]=\"Price\">      \n              </label>\n          </div>\n          <button  type=\"submit\" >Submit</button>\n        </form>  \n      </div>\n<table width=100% border=\"collapse\">\n  <tr style=\"font-family:verdana;\"  style=\"background-color:Tomato;\">\n    <th>BookId</th>\n    <th>BookName</th>\n    <th>AuthorName</th>\n    <th>Price</th>\n  </tr>\n  <tr align=\"center\" *ngFor=\"let b of book\">\n    <td>{{b.ID}}</td>\n    <td>{{b.BookName}}</td>\n    <td>{{b.AuthorName}}</td>\n    <td>{{b.Price}}</td>\n  </tr>\n \n</table>\n<p style=\"color:red;\">End of document</p> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style=\"background-color:powderblue;\">Get Book details</h2>\n    \n<label>Items per page:\n    <select [(ngModel)]=\"itemsPerPage\" [value]=\"5\">\n        <option value=\"5\" selected=\"selected\">5</option>\n        <option value=\"10\">10</option>\n        <option value=\"15\">15</option>\n        <option value=\"20\">20</option>\n    </select>\n</label>\n\n<label style=\"float:right\" >sort by\n    <select class='form-control' \n    (change)=\"ChangingValue($event)\" [value]=\"SortByID\">\n        <option value=\"SortByID\" selected=\"selected\" >Id</option>\n        <option value=\"SortByPrice\">Price</option>\n    </select>\n</label>\n\n<table  width=100% border=\"collapse\">\n\n  <tr  style=\"font-family:verdana;\" style=\"background-color:Tomato;\">\n    <th>BookId</th>\n    <th>BookName</th>\n    <th>AuthorName</th>\n    <th>Price</th>\n  </tr>\n  <tr align=\"center\" *ngFor=\"let b of book | paginate: { itemsPerPage: itemsPerPage, currentPage: p }\">\n    <td>{{b.ID}}</td>\n    <td>{{b.BookName}}</td>\n    <td>{{b.AuthorName}}</td>\n    <td>{{b.Price}}</td>\n  </tr>\n</table>\n<pagination-controls (pageChange)=\"p = $event\" >\n</pagination-controls>\n<p style=\"color:red;\">End of document</p>\n                      <!-- id=\"some_id\"\n                      (pageChange)=\"pageChanged($event)\"\n                      maxSize=\"9\"\n                      directionLinks=\"true\"\n                      autoHide=\"true\"\n                      responsive=\"true\"\n                      previousLabel=\"Previous\"\n                      nextLabel=\"Next\"\n                      screenReaderPaginationLabel=\"Pagination\"\n                      screenReaderPageLabel=\"page\"\n                      screenReaderCurrentLabel=\"You're on page\" -->\n\n                     ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _get_id_get_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-id/get-id.component */ "./src/app/get-id/get-id.component.ts");
/* harmony import */ var _update_id_update_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-id/update-id.component */ "./src/app/update-id/update-id.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _delete_id_delete_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-id/delete-id.component */ "./src/app/delete-id/delete-id.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");









const appRoutes = [
    { path: '', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_8__["NotesComponent"] },
    { path: 'viewbooks', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'getByID', component: _get_id_get_id_component__WEBPACK_IMPORTED_MODULE_4__["GetIDComponent"] },
    { path: 'updateByID', component: _update_id_update_id_component__WEBPACK_IMPORTED_MODULE_5__["UpdateIDComponent"] },
    { path: 'deletebyID', component: _delete_id_delete_id_component__WEBPACK_IMPORTED_MODULE_7__["DeleteIDComponent"] },
    { path: 'insert', component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"] },
    { path: 'notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_8__["NotesComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ddsmoothmenu{font-size:13px;background-color:#4CAF50;width:100%}\n.ddsmoothmenu ul{z-index:100;margin:0;padding:0;list-style-type:none}\n.ddsmoothmenu ul li{position:relative;display:inline;float:left; overflow:hidden}\n.ddsmoothmenu ul li a{display:block;background-color:#4CAF50;color:#fff;font-size:15px;padding:.9em;text-decoration:none}\n.ddsmoothmenu ul li a.selected,.ddsmoothmenu ul li a:hover{background-color:#8bc34a}\n* html \n.ddsmoothmenu ul li a{display:inline-block}\n.ddsmoothmenu ul li a:link,.ddsmoothmenu ul li a:visited{color:#fff}\n.ddsmoothmenu ul li a:hover{text-decoration:none}\n.ddsmoothmenu ul li ul{position:absolute;left:0;display:none;visibility:hidden}\n.ddsmoothmenu ul li ul li{display:list-item;float:none}\n.ddsmoothmenu ul li ul li ul{top:0}\n.ddsmoothmenu ul li ul li a{font:800 21px verdana;width:300px;margin:0;border-top-width:0;padding:3px;top:0}\n* html \n.ddsmoothmenu{height:0}\nimg {\n    float: right;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxjQUFjLENBQUMsd0JBQXdCLENBQUMsVUFBVTtBQUNoRSxpQkFBaUIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CO0FBQ3BFLG9CQUFvQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLGVBQWU7QUFDaEYsc0JBQXNCLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxvQkFBb0I7QUFDeEgsMkRBQTJELHdCQUF3QjtBQUFDO3NCQUM5RCxvQkFBb0I7QUFDMUMseURBQXlELFVBQVU7QUFDbkUsNEJBQTRCLG9CQUFvQjtBQUNoRCx1QkFBdUIsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUI7QUFDOUUsMEJBQTBCLGlCQUFpQixDQUFDLFVBQVU7QUFDdEQsNkJBQTZCLEtBQUs7QUFDbEMsNEJBQTRCLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEtBQUs7QUFBQztjQUM5RixRQUFRO0FBQ3RCO0lBQ0ksWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGRzbW9vdGhtZW51e2ZvbnQtc2l6ZToxM3B4O2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDt3aWR0aDoxMDAlfVxuLmRkc21vb3RobWVudSB1bHt6LWluZGV4OjEwMDttYXJnaW46MDtwYWRkaW5nOjA7bGlzdC1zdHlsZS10eXBlOm5vbmV9XG4uZGRzbW9vdGhtZW51IHVsIGxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lO2Zsb2F0OmxlZnQ7IG92ZXJmbG93OmhpZGRlbn1cbi5kZHNtb290aG1lbnUgdWwgbGkgYXtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNXB4O3BhZGRpbmc6LjllbTt0ZXh0LWRlY29yYXRpb246bm9uZX1cbi5kZHNtb290aG1lbnUgdWwgbGkgYS5zZWxlY3RlZCwuZGRzbW9vdGhtZW51IHVsIGxpIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojOGJjMzRhfSogaHRtbCBcbi5kZHNtb290aG1lbnUgdWwgbGkgYXtkaXNwbGF5OmlubGluZS1ibG9ja31cbi5kZHNtb290aG1lbnUgdWwgbGkgYTpsaW5rLC5kZHNtb290aG1lbnUgdWwgbGkgYTp2aXNpdGVke2NvbG9yOiNmZmZ9XG4uZGRzbW9vdGhtZW51IHVsIGxpIGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XG4uZGRzbW9vdGhtZW51IHVsIGxpIHVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW59XG4uZGRzbW9vdGhtZW51IHVsIGxpIHVsIGxpe2Rpc3BsYXk6bGlzdC1pdGVtO2Zsb2F0Om5vbmV9XG4uZGRzbW9vdGhtZW51IHVsIGxpIHVsIGxpIHVse3RvcDowfVxuLmRkc21vb3RobWVudSB1bCBsaSB1bCBsaSBhe2ZvbnQ6ODAwIDIxcHggdmVyZGFuYTt3aWR0aDozMDBweDttYXJnaW46MDtib3JkZXItdG9wLXdpZHRoOjA7cGFkZGluZzozcHg7dG9wOjB9KiBodG1sIFxuLmRkc21vb3RobWVudXtoZWlnaHQ6MH1cbmltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Books", function() { return Books; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/freeapi.service */ "./src/app/services/freeapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(_freeApiService, route) {
        this._freeApiService = _freeApiService;
        this.route = route;
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
    }
    ngOnInit() {
        this.reset();
        this._freeApiService.getBook()
            .subscribe(data => {
            console.log("Received : ", data.result.BookRep);
            this.book = data.result.BookRep;
        });
    }
    reset() {
        this.arrived = false;
        this.greeting = new Promise((resolve, reject) => { this.resolve = resolve; });
    }
    clicked() {
        if (this.arrived) {
            this.reset();
        }
        else {
            this.resolve('hi there!');
            this.arrived = true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

class Books {
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/freeapi.service */ "./src/app/services/freeapi.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _get_id_get_id_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-id/get-id.component */ "./src/app/get-id/get-id.component.ts");
/* harmony import */ var _update_id_update_id_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-id/update-id.component */ "./src/app/update-id/update-id.component.ts");
/* harmony import */ var _insert_insert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./insert/insert.component */ "./src/app/insert/insert.component.ts");
/* harmony import */ var _delete_id_delete_id_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delete-id/delete-id.component */ "./src/app/delete-id/delete-id.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _notes_notes_component__WEBPACK_IMPORTED_MODULE_16__["NotesComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
            _get_id_get_id_component__WEBPACK_IMPORTED_MODULE_8__["GetIDComponent"],
            _update_id_update_id_component__WEBPACK_IMPORTED_MODULE_9__["UpdateIDComponent"],
            _insert_insert_component__WEBPACK_IMPORTED_MODULE_10__["InsertComponent"],
            _delete_id_delete_id_component__WEBPACK_IMPORTED_MODULE_11__["DeleteIDComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]
        ],
        providers: [_services_freeapi_service__WEBPACK_IMPORTED_MODULE_6__["freeApiService"], _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService, PageDup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDup", function() { return PageDup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    setPage(page) {
        this.page = page;
    }
    getPage() {
        return this.page;
    }
    getReportList(obj) {
        console.log("service", obj);
        return this.http.post(`rpc`, obj, httpOptions);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);

class PageDup {
    constructor() {
        this.pageIndex = 0;
        this.pageSize = 25;
    }
}


/***/ }),

/***/ "./src/app/delete-id/delete-id.component.css":
/*!***************************************************!*\
  !*** ./src/app/delete-id/delete-id.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 10%;\n  }\n  button:hover {\n    opacity: 0.8;\n  }\n  input {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLWlkL2RlbGV0ZS1pZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZGVsZXRlLWlkL2RlbGV0ZS1pZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/delete-id/delete-id.component.ts":
/*!**************************************************!*\
  !*** ./src/app/delete-id/delete-id.component.ts ***!
  \**************************************************/
/*! exports provided: DeleteIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIDComponent", function() { return DeleteIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapi.service */ "./src/app/services/freeapi.service.ts");



let DeleteIDComponent = class DeleteIDComponent {
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.values = '';
    }
    ngOnInit() {
    }
    onEnter(value) {
        this.values = value;
        this._freeApiService.deleteBookByID(this.values)
            .subscribe(data => {
            console.log("Received :", data.result.BookRep);
            this.book = data.result.BookRep;
            if (this.book.some) {
                alert("Deleted");
            }
            else {
                alert("Entered Id is not available");
            }
        });
    }
};
DeleteIDComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }
];
DeleteIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-id/delete-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-id.component.css */ "./src/app/delete-id/delete-id.component.css")).default]
    })
], DeleteIDComponent);



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(book, searchText) {
        if (!book)
            return [];
        if (!searchText)
            return [];
        return book.filter(it => {
            return it.BookName.includes(searchText);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/get-id/get-id.component.css":
/*!*********************************************!*\
  !*** ./src/app/get-id/get-id.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 10%;\n  }\n  button:hover {\n    opacity: 0.8;\n  }\n  input {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWlkL2dldC1pZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2V0LWlkL2dldC1pZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/get-id/get-id.component.ts":
/*!********************************************!*\
  !*** ./src/app/get-id/get-id.component.ts ***!
  \********************************************/
/*! exports provided: GetIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIDComponent", function() { return GetIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapi.service */ "./src/app/services/freeapi.service.ts");



let GetIDComponent = class GetIDComponent {
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.values = '';
    }
    onEnter(value) {
        this.values = value;
        this._freeApiService.getBookByID(this.values)
            .subscribe(data => {
            console.log("Received :", data.result.BookRep);
            this.getbookbyid = data.result.BookRep;
        });
    }
    ngOnInit() {
    }
};
GetIDComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }
];
GetIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-id/get-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-id.component.css */ "./src/app/get-id/get-id.component.css")).default]
    })
], GetIDComponent);



/***/ }),

/***/ "./src/app/insert/insert.component.css":
/*!*********************************************!*\
  !*** ./src/app/insert/insert.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 10%;\n  }\n  button:hover {\n    opacity: 0.8;\n  }\n  input {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJ0L2luc2VydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaW5zZXJ0L2luc2VydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/insert/insert.component.ts":
/*!********************************************!*\
  !*** ./src/app/insert/insert.component.ts ***!
  \********************************************/
/*! exports provided: InsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponent", function() { return InsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapi.service */ "./src/app/services/freeapi.service.ts");



let InsertComponent = class InsertComponent {
    // constructor(private _freeApiService:freeApiService,private formbuilder:FormBuilder) { 
    //   this.bookdetails=formbuilder.group(
    //     {
    //       id:['',Validators.required],
    //       bname:['',Validators.required],
    //       aname:['',Validators.required],
    //       price:['',Validators.required]
    //     }
    //   )
    // }
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.submitted = false;
        this.success = false;
    }
    ngOnInit() {
    }
    // onSubmit(){
    //   this.submitted=true
    //   if(this.bookdetails.invalid){
    //     return
    //   }else{
    //     this._freeApiService.insertBook(this.bookdetails).subscribe
    //     (
    //       data =>{
    //         console.log("Received:",data.result.BookRep)
    //         this.book=data.result.BookRep;
    //       }
    //     )
    //   }
    //   this.success=true
    // }
    onSubmit(bookForm) {
        this.ID = bookForm.value.ID;
        this.BookName = bookForm.value.BookName;
        this.AuthorName = bookForm.value.AuthorName;
        this.Price = bookForm.value.Price;
        this._freeApiService.insertBook(this.ID, this.BookName, this.AuthorName, this.Price).subscribe(data => {
            console.log("Received :", data.result.BookRep);
            this.book = data.result.BookRep;
            if (this.book.some) {
                this.message = new alert("Inserted");
            }
        });
    }
};
InsertComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }
];
InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/insert/insert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insert.component.css */ "./src/app/insert/insert.component.css")).default]
    })
], InsertComponent);



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input{\n    box-sizing: border-box;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    color: #fff;\n    background-color: #673ab7;\n    display: inline-block;\n    white-space:nowrap;\n    text-decoration:none;\n    vertical-align:baseline;\n    text-align: center;\n    margin: 0;\n    min-width: 64px;\n    line-height: 36px;\n    padding: 0 16px;\n    border-radius:4px;\n    font-family: Roboto;\n    font-size:14px;\n    font-weight:500;\n}\n.text{\n    resize: none;\n    border-style: inset;\n     border:solid 1px blueviolet ; \n     border-color: blueviolet; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7S0FDbEIsNEJBQTRCO0tBQzVCLHdCQUF3QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi13aWR0aDogNjRweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBmb250LXdlaWdodDo1MDA7XG59XG4udGV4dHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICAgYm9yZGVyOnNvbGlkIDFweCBibHVldmlvbGV0IDsgXG4gICAgIGJvcmRlci1jb2xvcjogYmx1ZXZpb2xldDsgXG59Il19 */");

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



let NotesComponent = class NotesComponent {
    constructor(appService) {
        this.appService = appService;
        this.EditAvailable = false;
    }
    ngOnInit() {
        this.fetch();
    }
    fetch() {
        let Obj = { "id": 1, "method": "RPCService.GetNotes", "params": [{}] };
        this.appService.getReportList(Obj).toPromise().then(result => {
            console.log('get', result);
            this.Display = result['result']['Notes'].Notes;
            this.Notes = this.Display;
            this.Date = result['result']['Notes'].Date;
        });
    }
    onSubmit(data) {
        console.log("Your Notes :", data.value.Notes);
        let Obj = { "id": 1, "method": "RPCService.UpdateNotes", "params": [{ "Notes": this.Notes }] };
        this.appService.getReportList(Obj).toPromise().then(result => {
            console.log('submit', result);
            this.Display = result['result']['Notes'].Notes;
            this.Date = result['result']['Notes'].Date;
        });
        this.EditAvailable = false;
    }
    Edit() {
        this.EditAvailable = true;
    }
};
NotesComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")).default]
    })
], NotesComponent);



/***/ }),

/***/ "./src/app/services/freeapi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/freeapi.service.ts ***!
  \*********************************************/
/*! exports provided: freeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeApiService", function() { return freeApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let freeApiService = class freeApiService {
    constructor(http) {
        this.http = http;
    }
    getBook() {
        var a = {
            "id": "1",
            "method": "RPCService.GetBook",
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", a);
    }
    sortByID(sort) {
        var a = {
            "id": "1",
            "method": "RPCService." + sort,
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", a);
    }
    sortByPrice(sort) {
        console.log("SortByPrice");
        var x = {
            "id": "1",
            "method": "RPCService." + sort,
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", x);
    }
    getBookByID(input) {
        console.log(input);
        var b = {
            "id": "1",
            "method": "RPCService.GetBookByID",
            "params": [
                {
                    "book": {
                        "ID": input,
                        "BookName": "php",
                        "AuthorName": "authphp",
                        "Price": "950"
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", b);
    }
    updateBookByID(id, bn, an, p) {
        var c = {
            "id": "1",
            "method": "RPCService.UpdateBookByID",
            "params": [
                {
                    "book": {
                        "ID": id,
                        "BookName": bn,
                        "AuthorName": an,
                        "Price": p
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", c);
    }
    deleteBookByID(input) {
        var d = {
            "id": "1",
            "method": "RPCService.DeleteBookByID",
            "params": [
                {
                    "book": {
                        "ID": input,
                        "BookName": "PHP",
                        "AuthorName": "Rasmus Lerdorf",
                        "Price": "950"
                    }
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", d);
    }
    insertBook(ID, BookName, AuthorName, Price) {
        var e = {
            "id": "1",
            "method": "RPCService.InsertBook",
            "params": [
                {
                    "books": [
                        {
                            "ID": ID,
                            "BookName": BookName,
                            "AuthorName": AuthorName,
                            "Price": Price
                        }
                    ]
                }
            ]
        };
        return this.http.post("http://localhost:8080/rpc", e);
    }
};
freeApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
freeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], freeApiService);



/***/ }),

/***/ "./src/app/update-id/update-id.component.css":
/*!***************************************************!*\
  !*** ./src/app/update-id/update-id.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 10%;\n  }\n  button:hover {\n    opacity: 0.8;\n  }\n  input {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWlkL3VwZGF0ZS1pZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLWlkL3VwZGF0ZS1pZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/update-id/update-id.component.ts":
/*!**************************************************!*\
  !*** ./src/app/update-id/update-id.component.ts ***!
  \**************************************************/
/*! exports provided: UpdateIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIDComponent", function() { return UpdateIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapi.service */ "./src/app/services/freeapi.service.ts");



let UpdateIDComponent = class UpdateIDComponent {
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.values = '';
    }
    ngOnInit() { }
    onEnter(value) {
        this.values = value;
        this._freeApiService.getBookByID(this.values)
            .subscribe(data => {
            console.log("Received :", data.result.BookRep);
            this.getbookbyid = data.result.BookRep;
            this.ID = this.getbookbyid[0].ID;
            this.BookName = this.getbookbyid[0].BookName;
            this.AuthorName = this.getbookbyid[0].AuthorName;
            this.Price = this.getbookbyid[0].Price;
        });
    }
    onSubmit(updateID) {
        this.ID = updateID.value.ID;
        this.BookName = updateID.value.BookName;
        this.AuthorName = updateID.value.AuthorName;
        this.Price = updateID.value.Price;
        this._freeApiService.updateBookByID(this.ID, this.BookName, this.AuthorName, this.Price)
            .subscribe(data => {
            console.log("Received :", data.result.BookRep);
            this.book = data.result.BookRep;
            console.log(this.book);
            if (this.book) {
                this.message = new alert("Updated");
            }
        });
    }
};
UpdateIDComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }
];
UpdateIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-id/update-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-id.component.css */ "./src/app/update-id/update-id.component.css")).default]
    })
], UpdateIDComponent);



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapi.service */ "./src/app/services/freeapi.service.ts");



let ViewComponent = class ViewComponent {
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.itemsPerPage = 5;
    }
    ngOnInit() {
        this._freeApiService.getBook()
            .subscribe(data => {
            console.log("Received : ", data.result.BookRep);
            this.book = data.result.BookRep;
            this.book.sort(function (a, b) {
                var idA = a.ID, idB = b.ID;
                if (idA > idB)
                    return -1;
                if (idA < idB)
                    return 1;
                return 0;
            });
        });
    }
    ChangingValue(event) {
        if (event.target.value == "SortByID") {
            this._freeApiService.sortByID(event.target.value)
                .subscribe(data => {
                console.log("Received : ", data.result.BookRep);
                this.book = data.result.BookRep;
            });
        }
        else if (event.target.value == "SortByPrice") {
            this._freeApiService.sortByPrice(event.target.value)
                .subscribe(data => {
                console.log("Received : ", data.result.BookRep);
                this.book = data.result.BookRep;
            });
        }
    }
};
ViewComponent.ctorParameters = () => [
    { type: _services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")).default]
    })
], ViewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/finatel/Documents/Book/firstapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map