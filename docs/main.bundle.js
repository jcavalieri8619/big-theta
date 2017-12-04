webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<app-home></app-home>\n<div class=\"content-container container-fluid\">\n    <div style=\"margin-top: 20px;\">\n      <h2>Big Theta API</h2>\n      <p>The Big Theta API is hosted on AWS. The base url is\n        <a href=\"https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/\">https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/</a>. All endpoints are relative to this path</p>\n      \n      <div class=\"card bg-light mb-3 api-endpoint-card\" *ngFor=\"let endpoint of endpoints\">\n          <h4 class=\"card-header\">{{endpoint.name}}</h4>\n          <div class=\"card-body\" *ngFor=\"let method of endpoint.methods\">\n            <h5 class=\"card-title\">{{method.type}}</h5>\n            <h6 class=\"card-subtitle mb-2\">{{method.description}}</h6>\n            <div class=\"card-text\" *ngIf=\"method.pathParameters.length > 0\">\n              <div>Path Parameters:</div>\n              <ul>\n                <li *ngFor=\"let param of method.pathParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\n              </ul>\n            </div>\n            <div class=\"card-text\" *ngIf=\"method.urlParameters.length > 0\">\n              <div>URL Parameters:</div>\n              <ul>\n                <li *ngFor=\"let param of method.urlParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\n              </ul>\n            </div>\n            <div class=\"card-text\" *ngIf=\"method.bodyParameters.length > 0\">\n                <div>Body Parameters:</div>\n                <ul>\n                  <li *ngFor=\"let param of method.bodyParameters\">{{param.name}} {{param.required ? \"(required)\" : \"(optional)\"}}: {{param.description}}</li>\n                </ul>\n              </div>\n            <div class=\"card-text\">\n              <div>Example Request:</div>\n              <code>{{method.exampleRequest(endpoint.name)}}</code>\n            </div>\n            <div class=\"card-text\">\n              <div>Example Response:</div>\n              <pre><code>{{method.exampleResponse}}</code></pre>\n            </div>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_subject__ = __webpack_require__("../../../../../src/app/models/subject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_equation__ = __webpack_require__("../../../../../src/app/models/equation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_subject_tree__ = __webpack_require__("../../../../../src/app/models/subject-tree.ts");
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
var ApiEndpointMethod = (function () {
    function ApiEndpointMethod(type, description, exampleResponse, urlParameters, bodyParameters, pathParameters) {
        if (urlParameters === void 0) { urlParameters = []; }
        if (bodyParameters === void 0) { bodyParameters = []; }
        if (pathParameters === void 0) { pathParameters = []; }
        this.type = type;
        this.description = description;
        this.exampleResponse = exampleResponse;
        this.urlParameters = urlParameters;
        this.bodyParameters = bodyParameters;
        this.pathParameters = pathParameters;
    }
    ApiEndpointMethod.prototype.exampleRequest = function (endpoint) {
        this.pathParameters.forEach(function (param) {
            endpoint = endpoint.replace("{" + param.name + "}", param.example);
        });
        var request = this.type + " " + BASE_URL + endpoint;
        this.urlParameters.forEach(function (param, i) { return request += "" + (i === 0 ? "?" : "&") + param.name + "=" + param.example; });
        return request;
    };
    return ApiEndpointMethod;
}());
var ApiComponent = (function () {
    function ApiComponent() {
        this.endpoints = [
            {
                name: "/equations/top",
                methods: [
                    new ApiEndpointMethod("GET", "Get a list of equations from the highest ranking pages.", JSON.stringify([__WEBPACK_IMPORTED_MODULE_2__models_equation__["a" /* Equation */].sample()], null, 2))
                ]
            },
            {
                name: "/equations/subject/{subjectId}",
                methods: [
                    new ApiEndpointMethod("GET", "Get a list of equations present on the subject page requested", JSON.stringify([__WEBPACK_IMPORTED_MODULE_2__models_equation__["a" /* Equation */].sample()], null, 2), [], [], [
                        { name: "subjectId", description: "ID for subject page", required: true, example: "4" }
                    ])
                ]
            },
            {
                name: "/subject/search/{searchTerm}",
                methods: [
                    new ApiEndpointMethod("GET", "Get a list of subjects that match the search term", JSON.stringify([__WEBPACK_IMPORTED_MODULE_1__models_subject__["a" /* Subject */].sample()], null, 2), [], [], [
                        { name: "searchTerm", description: "Subject search query", required: true, example: "series" }
                    ])
                ]
            },
            {
                name: "/subject/tree/{subjectId}",
                methods: [
                    new ApiEndpointMethod("GET", "Get a tree of related subjects given a specific subject ID", JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__models_subject_tree__["a" /* SubjectTree */].sample(), null, 2), [], [], [
                        { name: "subjectId", description: "ID for subject page", required: true, example: "4" }
                    ])
                ]
            }
        ];
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    ApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-api',
            template: __webpack_require__("../../../../../src/app/api/api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/api/api.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        children: [
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
                path: 'api',
                component: __WEBPACK_IMPORTED_MODULE_6__api_api_component__["a" /* ApiComponent */]
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_google_login_google_login_component__ = __webpack_require__("../../../../../src/app/login/google-login/google-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_fb_login_fb_login_component__ = __webpack_require__("../../../../../src/app/login/fb-login/fb-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__math_element_math_element_component__ = __webpack_require__("../../../../../src/app/math-element/math-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__math_list_math_list_component__ = __webpack_require__("../../../../../src/app/math-list/math-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__equation_rank_equation_rank_component__ = __webpack_require__("../../../../../src/app/equation-rank/equation-rank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_math_database_math_database_service__ = __webpack_require__("../../../../../src/app/services/math-database/math-database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_graph_search_service__ = __webpack_require__("../../../../../src/app/services/graph-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__subject_equations_subject_equations_component__ = __webpack_require__("../../../../../src/app/subject-equations/subject-equations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__api_api_component__["a" /* ApiComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_google_login_google_login_component__["a" /* GoogleLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_fb_login_fb_login_component__["a" /* FbLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__math_element_math_element_component__["a" /* MathElementComponent */],
                __WEBPACK_IMPORTED_MODULE_14__math_list_math_list_component__["a" /* MathListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__equation_rank_equation_rank_component__["a" /* EquationRankComponent */],
                __WEBPACK_IMPORTED_MODULE_22__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_23__subject_equations_subject_equations_component__["a" /* SubjectEquationsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_progress_bar__["a" /* MatProgressBarModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_math_database_math_database_service__["a" /* MathDatabaseService */],
                __WEBPACK_IMPORTED_MODULE_18__services_window_ref_window_ref_service__["a" /* WindowRefService */],
                __WEBPACK_IMPORTED_MODULE_19__services_graph_search_service__["a" /* GraphSearchService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/equation-rank/equation-rank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.rank_list {\n  max-height: 80vh;\n  overflow-y: auto;\n\n}\n\n\n\n#scrollbar_style5::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n\n}\n\n#scrollbar_style5::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n\n#scrollbar_style5::-webkit-scrollbar-thumb {\n  background: #0ae -webkit-gradient(linear, 0 0, 0 100%,\n  color-stop(.5, rgba(255, 255, 255, .2)),\n  color-stop(.5, transparent), to(transparent));\n\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/equation-rank/equation-rank.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"equations\">\n\n  <div class='equationRank'>\n\n    <div id='scrollbar_style5' class=\"rank_list\">\n\n      <app-math-list [equationList]=\"equations\" [showTitle]=\"true\"\n                     (OnClick)=\"openEquationWikiPage($event)\">\n\n      </app-math-list>\n\n    </div>\n\n  </div>\n\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/equation-rank/equation-rank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquationRankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_math_database_math_database_service__ = __webpack_require__("../../../../../src/app/services/math-database/math-database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquationRankComponent = (function () {
    function EquationRankComponent(apiConnection, window_ref) {
        this.apiConnection = apiConnection;
        this.window_ref = window_ref;
        this.equations = [];
    }
    EquationRankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiConnection.fetchRankedEquations().subscribe(function (eqns) { return _this.equations = eqns; });
    };
    EquationRankComponent.prototype.openEquationWikiPage = function (event) {
        this.window_ref.nativeWindow.open(event.url);
    };
    EquationRankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-equation-rank',
            template: __webpack_require__("../../../../../src/app/equation-rank/equation-rank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/equation-rank/equation-rank.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_math_database_math_database_service__["a" /* MathDatabaseService */], __WEBPACK_IMPORTED_MODULE_2__services_window_ref_window_ref_service__["a" /* WindowRefService */]])
    ], EquationRankComponent);
    return EquationRankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height: 800px;\" class=\"equation-graph\" #graph></div>\n"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_graph_search_service__ = __webpack_require__("../../../../../src/app/services/graph-search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphComponent = (function () {
    function GraphComponent(http, graphSearchService) {
        var _this = this;
        this.http = http;
        this.graphSearchService = graphSearchService;
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        graphSearchService.graphSearch$.subscribe(function (searchId) {
            http.get("https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/subject/tree/" + searchId)
                .subscribe(function (data) {
                var graphData = _this.getGraphData(data);
                __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */]("svg").remove();
                _this.initGraph(graphData);
            });
        });
    }
    GraphComponent.prototype.initGraph = function (graphData) {
        var _this = this;
        var element = this.graphContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        var simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* forceSimulation */]()
            .force("link", __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* forceLink */]().id(function (d) { return d.id; }))
            .force("collide", __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* forceCollide */](function (d) { return 35; }).iterations(16))
            .force("charge", __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* forceManyBody */]())
            .force("center", __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* forceCenter */](this.width / 2, this.height / 2));
        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graphData.links)
            .enter()
            .append("line")
            .attr("stroke", "black");
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graphData.nodes)
            .enter().append("g");
        node.append("circle")
            .attr("stroke", "black")
            .attr("fill", function (d) { return d.isRoot ? "red" : "blue"; })
            .attr("r", function (d) { return 15; })
            .on("click", function (d) {
            if (__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].altKey) {
                _this.graphSearchService.newEquationSubject(d);
            }
        });
        node.call(__WEBPACK_IMPORTED_MODULE_2_d3__["a" /* drag */]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        node.append("title").text(function (d) { return d.title; });
        var ticked = function () {
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node.select("circle")
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; });
        };
        simulation.nodes(graphData.nodes).on("tick", ticked);
        simulation.force("link").links(graphData.links);
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    GraphComponent.prototype.getGraphData = function (treeData) {
        var nodes = [];
        var links = [];
        // assuming depth = 2 tree for now
        nodes.push({ id: treeData.id, title: treeData.title, isRoot: true });
        treeData.children.forEach(function (child) {
            nodes.push({ id: child.id, title: child.title });
            links.push({ source: treeData.id, target: child.id });
            child.children.forEach(function (grandChild) {
                if (grandChild.id !== treeData.id) {
                    nodes.push({ id: grandChild.id, title: grandChild.title });
                    links.push({ source: child.id, target: grandChild.id });
                }
            });
        });
        return { nodes: nodes, links: links };
    };
    GraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('graph'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GraphComponent.prototype, "graphContainer", void 0);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_app_services_graph_search_service__["a" /* GraphSearchService */]])
    ], GraphComponent);
    return GraphComponent;
}());



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

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">\n        <img src=\"assets/images/theta_logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Big Theta\n    </a>\n    <div class=\"navbar-nav\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"active\" class=\"nav-item nav-link\">Home</a>\n        <a [routerLink]=\"['/api']\" routerLinkActive=\"active\" class=\"nav-item nav-link\">API</a>\n    </div>\n    <div class=\"pull-right logout-div\">\n        <button class=\"btn btn-sm btn-danger pull-right\" (click)=\"logout()\">Logout</button>\n        <span class=\"pull-right user-name-div\">Welcome {{ appUser.name }}</span>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function HomeComponent(router, _userService, _authService, location) {
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
        this.location = location;
        this.appUser = this._userService.getUser();
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.logout = function () {
        this._authService.logout();
        window.location.href = this.location.prepareExternalUrl("/login");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/latex-equation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatexEquation; });
var LatexEquation = (function () {
    function LatexEquation() {
        this.equation = '';
        this.id = 0;
        this.name = '';
        this.url = '';
    }
    return LatexEquation;
}());



/***/ }),

/***/ "../../../../../src/app/login/fb-login/fb-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/fb-login/fb-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"continue_with\" data-show-faces=\"false\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>"

/***/ }),

/***/ "../../../../../src/app/login/fb-login/fb-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FbLoginComponent = (function () {
    function FbLoginComponent(_userService, router, http, location) {
        var _this = this;
        this._userService = _userService;
        this.router = router;
        this.http = http;
        this.location = location;
        // This function initializes the FB variable 
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1541509175932297',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            });
            FB.AppEvents.logPageView();
            FB.Event.subscribe('auth.statusChange', (function (response) {
                if (response.status === 'connected') {
                    var userCredentials_1 = { 'authResponse': '', 'userDetail': '', 'userType': 'facebook' };
                    userCredentials_1.authResponse = response.authResponse;
                    FB.api(response.authResponse.userID, { fields: 'name, gender, link' }, function (response) {
                        userCredentials_1.userDetail = response;
                    });
                    _this._userService.setUser(JSON.stringify(response));
                    window.location.href = _this.location.prepareExternalUrl("/home");
                }
            }));
        };
    }
    FbLoginComponent.prototype.ngOnInit = function () {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    };
    FbLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fb-login',
            template: __webpack_require__("../../../../../src/app/login/fb-login/fb-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/fb-login/fb-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], FbLoginComponent);
    return FbLoginComponent;
}());



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

module.exports = "<div class=\"g-signin2\" data-width=\"250\" data-height=\"40\" data-longtitle=\"true\" data-theme=\"dark\"></div> "

/***/ }),

/***/ "../../../../../src/app/login/google-login/google-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function GoogleLoginComponent(element, _userService, route, router, location) {
        this.element = element;
        this._userService = _userService;
        this.route = route;
        this.router = router;
        this.location = location;
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
            var userCredentials = { 'token': '', 'id': 0, 'name': '', 'image': '', 'email': '', 'userType': 'google' };
            userCredentials.token = googleUser.getAuthResponse().id_token;
            userCredentials.id = profile.getId();
            userCredentials.name = profile.getName();
            userCredentials.image = profile.getImageUrl();
            userCredentials.email = profile.getEmail();
            _this._userService.setUser(JSON.stringify(userCredentials));
            window.location.href = _this.location.prepareExternalUrl("/home");
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    GoogleLoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    GoogleLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-google-login',
            template: __webpack_require__("../../../../../src/app/login/google-login/google-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/google-login/google-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    padding-top: 5%;\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    background-image: url('http://www.mocaxintelligence.com/wp-content/uploads/2015/02/maths_468250833_20percent.jpg');\n    background-size: 100%;\n}\n\n.form-signin{\n  max-width: 500px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin-heading {\n    color: #fff;\n}\n\n.text-white {\n    color: #fff;\n}\n\n.login-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.login-input-pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n\n.signup-input {\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.signup-input-confirm {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.table {\n  border-radius: 5px;\n  width: 50%;\n  margin: 0px auto;\n  float: none;\n}\n\n.table .row {\n  margin-top:10px;  \n}\n\n.btn-center{\n  padding-left: 25%;\n  text-align: center;\n  margin: inherit;\n}\n\n.social-login-btn {\n  margin: 5px;\n  width: 100%;\n  font-size: 200%;\n  padding: 0;\n}\n\n.social-login-more {\n  width: 45%;\n}\n\n.social-google {\n  background-color: #da573b;\n  border-color: #be5238;\n}\n\n.social-google:hover{\n  background-color: #be5238;\n  border-color: #9b4631;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n    <div class=\"text-center col-lg-12\">\n        <form class=\"form-signin\">\n            <h1 class=\"form-signin-heading\">Welcome to Big Theta</h1>\n            <div>\n            <table class=\"table\">\n                <tr class=\"row\">\n                    <app-google-login></app-google-login>\n                </tr>\n                <tr class=\"row\">\n                    <app-fb-login></app-fb-login>\n                </tr>\n            </table>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/math-element/math-element.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n\n}\n\nspan:hover {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/math-element/math-element.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"latexEquation\">\n<span (click)=\"emitLatexEquation()\">\n  {{getDisplayStyleEquation()}}\n</span>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/math-element/math-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__latex_equation__ = __webpack_require__("../../../../../src/app/latex-equation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
///<reference path="../../../node_modules/@types/mathjax/index.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MathElementComponent = (function () {
    function MathElementComponent(elem, windowRef) {
        this.elem = elem;
        this.windowRef = windowRef;
        this.OnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.typesetFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MathElementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // noinspection TypeScriptUnresolvedVariable
        // MathJax is attached to global window object accesssed via WindowRef service
        this.windowRef.nativeWindow.MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.elem.nativeElement], function () { return _this.typesetFinished_callback(); });
    };
    MathElementComponent.prototype.typesetFinished_callback = function () {
        this.typesetFinished.emit(true);
    };
    MathElementComponent.prototype.emitLatexEquation = function () {
        this.OnClick.emit(this.latexEquation);
        console.log('MathElementComponent--emitLatexEquation: emitted click event');
    };
    MathElementComponent.prototype.getDisplayStyleEquation = function () {
        return '$$\\bf '.concat(this.latexEquation.equation).concat(' $$');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__latex_equation__["a" /* LatexEquation */])
    ], MathElementComponent.prototype, "latexEquation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MathElementComponent.prototype, "OnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MathElementComponent.prototype, "typesetFinished", void 0);
    MathElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-math-element',
            template: __webpack_require__("../../../../../src/app/math-element/math-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/math-element/math-element.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__services_window_ref_window_ref_service__["a" /* WindowRefService */]])
    ], MathElementComponent);
    return MathElementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/math-list/math-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.math-list {\n\n  padding-left: 0;\n  padding-right: 0;\n\n  min-height: 205px;\n\n}\n\n\n.spinner {\n  margin: 0 auto;\n}\n\n.equationTitle{\n  font-weight:bold;\n}\n\n\nli {\n\n  font-size: x-small;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n}\n\n\nli:hover {\n  font-size: small;\n  overflow-x: auto;\n}\n\n\n#style-3::-webkit-scrollbar-track\n{\n  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\n  background-color: #F5F5F5;\n}\n\n#style-3::-webkit-scrollbar\n{\n  width: 2px;\n  height: 4px;\n  background-color: #F5F5F5;\n}\n\n#style-3::-webkit-scrollbar-thumb\n{\n  background-color: #000000;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/math-list/math-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container math-list\">\n\n  <mat-spinner class=\"spinner\" [ngClass]=\"{'d-none': !isLoading}\" mode=\"indeterminate\"></mat-spinner>\n\n  <ul class=\"list-group\" [ngClass]=\"{'invisible': isLoading}\">\n\n    <li #listVar id=\"style-3\" *ngFor=\"let equation of equationList  let i=index\" class='list-group-item' (mouseenter)=\"setListElem_CSS(listVar,'active',true)\"\n        (mouseleave)=\"setListElem_CSS(listVar,'active',false)\"  >\n\n      <ng-container *ngIf=\"showTitle\">\n        <span class=\"equationTitle\">{{extractTitle(i)}}</span>\n      </ng-container>\n\n      <app-math-element [latexEquation]=\"equation\" (typesetFinished)=\"OnFinishTypesetting($event)\" (OnClick)=\"emitLatexEquation($event)\"></app-math-element>\n\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/math-list/math-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathListComponent = (function () {
    function MathListComponent(elem) {
        this.elem = elem;
        this.finished_count = 0;
        this.showTitle = false;
        this.OnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(MathListComponent.prototype, "equationList", {
        get: function () {
            return this._equationList;
        },
        set: function (value) {
            this._equationList = value;
            if (value.length > 0) {
                this.finished_count = 0;
                this.isLoading = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MathListComponent.prototype.ngOnInit = function () {
    };
    MathListComponent.prototype.scrollOnMouseWheel = function (elem) {
    };
    MathListComponent.prototype.OnFinishTypesetting = function (finished) {
        if (this.finished_count++ >= (this._equationList.length - 1)) {
            this.isLoading = false;
        }
    };
    MathListComponent.prototype.setListElem_CSS = function (elem, key, value) {
        if (value) {
            elem.classList.add(key);
        }
        else {
            elem.classList.remove(key);
        }
    };
    MathListComponent.prototype.extractTitle = function (index) {
        return this.equationList[index].name;
    };
    /**
     * bind to app-math-element OnClick event, If user clicks on equation then
     * trigger equation search
     * @param {LatexEquation} event
     */
    MathListComponent.prototype.emitLatexEquation = function (event) {
        this.OnClick.emit(event);
        console.log("MathListComponent--emitLatexEquation: id: " + event.id + ",  name: " + event.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MathListComponent.prototype, "equationList", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MathListComponent.prototype, "showTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MathListComponent.prototype, "OnClick", void 0);
    MathListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-math-list',
            template: __webpack_require__("../../../../../src/app/math-list/math-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/math-list/math-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MathListComponent);
    return MathListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/equation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Equation; });
var Equation = (function () {
    function Equation() {
    }
    Equation.sample = function () {
        return {
            id: "3048",
            name: "Mathematics",
            equation: "{ p\\Rightarrow q}",
            url: "https://en.wikipedia.org/wiki/Mathematics"
        };
    };
    return Equation;
}());



/***/ }),

/***/ "../../../../../src/app/models/subject-tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectTree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subject__ = __webpack_require__("../../../../../src/app/models/subject.ts");
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

var SubjectTree = (function (_super) {
    __extends(SubjectTree, _super);
    function SubjectTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubjectTree.sample = function () {
        return {
            id: "15787",
            title: "Fourier series",
            url: "https://en.wikipedia.org/wiki/Fourier_series",
            children: [
                {
                    id: "6878",
                    title: "Linear algebra",
                    url: "https://en.wikipedia.org/wiki/Linear_algebra",
                    children: []
                }
            ]
        };
    };
    return SubjectTree;
}(__WEBPACK_IMPORTED_MODULE_0__subject__["a" /* Subject */]));



/***/ }),

/***/ "../../../../../src/app/models/subject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
var Subject = (function () {
    function Subject() {
    }
    Subject.sample = function () {
        return {
            id: "15787",
            title: "Fourier series",
            url: "https://en.wikipedia.org/wiki/Fourier_series"
        };
    };
    return Subject;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding-top: 15px;\n}\n\n.graph_display{\n  float: right;\n}\n\n.form-group{\n  width: 50%;\n  margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3 d-none d-md-block\">\n        <h3>Top Equations</h3>\n        <app-equation-rank></app-equation-rank>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n      <p>\n          Welcome to Big Theta! This project allows you to enter a topic and find related topics and equations.\n          Topic and equation data are gathered from Wikipedia.\n          After searching for a topic, hover over a node in the graph to see the topic name. Click on any node while holding\n          alt key in order to search for equations regarding that topic.\n      </p>\n      <p>Enter a topic below to try it out!</p>\n      <ng2-completer [(ngModel)]=\"equationStr\" [datasource]=\"dataService\" [minSearchLength]=\"3\" [maxChars]=\"20\" [clearSelected]=\"false\" [placeholder]=\"searchQuote\" (selected)=\"equSelected($event)\"></ng2-completer>\n      <app-graph></app-graph>\n    </div>\n    <div class=\"col-md-3 d-none d-md-block\">\n      <app-subject-equations></app-subject-equations>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_graph_search_service__ = __webpack_require__("../../../../../src/app/services/graph-search.service.ts");
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
    function SearchComponent(completerService, _authService, _graphSearchService) {
        this.completerService = completerService;
        this._authService = _authService;
        this._graphSearchService = _graphSearchService;
        this.searchQuote = "Enter a topic";
        this.dataService = this.completerService.remote('https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta/subject/search/', this.equationStr, 'title').searchFields('title');
    }
    SearchComponent.prototype.equSelected = function (selected) {
        if (selected) {
            this._graphSearchService.newSearch(selected.originalObject.id);
            this._graphSearchService.newEquationSubject({ id: selected.originalObject.id, title: selected.originalObject.title });
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_app_services_graph_search_service__["a" /* GraphSearchService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/graph-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphSearchService = (function () {
    function GraphSearchService() {
        this.graphSearchSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.equationSubjectSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.graphSearch$ = this.graphSearchSource.asObservable();
        this.equationSubjectSource$ = this.equationSubjectSource.asObservable();
    }
    GraphSearchService.prototype.newSearch = function (subjectId) {
        this.graphSearchSource.next(subjectId);
    };
    GraphSearchService.prototype.newEquationSubject = function (subject) {
        this.equationSubjectSource.next(subject);
    };
    GraphSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GraphSearchService);
    return GraphSearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/math-database/math-database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathDatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatAll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var MathDatabaseService = (function () {
    function MathDatabaseService(http) {
        this.http = http;
        this.databaseURL = 'https://r3psss9s0a.execute-api.us-east-1.amazonaws.com/bigtheta';
    }
    MathDatabaseService.prototype.fetchRankedEquations = function () {
        var _this = this;
        this.log("fetching LatexEquation by rank");
        var url = this.databaseURL + "/equations/top";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (latexEquations) { return _this.log('fetched ranked equations:\n' + latexEquations); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('fetchRankedEquations', [])));
    };
    MathDatabaseService.prototype.fetchSubjectEquations = function (subject_id) {
        var _this = this;
        this.log('fetching LatexEquations by subjectID: ' + subject_id);
        var url = this.databaseURL + "/equations/subject/" + subject_id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (latexEquations) { return _this.log('fetched equations by subject:\n' + latexEquations); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('fetchSubjectEquations', [])));
    };
    /**
     * For future use--we've decided not to search by equations in current version
     * @param {string} term
     * @returns {Observable<LatexEquation[]>}
     */
    MathDatabaseService.prototype.searchLatexEquations = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty LatexEquation array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(this.databaseURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("found equations matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchLatexEquations', [])));
    };
    MathDatabaseService.prototype.log = function (message) {
        console.log('MathDatabaseService: ' + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MathDatabaseService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    MathDatabaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MathDatabaseService);
    return MathDatabaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/window-ref/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "../../../../../src/app/subject-equations/subject-equations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subject-equations/subject-equations.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"equations\">\n  <h3>{{chosenSubject}}</h3>\n\n  <div class='equationRank'>\n\n    <div id='scrollbar_style5' class=\"rank_list\">\n\n      <app-math-list [equationList]=\"equations\" [showTitle]=\"false\"></app-math-list>\n\n    </div>\n\n  </div>\n\n</ng-container>\n  "

/***/ }),

/***/ "../../../../../src/app/subject-equations/subject-equations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectEquationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_graph_search_service__ = __webpack_require__("../../../../../src/app/services/graph-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_math_database_math_database_service__ = __webpack_require__("../../../../../src/app/services/math-database/math-database.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectEquationsComponent = (function () {
    function SubjectEquationsComponent(graphSearchService, mathDatabaseService) {
        var _this = this;
        this.graphSearchService = graphSearchService;
        this.mathDatabaseService = mathDatabaseService;
        this.equations = [];
        this.chosenSubject = "";
        graphSearchService.equationSubjectSource$.subscribe(function (subject) {
            _this.chosenSubject = subject.title;
            mathDatabaseService.fetchSubjectEquations(subject.id).subscribe(function (equations) {
                _this.equations = equations;
            });
        });
    }
    SubjectEquationsComponent.prototype.ngOnInit = function () {
    };
    SubjectEquationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subject-equations',
            template: __webpack_require__("../../../../../src/app/subject-equations/subject-equations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subject-equations/subject-equations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_graph_search_service__["a" /* GraphSearchService */], __WEBPACK_IMPORTED_MODULE_2_app_services_math_database_math_database_service__["a" /* MathDatabaseService */]])
    ], SubjectEquationsComponent);
    return SubjectEquationsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map