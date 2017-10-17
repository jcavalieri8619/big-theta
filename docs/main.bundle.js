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
exports.push([module.i, ".container-fluid {\n    padding-top: 10px;\n}\n\n.api-endpoint-card .card-body:not(:first-of-type) {\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.api-endpoint-card .card-text {\n    margin-bottom: 1em;\n}\n\n.api-endpoint-card .card-text pre {\n    margin-top: 5px;\n}\n\n.api-endpoint-card .card-text > code {\n    margin-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<div class=\"content-container container-fluid\">\n    <div style=\"margin-top: 20px;\">\n      <h2>Big Theta API</h2>\n      <p>The Big Theta API is hosted on AWS. The base url is\n        <a href=\"https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/\">https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/</a>. All endpoints are relative to this path</p>\n      \n      <div class=\"card bg-light mb-3 api-endpoint-card\" *ngFor=\"let endpoint of endpoints\">\n          <h4 class=\"card-header\">{{endpoint.name}}</h4>\n          <div class=\"card-body\" *ngFor=\"let method of endpoint.methods\">\n            <h5 class=\"card-title\">{{method.type}}</h5>\n            <h6 class=\"card-subtitle mb-2\">{{method.description}}</h6>\n            <div class=\"card-text\" *ngIf=\"method.urlParameters.length > 0\">\n              <div>URL Parameters:</div>\n              <ul>\n                <li *ngFor=\"let param of method.urlParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\n              </ul>\n            </div>\n            <div class=\"card-text\" *ngIf=\"method.bodyParameters.length > 0\">\n                <div>Body Parameters:</div>\n                <ul>\n                  <li *ngFor=\"let param of method.bodyParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\n                </ul>\n              </div>\n            <div class=\"card-text\">\n              <div>Example Request:</div>\n              <code>{{method.exampleRequest(endpoint.name)}}</code>\n            </div>\n            <div class=\"card-text\">\n              <div>Example Response:</div>\n              <pre><code>{{method.exampleResponse}}</code></pre>\n            </div>\n          </div>\n      </div>\n    </div>\n</div>\n"

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
exports.push([module.i, "#welcomeMessage {\n    margin: 1em;\n}\n\n.container-fluid {\n    padding-top: 10px;\n}\n\n.navbar-nav {\n    width: 100%;\n}\n\n.btn {\n    cursor: pointer;    \n}\n\n.user-name-div {\n    padding-top: 5px;\n    padding-right: 10px;\n    color: #ffffff;\n}\n\n.logout-div {\n    width: 65%;\n    margin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../assets/images/theta_logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Big Theta\n    </a>\n    <div class=\"navbar-nav\">\n        <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-item nav-link\">Home</a>\n        <a routerLink=\"/info\" routerLinkActive=\"active\" class=\"nav-item nav-link\">About</a>\n        <a routerLink=\"/api\" routerLinkActive=\"active\" class=\"nav-item nav-link\">API</a>\n    </div>\n    <div class=\"pull-right logout-div\">\n        <button class=\"btn btn-sm btn-danger pull-right\" (click)=\"logout()\">Logout</button>\n        <span class=\"pull-right user-name-div\">Welcome {{ appUser.name }}</span>\n    </div>\n</nav>"

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
exports.push([module.i, ".container-fluid {\n    padding-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<div class=\"content-container container-fluid\">\n    <div id=\"welcomeMessage\">\n        Welcome to Big Theta! This project allows you to enter an equation and find related equations. Equations are gathered from\n        Wikipedia. Enter an equation below to try it out!\n    </div>\n</div>"

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
exports.push([module.i, ".social-login-btn {\n    margin: 5px;\n    width: 100%;\n    font-size: 200%;\n    padding: 0;\n    cursor: pointer;\n}\n\n.social-google {\n    background-color: #da573b;\n    border-color: #be5238;\n}\n\n.social-google:hover{\n    background-color: #be5238;\n    border-color: #9b4631;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/google-login/google-login.component.html":
/***/ (function(module, exports) {

module.exports = "<span id=\"googleBtn\" class=\"btn btn-primary social-login-btn social-google\">\n  <i class=\"fa fa-google-plus\"></i> Sign in with Google\n</span>"

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
exports.push([module.i, ".container {\n    padding-top: 5%;\n    width: 100%;\n    height: 760px;\n    overflow-y: scroll;\n    background-image: url('http://www.mocaxintelligence.com/wp-content/uploads/2015/02/maths_468250833_20percent.jpg');\n    background-size: 100%;\n}\n\n.form-signin{\n  max-width: 500px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin-heading {\n    color: #fff;\n}\n\n.text-white {\n    color: #fff;\n}\n\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.btn-center{\n  padding-left: 25%;\n  text-align: center;\n  margin: inherit;\n}\n\n.social-login-btn {\n  margin: 5px;\n  width: 100%;\n  font-size: 200%;\n  padding: 0;\n}\n\n.social-login-more {\n  width: 45%;\n}\n\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n    <div class=\"text-center col-lg-12\">\n        <form class=\"form-signin\">\n            <h1 class=\"form-signin-heading\">Welcome to BigTheta</h1>\n            <p>\n                <app-google-login></app-google-login>\n            </p>\n\n            <small class=\"text-white\">Or sign in with BigTheta service</small>\n            <br>\n            <br>\n\n            <input class=\"form-control login-input\" placeholder=\"Email Address\" type=\"text\">\n            <input class=\"form-control login-input-pass\" placeholder=\"Password\" type=\"password\">\n\n            <div class=\"form-inline btn-center\">\n                <button class=\"btn btn-lg btn-primary btn-block col-md-4\" type=\"submit\">Sign in</button>\n                <button class=\"btn btn-lg btn-info col-md-4\" style=\"margin-left:5px\" type=\"submit\">Sign Up</button>\n            </div>\n        </form>\n    </div>\n</div>"

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
exports.push([module.i, ".container-fluid {\n    padding-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<div class=\"content-container container-fluid\">\n  <div class=\"form-group\">\n    <input class=\"form-control\" [(ngModel)]=\"equationSearched\" type=\"text\" placeholder=\"Enter an equation\">\n  </div>\n  <div *ngIf=\"equationSearched\">\n    You entered {{equationSearched}}\n  </div>\n</div>"

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