webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<app-side-bar>\n\n\n</app-side-bar>\n\n<!-- <app-widget-bar></app-widget-bar> -->\n\n\n\n<div id=\"main-container\" *ngIf=\"router.url != '/'\">\n\n\n  <!-- <app-sales-dashboard></app-sales-dashboard> -->\n\n  <router-outlet></router-outlet>\n\n\n</div>\n\n<div *ngIf=\"router.url == '/'\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_highcharts__ = __webpack_require__("./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__side_bar_side_bar_component__ = __webpack_require__("./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sales_dashboard_sales_dashboard_component__ = __webpack_require__("./src/app/sales-dashboard/sales-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finance_dashboard_finance_dashboard_component__ = __webpack_require__("./src/app/finance-dashboard/finance-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__zepto_main_zepto_main_component__ = __webpack_require__("./src/app/zepto-main/zepto-main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sales_dashboard_sales_dashboard_component__["a" /* SalesDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__finance_dashboard_finance_dashboard_component__["a" /* FinanceDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__zepto_main_zepto_main_component__["a" /* ZeptoMainComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sales_dashboard_sales_dashboard_component__ = __webpack_require__("./src/app/sales-dashboard/sales-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance_dashboard_finance_dashboard_component__ = __webpack_require__("./src/app/finance-dashboard/finance-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zepto_main_zepto_main_component__ = __webpack_require__("./src/app/zepto-main/zepto-main.component.ts");




var appRoutes = [
    {
        path: 'sales-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__sales_dashboard_sales_dashboard_component__["a" /* SalesDashboardComponent */]
    },
    {
        path: 'finance-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__finance_dashboard_finance_dashboard_component__["a" /* FinanceDashboardComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__zepto_main_zepto_main_component__["a" /* ZeptoMainComponent */]
    },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/finance-dashboard/finance-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/finance-dashboard/finance-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>This is Finance Dashboard</h2>"

/***/ }),

/***/ "./src/app/finance-dashboard/finance-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinanceDashboardComponent = /** @class */ (function () {
    function FinanceDashboardComponent() {
    }
    FinanceDashboardComponent.prototype.ngOnInit = function () {
    };
    FinanceDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finance-dashboard',
            template: __webpack_require__("./src/app/finance-dashboard/finance-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/finance-dashboard/finance-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceDashboardComponent);
    return FinanceDashboardComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background-color: #296296;\r\n}\r\n\r\n.active{\r\n    background-color: #dfdfdf;\r\n}\r\n\r\n.nav-item{\r\n    padding: 0 20px;\r\n}\r\n\r\n.navbar-brand{\r\n    width: 165px;\r\n}\r\n\r\n.push-nav-right{\r\n    float: right;\r\n    color: #cecece;\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  fixed-top\">\n  <a class=\"navbar-brand\">\n    <img src=\"assets/images/logo.png\" height=\"40\">\n  </a>\n\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" *ngIf=\"router.url != '/'\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"openCloseSideNav()\">\n          <i class=\"fa fa-bars\"></i>\n        </a>\n      </li>\n\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Dashboard\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Play Area\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Widgets\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Templates\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Data Locker\n        </a>\n      </li>\n\n\n\n    </ul>\n    <ul class=\"navbar-nav push-nav-right\">\n\n      <li class=\"nav-item\">\n        <i class=\"fa fa-bell\"></i>\n      </li>\n\n      <li class=\"nav-item\">\n        <i class=\"fa fa-user-circle\"></i>\n      </li>\n\n      <li class=\"nav-item\">\n        <i class=\"fa fa-ellipsis-v\"></i>\n      </li>\n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.showHide = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.openCloseSideNav = function () {
        console.log("Hi");
        this.showHide = !this.showHide;
        if (this.showHide == false) {
            document.getElementById("nav-side-menu").style.left = "-200px";
        }
        else {
            document.getElementById("nav-side-menu").style.left = "0px";
        }
        console.log(this.showHide);
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/sales-dashboard/sales-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".title-header{\r\n    color: #767171;\r\n    margin: 30px 0 0 30px\r\n}\r\n\r\n.fa{\r\n    color: #a8a7a7;\r\n}\r\n\r\n.external-share-section{\r\n    margin-right: 50px;\r\n}\r\n\r\n/* widget settings */\r\n\r\n.widget-container {\r\n    height: 100%;\r\n    width: 45%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: -43%;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    -webkit-clip-path: polygon(32px 35%, 32px 0, 100% 0, 100% 100%, 32px 100%, 32px 65%, 0 60%, 0 40%);\r\n    clip-path: polygon(32px 35%, 32px 0, 100% 0, 100% 100%, 32px 100%, 32px 65%, 0 60%, 0 40%);\r\n\r\n}\r\n\r\n.widget-btn{\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    margin-left: -40px;\r\n    margin-top: 50%;\r\n}\r\n\r\n.widget-options{\r\n    margin-left: 50px;\r\n}\r\n\r\n.widget-open-close-btn{\r\n    margin-left: -23px;\r\n    position: fixed;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    top: 48%;\r\n    -webkit-transform: translateY(-48%);\r\n    transform: translateY(-48%);\r\n    width: 150px;\r\n}\r\n\r\n.widget-open-close-btn span{\r\n    -webkit-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n    color: #fff;\r\n    position: fixed;\r\n}\r\n\r\n.router-outlet-container{\r\n   margin: 0 50px;\r\n}\r\n\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: calc(100vh - 200px);\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n  }\r\n\r\n.flex-container .flex-tile-container {\r\n    color: white;\r\n    width:30%;\r\n    margin: 10px;\r\n  }\r\n\r\n.YTDSales{\r\n      max-height: 200px;\r\n      background-color: #fff;\r\n      padding: 20px;\r\n      color: #767171;\r\n  }\r\n\r\n.YTDSalesContainer{\r\n      top: 40%;\r\n      margin-top: 40px;\r\n  }\r\n\r\n.inc-or-decs{\r\n      color: #00b050;\r\n      font-size: 50px;\r\n  }\r\n\r\n.YTD-sales-amnt{\r\n    color: #767171; \r\n    font-size: 30px; \r\n    white-space: nowrap;\r\n    margin-top: 20px;\r\n  }\r\n\r\n.tile-container{\r\n      background: #fff;\r\n      color: #333;\r\n  }\r\n\r\n.tile-container{\r\n      padding: 20px;\r\n  }\r\n\r\n.tile-title{\r\n      color: #333;\r\n      margin-top: 100px;\r\n  }\r\n\r\n.left-options{\r\n      margin-left: 0;\r\n  }\r\n\r\n.tile-option-right{\r\n      float: right;\r\n      font-size: 25px;\r\n  }\r\n\r\n.tile-option-left{\r\n      float: left;\r\n  }\r\n\r\n.tile-option-box {\r\n      padding: 0 10px;\r\n  }\r\n\r\n.tile-not-found{\r\n     margin-top: 15%;\r\n    text-align: center;\r\n    width: 100%;\r\n    color: #909090;;\r\n  }"

/***/ }),

/***/ "./src/app/sales-dashboard/sales-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-header\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h3>\n        <i class=\"fa fa-repeat\"></i> Sales Dashboard\n      </h3>\n    </div>\n    <div class=\"col-sm-4 text-center\">\n      {{dayTime | date : \"EEE\"}}\n      <strong style=\"font-size: 25px\">{{dayTime | date : \"shortTime\"}}</strong> {{ dayTime | date : \"dd MMMM yyyy\" }}\n    </div>\n    <div class=\"col-sm-4\">\n      <h2 class=\"pull-right external-share-section\">\n        <i class=\"fa fa-external-link\"></i>\n        <i class=\"fa fa-share-alt\"></i>\n      </h2>\n    </div>\n\n  </div>\n</div>\n\n\n\n<div class=\"router-outlet-container\">\n  <div class='wrapper'>\n\n\n    <div class=\"tile-not-found\" *ngIf=\"dashTiles.length == 0\">\n      <h3>No tiles added. add tiles using widget bar</h3>\n    </div>\n\n    <div class=\"flex-container\" [dragula]='\"dragTile\"' [dragulaModel]='dashTiles' [dragulaOptions]=\"options\">\n\n\n      <div class=\"flex-tile-container\" style=\"flex-grow: 1\" *ngFor='let text of dashTiles' (click)=\"getTileData(text)\">\n\n\n        <div class=\"tile-container\" *ngIf=\"text == 'YTDSales'\">\n          <span class=\"tile-title\">\n            <span class=\"tile-option-left\">YTD Sales</span>\n            <span class=\"tile-option-right\">\n              <i class=\"fa fa-star tile-option-box\"></i>\n              <i class=\"fa fa-search-plus tile-option-box\"></i>\n              <i class=\"fa fa-ellipsis-v tile-option-box\" (click)=\"remmoveTile(text)\"></i>\n            </span>\n          </span>\n\n          <div class=\"YTDSales\">\n            <div class=\"YTDSalesContainer\">\n              <div class=\"row\">\n                <div class=\"col inc-or-decs\">▲</div>\n                <div class=\"col YTD-sales-amnt\">$ 128.7 Mn</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tile-container\" *ngIf=\"text == 'pieChart'\">\n          <span class=\"tile-title\">\n            <span class=\"tile-option-left\">Sales by location</span>\n            <span class=\"tile-option-right\">\n              <i class=\"fa fa-star tile-option-box\"></i>\n              <i class=\"fa fa-search-plus tile-option-box\" (click)=\"basicModal.show()\"></i>\n              <i class=\"fa fa-ellipsis-v tile-option-box\" (click)=\"remmoveTile(text)\"></i>\n            </span>\n          </span>\n          <div [chart]=\"pieChart\"></div>\n        </div>\n\n\n        <div class=\"tile-container\" *ngIf=\"text == 'lineChart'\">\n          <span class=\"tile-title\">\n            <span class=\"tile-option-left\">Annual Sales by Gender</span>\n            <span class=\"tile-option-right\">\n              <i class=\"fa fa-star tile-option-box\"></i>\n              <i class=\"fa fa-search-plus tile-option-box\" (click)=\"basicModal.show()\"></i>\n              <i class=\"fa fa-ellipsis-v tile-option-box\" (click)=\"remmoveTile(text)\"></i>\n            </span>\n          </span>\n          <div [chart]=\"lineChart\"></div>\n        </div>\n\n\n\n        <div class=\"tile-container\" *ngIf=\"text == 'monthlySalesLineChart'\">\n          <span class=\"tile-title\">\n            <span class=\"tile-option-left\">Monthly Sales</span>\n            <span class=\"tile-option-right\">\n              <i class=\"fa fa-star tile-option-box\"></i>\n              <i class=\"fa fa-search-plus tile-option-box\" (click)=\"basicModal.show()\"></i>\n              <i class=\"fa fa-ellipsis-v tile-option-box\" (click)=\"remmoveTile(text)\"></i>\n            </span>\n          </span>\n          <div [chart]=\"monthlySalesLineChart\"></div>\n        </div>\n\n\n\n        <div class=\"tile-container\" *ngIf=\"text == 'salesGrowthLineChart'\">\n          <span class=\"tile-title\">\n            <span class=\"tile-option-left\">Monthly Sales Growth</span>\n            <span class=\"tile-option-right\">\n              <i class=\"fa fa-star tile-option-box\"></i>\n              <i class=\"fa fa-search-plus tile-option-box\" (click)=\"basicModal.show()\"></i>\n              <i class=\"fa fa-ellipsis-v tile-option-box\" (click)=\"remmoveTile(text)\"></i>\n            </span>\n          </span>\n          <div [chart]=\"salesGrowthLineChart\"></div>\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<div mdbModal #basicModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n  aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">\n          <br>\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n\n\n        <div *ngIf=\"setZoomChart == 'pieChart'\" [chart]=\"pieChart\"></div>\n        <div *ngIf=\"setZoomChart == 'lineChart'\" [chart]=\"lineChart\"></div>\n        <div *ngIf=\"setZoomChart == 'monthlySalesLineChart'\" [chart]=\"monthlySalesLineChart\"></div>\n        <div *ngIf=\"setZoomChart == 'salesGrowthLineChart'\" [chart]=\"salesGrowthLineChart\"></div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div id=\"widget-bar\" class=\"widget-container\">\n\n  <div class=\"widget-open-close-btn\" (click)=\"openCloseWidgetBar()\">\n    <span>\n      Widget Bar\n    </span>\n  </div>\n\n  <div class=\"widget-options\">\n\n    <div class=\"flex-container\" [dragula]='\"dragTile\"' [dragulaModel]='widgetTiles' [dragulaOptions]=\"options\">\n      <div class=\"flex-tile-container\" style=\"flex-grow: 1\" *ngFor='let text of widgetTiles'>\n\n\n        <div class=\"YTDSales\" *ngIf=\"text == 'YTDSales'\">\n          <div>\n            <span>YTD Sales</span>\n          </div>\n          <div class=\"YTDSalesContainer\">\n            <span class=\"inc-or-decs\">▲</span>\n            <span class=\"YTD-sales-amnt\">$ 128.7 Mn</span>\n          </div>\n        </div>\n\n        <div *ngIf=\"text == 'pieChart'\" [chart]=\"pieChart\"></div>\n        <div *ngIf=\"text == 'lineChart'\" [chart]=\"lineChart\"></div>\n        <div *ngIf=\"text == 'monthlySalesLineChart'\" [chart]=\"monthlySalesLineChart\"></div>\n        <div *ngIf=\"text == 'salesGrowthLineChart'\" [chart]=\"salesGrowthLineChart\"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sales-dashboard/sales-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__ = __webpack_require__("./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesDashboardComponent = /** @class */ (function () {
    function SalesDashboardComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.widgetTiles = ['YTDSales', 'pieChart', 'lineChart', 'monthlySalesLineChart', 'salesGrowthLineChart'];
        this.dashTiles = [];
        this.showHide = false;
        this.setZoomChart = null;
        this.options = {
            removeOnSpill: true
        };
        //  chart static data
        this.pieChart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie'
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Pie 1',
                    data: [
                        {
                            "name": "Sales 1",
                            "y": 62,
                            color: "#4472c4"
                        },
                        {
                            "name": "Sales 2",
                            "y": 25,
                            color: "#ed7d31"
                        },
                        {
                            "name": "Sales 3",
                            "y": 13,
                            color: "#a5a5a5"
                        }
                    ]
                }
            ],
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'column'
            },
            legend: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016'
                ],
                crosshair: true,
            },
            colors: ['#4472c4', '#ed7d31'],
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            series: [{
                    name: 'Male',
                    data: [130, 100, 150, 175, 200]
                }, {
                    name: 'Female',
                    data: [60, 25, 75, 125, 125]
                }],
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
        });
        this.monthlySalesLineChart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'column'
            },
            legend: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true,
            },
            colors: ['#4472c4'],
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
            },
            series: [{
                    name: '',
                    data: [0.1, 0.5, 0.8, 0.4, 1, 0.5, 0.8, 0.1, 0.7, 0.4, 0.8, 0.3, 0.12]
                }],
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
        });
        this.salesGrowthLineChart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
            legend: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                    data: [80, 85, 82, 90, 100, 98, 110, 105, 102, 112, 115, 125]
                }]
        });
        // call time
        this.setChangeTime();
        // set drag option 
        dragulaService.setOptions('dragTile', {
            removeOnSpill: false
        });
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value);
        });
    }
    SalesDashboardComponent.prototype.remmoveTile = function (data) {
        var search_term = data;
        for (var i = this.dashTiles.length - 1; i >= 0; i--) {
            if (this.dashTiles[i] === search_term) {
                this.dashTiles.splice(i, 1);
            }
        }
        var dashTileData = JSON.stringify(this.dashTiles);
        localStorage.setItem("dashTiles", dashTileData);
        this.removeDuplicates(this.widgetTiles, this.dashTiles);
    };
    // remove duplicates
    SalesDashboardComponent.prototype.removeDuplicates = function (first, second) {
        for (var i = 0; i < second.length; i++) {
            var index = undefined;
            while ((index = first.indexOf(second[i])) !== -1) {
                first.splice(index, 1);
            }
        }
    };
    // time change method
    SalesDashboardComponent.prototype.setChangeTime = function () {
        var _this = this;
        this.dayTime = new Date();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].interval(2000)
            .subscribe(function (response) {
            _this.dayTime = new Date();
        }, function (error) {
        });
    };
    SalesDashboardComponent.prototype.onDropModel = function (value) {
        // save tiles to local storage
        var dashTileData = JSON.stringify(this.dashTiles);
        localStorage.setItem("dashTiles", dashTileData);
    };
    SalesDashboardComponent.prototype.ngOnInit = function () {
        // get saved tiles from local storage
        this.dashTiles = JSON.parse(localStorage.getItem("dashTiles"));
        function removeDuplicates(first, second) {
            for (var i = 0; i < second.length; i++) {
                var index = undefined;
                while ((index = first.indexOf(second[i])) !== -1) {
                    first.splice(index, 1);
                }
            }
            return first;
        }
        // remofe if duplicates have
        this.widgetTiles = removeDuplicates(this.widgetTiles, this.dashTiles);
    };
    // distroy drag object when move to another route
    SalesDashboardComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('dragTile');
    };
    SalesDashboardComponent.prototype.openCloseWidgetBar = function () {
        this.showHide = !this.showHide;
        if (this.showHide == false) {
            document.getElementById("widget-bar").style.right = "-43%";
        }
        else {
            document.getElementById("widget-bar").style.right = "0";
        }
    };
    SalesDashboardComponent.prototype.getTileData = function (data) {
        this.setZoomChart = data;
    };
    SalesDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-dashboard',
            template: __webpack_require__("./src/app/sales-dashboard/sales-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/sales-dashboard/sales-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]])
    ], SalesDashboardComponent);
    return SalesDashboardComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-side-menu {\r\n    overflow: auto;\r\n    font-family: verdana;\r\n    font-size: 12px;\r\n    background-color: #296296;\r\n    position: fixed;\r\n    top: 66px;\r\n    left: 0px;\r\n    width: 220px;\r\n    height: 100%;\r\n    color: #e1ffff;\r\n  }\r\n\r\n\r\n\r\n  .nav-side-menu li {\r\n    list-style: none;\r\n  }\r\n\r\n\r\n\r\n  @media (max-width: 767px) {\r\n    .nav-side-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    \r\n    .brand {\r\n      text-align: left !important;\r\n      font-size: 22px;\r\n      padding-left: 20px;\r\n      line-height: 50px !important;\r\n    }\r\n\r\n  }\r\n\r\n\r\n\r\n  .side-padding{\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    margin-left: -40px;\r\n}\r\n\r\n\r\n\r\n  hr{\r\n    background-color: #FFF;\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n\r\n  .nav-side-menu ul li{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n\r\n  .f-icon-light{\r\n    color: #e8e8e8;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n  .f-icon-color{\r\n    color: #be5108;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\n  .side-nav-txt{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n  .push-left{\r\n    padding: 0 10px;\r\n}\r\n\r\n\r\n\r\n  .push-right{\r\n    float: right;\r\n    padding: 8px 10px 0 0;\r\n}\r\n\r\n\r\n\r\n  .sideNavLinks{\r\n    margin-left: -40px;\r\n    padding: 10px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n  .sideNavLinks:hover{\r\n    background-color: #0d3f6c;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n  .active{\r\n    background: #8598b1;\r\n    background:linear-gradient(10deg,#8598b1,#cad4e4);\r\n}\r\n\r\n\r\n\r\n  .side-nav-search{\r\nwidth: 90%;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n}\r\n\r\n\r\n\r\n  .fa-users{\r\n    padding-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\" id=\"nav-side-menu\" *ngIf=\"router.url != '/'\">\n\n  <div class=\"menu-list\">\n\n\n\n    <ul id=\"menu-content\" class=\"menu-content collapse out\">\n\n      <li class=\"side-padding\">\n        <input class=\"form-control side-nav-search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      </li>\n\n      <li>\n        <div class=\"side-padding\">\n          <h5>My Dashboard\n          </h5>\n          <hr>\n        </div>\n      </li>\n      <br>\n\n      <li routerLinkActive=\"active\" class=\"sideNavLinks\">\n\n        <span class=\"fa fa-bars push-left f-icon-light\"></span>\n\n        <span class=\"side-nav-txt\">Finance</span>\n        <span class=\"fa fa-times push-right f-icon-color\"></span>\n        <span class=\"fa fa-star push-right f-icon-light\"></span>\n\n      </li>\n\n      <li routerLinkActive=\"active\" class=\"sideNavLinks\" [routerLink]=\"['/sales-dashboard']\">\n\n        <span class=\"fa fa-bars push-left f-icon-light\"></span>\n\n        <span class=\"side-nav-txt\">Sales</span>\n        <span class=\"fa fa-times push-right f-icon-color\"></span>\n        <span class=\"fa fa-star push-right f-icon-light\"></span>\n\n      </li>\n\n\n\n\n      <li>\n        <div class=\"side-padding\">\n          <h5>Shared\n            <i class=\"fa fa-users fa-lg\"></i>\n          </h5>\n          <hr>\n        </div>\n      </li>\n\n      <li class=\"sideNavLinks\" *ngFor=\"let myDashShared of myDashShared\">\n\n        <span class=\"fa fa-bars push-left f-icon-light\"></span>\n\n        <span class=\"side-nav-txt\">{{myDashShared}}</span>\n        <span class=\"fa fa-times push-right f-icon-color\"></span>\n        <span class=\"fa fa-star push-right f-icon-light\"></span>\n\n      </li>\n\n\n\n    </ul>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router) {
        this.router = router;
        this.myDashSideNav = ['Finance', 'Sales'];
        this.myDashShared = ['Shared 01', 'Shared 02'];
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/zepto-main/zepto-main.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n    margin-top: 15%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.go-dash{\r\ntext-align: center;\r\nfont-size: 20px;\r\ncolor: #296296;\r\ncursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/zepto-main/zepto-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:20%;\">\n  <img src=\"assets/images/logo.png\" alt=\"Logo\">\n\n  <div class=\"go-dash\" [routerLink]=\"['/sales-dashboard']\">\n    Click here to goto sales dashboard\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/zepto-main/zepto-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeptoMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZeptoMainComponent = /** @class */ (function () {
    function ZeptoMainComponent() {
    }
    ZeptoMainComponent.prototype.ngOnInit = function () {
    };
    ZeptoMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zepto-main',
            template: __webpack_require__("./src/app/zepto-main/zepto-main.component.html"),
            styles: [__webpack_require__("./src/app/zepto-main/zepto-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZeptoMainComponent);
    return ZeptoMainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map