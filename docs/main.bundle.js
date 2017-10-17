webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api/api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    padding-top: 10px;\r\n}\r\n\r\n.api-endpoint-card .card-body:not(:first-of-type) {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.api-endpoint-card .card-text {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.api-endpoint-card .card-text pre {\r\n    margin-top: 5px;\r\n}\r\n\r\n.api-endpoint-card .card-text > code {\r\n    margin-left: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"content-container container-fluid\">\r\n    <div style=\"margin-top: 20px;\">\r\n      <h2>Big Theta API</h2>\r\n      <p>The Big Theta API is hosted on AWS. The base url is\r\n        <a href=\"https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/\">https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/</a>. All endpoints are relative to this path</p>\r\n      \r\n      <div class=\"card bg-light mb-3 api-endpoint-card\" *ngFor=\"let endpoint of endpoints\">\r\n          <h4 class=\"card-header\">{{endpoint.name}}</h4>\r\n          <div class=\"card-body\" *ngFor=\"let method of endpoint.methods\">\r\n            <h5 class=\"card-title\">{{method.type}}</h5>\r\n            <h6 class=\"card-subtitle mb-2\">{{method.description}}</h6>\r\n            <div class=\"card-text\" *ngIf=\"method.urlParameters.length > 0\">\r\n              <div>URL Parameters:</div>\r\n              <ul>\r\n                <li *ngFor=\"let param of method.urlParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"card-text\" *ngIf=\"method.bodyParameters.length > 0\">\r\n                <div>Body Parameters:</div>\r\n                <ul>\r\n                  <li *ngFor=\"let param of method.bodyParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\r\n                </ul>\r\n              </div>\r\n            <div class=\"card-text\">\r\n              <div>Example Request:</div>\r\n              <code>{{method.exampleRequest(endpoint.name)}}</code>\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <div>Example Response:</div>\r\n              <pre><code>{{method.exampleResponse}}</code></pre>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BASE_URL = "https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta";
var Equation = (function () {
    function Equation() {
    }
    Equation.sample = function () {
        return {
            equation: "x2",
            format: "ascii",
            topic: "Math"
        };
    };
    return Equation;
}());
var EquationTree = (function (_super) {
    __extends(EquationTree, _super);
    function EquationTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EquationTree.sample = function () {
        return {
            equation: "x2",
            format: "ascii",
            topic: "Math",
            children: [
                {
                    equation: "x+y=1",
                    format: "ascii",
                    topic: "Physics",
                    children: []
                }
            ]
        };
    };
    return EquationTree;
}(Equation));
var ApiEndpointMethod = (function () {
    function ApiEndpointMethod(type, description, exampleResponse, urlParameters, bodyParameters) {
        if (urlParameters === void 0) { urlParameters = []; }
        if (bodyParameters === void 0) { bodyParameters = []; }
        this.type = type;
        this.description = description;
        this.exampleResponse = exampleResponse;
        this.urlParameters = urlParameters;
        this.bodyParameters = bodyParameters;
    }
    ApiEndpointMethod.prototype.exampleRequest = function (endpoint) {
        var request = this.type + " " + BASE_URL + endpoint;
        this.urlParameters.forEach(function (param, i) { return request += "" + (i === 0 ? "?" : "&") + param.name + "=" + param.example; });
        return request;
    };
    return ApiEndpointMethod;
}());
var ApiComponent = (function () {
    function ApiComponent() {
        this.endpoints = [{
                name: "/equationtree",
                methods: [
                    new ApiEndpointMethod("GET", "Get an equation tree of related equations given an equation.", JSON.stringify(EquationTree.sample(), null, 2), [
                        { name: "equation", description: "Root equation to search for", required: true, example: "x2" },
                        { name: "format", description: "Format of equation, either ascii or latex", required: true, example: "ascii" }
                    ])
                ]
            }, {
                name: "/equations",
                methods: [
                    new ApiEndpointMethod("GET", "Get a list of all equations in the tree optionally filtered by topic", JSON.stringify(Equation.sample(), null, 2), [
                        { name: "topic", description: "Topic of the equations to filter by", required: false, example: "Math" }
                    ]),
                    new ApiEndpointMethod("POST", "Add an equation to the tree", JSON.stringify(Equation.sample(), null, 2), [], [
                        { name: "equation", description: "Equation to add", required: true, example: "x2" },
                        { name: "topic", description: "Topic of the equation", required: true, example: "Math" },
                        { name: "format", description: "Format of the equation, either ascii or latex", required: true, example: "ascii" }
                    ])
                ]
            }];
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    return ApiComponent;
}());
ApiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-api',
        template: __webpack_require__("../../../../../src/app/api/api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/api/api.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApiComponent);

//# sourceMappingURL=api.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__info_info_component__ = __webpack_require__("../../../../../src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'info',
        component: __WEBPACK_IMPORTED_MODULE_6__info_info_component__["a" /* InfoComponent */]
    },
    {
        path: 'api',
        component: __WEBPACK_IMPORTED_MODULE_7__api_api_component__["a" /* ApiComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('bigThetaUser') == null) {
            this.router.navigateByUrl('login');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info_component__ = __webpack_require__("../../../../../src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_google_login_google_login_component__ = __webpack_require__("../../../../../src/app/login/google-login/google-login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__api_api_component__["a" /* ApiComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_google_login_google_login_component__["a" /* GoogleLoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcomeMessage {\r\n    margin: 1em;\r\n}\r\n\r\n.container-fluid {\r\n    padding-top: 10px;\r\n}\r\n\r\n.navbar-nav {\r\n    width: 100%;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;    \r\n}\r\n\r\n.user-name-div {\r\n    padding-top: 5px;\r\n    padding-right: 10px;\r\n    color: #ffffff;\r\n}\r\n\r\n.logout-div {\r\n    width: 65%;\r\n    margin-right: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/images/theta_logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Big Theta\r\n    </a>\r\n    <div class=\"navbar-nav\">\r\n        <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-item nav-link\">Home</a>\r\n        <a routerLink=\"/info\" routerLinkActive=\"active\" class=\"nav-item nav-link\">About</a>\r\n        <a routerLink=\"/api\" routerLinkActive=\"active\" class=\"nav-item nav-link\">API</a>\r\n    </div>\r\n    <div class=\"pull-right logout-div\">\r\n        <button class=\"btn btn-sm btn-danger pull-right\" (click)=\"logout()\">Logout</button>\r\n        <span class=\"pull-right user-name-div\">Welcome {{ appUser.name }}</span>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, _userService, _authService) {
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.appUser = this._userService.getUser();
    };
    HomeComponent.prototype.logout = function () {
        this._authService.logout();
        this.router.navigateByUrl('login');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"content-container container-fluid\">\r\n    <div id=\"welcomeMessage\">\r\n        Welcome to Big Theta! This project allows you to enter an equation and find related equations. Equations are gathered from\r\n        Wikipedia. Enter an equation below to try it out!\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoComponent);

//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/google-login/google-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".social-login-btn {\r\n    margin: 5px;\r\n    width: 100%;\r\n    font-size: 200%;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.social-google {\r\n    background-color: #da573b;\r\n    border-color: #be5238;\r\n}\r\n\r\n.social-google:hover{\r\n    background-color: #be5238;\r\n    border-color: #9b4631;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/google-login/google-login.component.html":
/***/ (function(module, exports) {

module.exports = "<span id=\"googleBtn\" class=\"btn btn-primary social-login-btn social-google\">\r\n  <i class=\"fa fa-google-plus\"></i> Sign in with Google\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/login/google-login/google-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleLoginComponent = (function () {
    function GoogleLoginComponent(element, _userService, route, router) {
        this.element = element;
        this._userService = _userService;
        this.route = route;
        this.router = router;
        this.clientId = '363247795181-teko9e6qg8sih971tkl1b68smonb1j79.apps.googleusercontent.com';
        this.scope = [
            'profile',
            'email'
        ].join(' ');
    }
    GoogleLoginComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: _this.clientId,
                cookiepolicy: 'single_host_origin',
                scope: _this.scope
            });
            _this.attachSignin(_this.element.nativeElement.firstChild);
        });
    };
    GoogleLoginComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            var userCredentials = { 'token': '', 'id': 0, 'name': '', 'image': '', 'email': '' };
            userCredentials.token = googleUser.getAuthResponse().id_token;
            userCredentials.id = profile.getId();
            userCredentials.name = profile.getName();
            userCredentials.image = profile.getImageUrl();
            userCredentials.email = profile.getEmail();
            _this._userService.setUser(JSON.stringify(userCredentials));
            _this.router.navigateByUrl('/home');
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    GoogleLoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    return GoogleLoginComponent;
}());
GoogleLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-google-login',
        template: __webpack_require__("../../../../../src/app/login/google-login/google-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/google-login/google-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], GoogleLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=google-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    padding-top: 5%;\r\n    width: 100%;\r\n    height: 760px;\r\n    overflow-y: scroll;\r\n    background-image: url('http://www.mocaxintelligence.com/wp-content/uploads/2015/02/maths_468250833_20percent.jpg');\r\n    background-size: 100%;\r\n}\r\n\r\n.form-signin{\r\n  max-width: 500px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin-heading {\r\n    color: #fff;\r\n}\r\n\r\n.text-white {\r\n    color: #fff;\r\n}\r\n\r\n.login-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.login-input-pass {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n\r\n.signup-input {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.signup-input-confirm {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.btn-center{\r\n  padding-left: 25%;\r\n  text-align: center;\r\n  margin: inherit;\r\n}\r\n\r\n.social-login-btn {\r\n  margin: 5px;\r\n  width: 100%;\r\n  font-size: 200%;\r\n  padding: 0;\r\n}\r\n\r\n.social-login-more {\r\n  width: 45%;\r\n}\r\n\r\n.social-google {\r\n  background-color: #da573b;\r\n  border-color: #be5238;\r\n}\r\n\r\n.social-google:hover{\r\n  background-color: #be5238;\r\n  border-color: #9b4631;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n    <div class=\"text-center col-lg-12\">\r\n        <form class=\"form-signin\">\r\n            <h1 class=\"form-signin-heading\">Welcome to BigTheta</h1>\r\n            <p>\r\n                <app-google-login></app-google-login>\r\n            </p>\r\n\r\n            <small class=\"text-white\">Or sign in with BigTheta service</small>\r\n            <br>\r\n            <br>\r\n\r\n            <input class=\"form-control login-input\" placeholder=\"Email Address\" type=\"text\">\r\n            <input class=\"form-control login-input-pass\" placeholder=\"Password\" type=\"password\">\r\n\r\n            <div class=\"form-inline btn-center\">\r\n                <button class=\"btn btn-lg btn-primary btn-block col-md-4\" type=\"submit\">Sign in</button>\r\n                <button class=\"btn btn-lg btn-info col-md-4\" style=\"margin-left:5px\" type=\"submit\">Sign Up</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"content-container container-fluid\">\r\n  <div class=\"form-group\">\r\n    <input class=\"form-control\" [(ngModel)]=\"equationSearched\" type=\"text\" placeholder=\"Enter an equation\">\r\n  </div>\r\n  <div *ngIf=\"equationSearched\">\r\n    You entered {{equationSearched}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () { };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function () { };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('bigThetaUser');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function () { };
    UserService.prototype.setUser = function (userData) {
        localStorage.setItem('bigThetaUser', userData);
    };
    UserService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('bigThetaUser'));
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map