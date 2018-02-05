webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cdtimer_cdtimer_component__ = __webpack_require__("../../../../../src/app/cdtimer/cdtimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticeboard_noticeboard_component__ = __webpack_require__("../../../../../src/app/noticeboard/noticeboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'timer', component: __WEBPACK_IMPORTED_MODULE_2__cdtimer_cdtimer_component__["a" /* CdtimerComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_3__people_people_component__["a" /* PeopleComponent */] },
    { path: 'noticeboard', component: __WEBPACK_IMPORTED_MODULE_4__noticeboard_noticeboard_component__["a" /* NoticeboardComponent */] },
    { path: '**', redirectTo: '/timer' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    /* This is equivalent of the 'body' selector of a page. */\n}\n\n.row{\n  margin:0px;\n  height:100%;\n  min-height:100%;\n}\n\n\n\nimg{\n  padding:30px;\n  cursor:pointer;\n}\n\n.tap-target{\n  background-image:url(" + escape(__webpack_require__("../../../../../src/app/dartbg.jpg")) + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<router-outlet></router-outlet>\n<!-- <app-people></app-people> -->\n<!-- <app-cdtimer></app-cdtimer> -->\n<!-- <app-noticeboard></app-noticeboard> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cdtimer_cdtimer_component__ = __webpack_require__("../../../../../src/app/cdtimer/cdtimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__noticeboard_noticeboard_component__ = __webpack_require__("../../../../../src/app/noticeboard/noticeboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal_shared_upload_service__ = __webpack_require__("../../../../../src/app/modal/shared/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AngularFireStorageModule } from 'firebase/storage';
// import { MaterialModule } from './material-module';






//Services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cdtimer_cdtimer_component__["a" /* CdtimerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__noticeboard_noticeboard_component__["a" /* NoticeboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__modal_modal_component__["a" /* ModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            // AngularFireStorageModule,
            // MaterialModule,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__modal_shared_upload_service__["a" /* UploadService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cdtimer/cdtimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cdtimer/cdtimer.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"/assets/cdtimer2_files/css(1)\" rel=\"stylesheet\" type=\"text/css\">\n<link href=\"/assets/cdtimer2_files/css(2)\" rel=\"stylesheet\" type=\"text/css\">\n<link href=\"/assets/cdtimer2_files/css(3)\" rel=\"stylesheet\" type=\"text/css\">\n\n<!-- CSS -->\n<!-- Animate css -->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/cdtimer2_files/animate.css\">\n<!-- Font Awesome CSS -->\n<link rel=\"stylesheet\" href=\"/assets/cdtimer2_files/font-awesome.min.css\">\n<!-- Custom styles CSS -->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/cdtimer2_files/style.css\">\n<!-- Bootstrap v3.3.1 -->\n<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"/assets/cdtimer2_files/bootstrap.min.css\"> -->\n<!-- Favicons -->\n<link rel=\"shortcut icon\" href=\"http://mountain.mountaintheme.com/low-poly/demo-2/images/favicon.ico\">\n<!-- Dancing Script -->\n<link href=\"https://fonts.googleapis.com/css?family=Cantarell|Dancing+Script:700|Homemade+Apple|Supermercado+One+Alegreya|Lobster|UnifrakturCook:700|Macondo|Indie+Flower|Josefin+Slab:300\" rel=\"stylesheet\">\n\n<script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/common.js.download\"></script>\n<script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/map.js.download\"></script>\n<script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/util.js.download\"></script>\n<script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/marker.js.download\"></script>\n<style type=\"text/css\">.gm-style {\n    font: 400 11px Roboto, Arial, sans-serif;\n    text-decoration: none;\n  }\n  .gm-style img { max-width: none; }</style>\n  <script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/onion.js.download\"></script>\n  <script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/controls.js.download\"></script>\n  <script type=\"text/javascript\" charset=\"UTF-8\" src=\"/assets/cdtimer2_files/stats.js.download\"></script>\n\n<!--= LOADER TEMPLATE -->\n<div class=\"page-loader\" style=\"display: none;\">\n    <div class=\"loader-icon\" style=\"display: none;\"><img src=\"/assets/cdtimer2_files/spinner.gif\" alt=\"\"></div>\n</div>\n<!-- /LOADER TEMPLATE -->\n\n\n\n<!-- HEADER -->\n<header id=\"top\" style=\"height: 631px; position: relative; z-index: 0; background: none;\">\n\n<!-- if you want to youtube video, delete the comments -->\n<!-- YOUTUBE PLAYER -->\n<div id=\"video\" data-video=\"cphYpNus4oQ\" data-mute=\"true\"></div>\n<!-- /YOUTUBE PLAYER -->\n\n    <canvas id=\"low-poly\" width=\"1422\" height=\"631\"></canvas>\n    <div class=\"welcome\" style=\"font-family:Dancing Script;\">\n\n        <div class=\"logo\"><img src=\"/assets/cdtimer2_files/logo.png\" width=\"390\" height=\"190\" alt=\"\"> </div>\n\n        <h1 style=\"font-family:Dancing Script; font-size:60px;\">Days to Goa</h1>\n\n        <p></p>\n\n        <!-- COUNTDOWN -->\n        <div class=\"countdown\" style=\"font-family:Dancing Script;\">\n          <div>{{dayString}}\n            <span>days</span>\n          </div>\n          <div>{{hourString}}\n            <span>hours</span>\n          </div>\n          <div>{{minuteString}}\n            <span>minutes</span>\n          </div>\n          <div>{{secondString}}\n            <span>seconds</span>\n          </div>\n        </div>\n        <!-- /COUNTDOWN -->\n        <!-- MOUSE ICON -->\n        <!-- <div class=\"mouse\">\n            <a href=\"http://mountain.mountaintheme.com/low-poly/demo-2/demo.html#services\">\n                <i class=\"fa fa-chevron-down\"></i>\n            </a>\n        </div> -->\n        <!-- /MOUSE ICON -->\n    </div>\n<div class=\"backstretch\" style=\"left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 631px; width: 1422px; z-index: -999998; position: absolute;\"><img src=\"/assets/cdtimer2_files/background1.jpg\" style=\"position: absolute; margin: 0px; padding: 0px; border: none; width: 1422px; height: 949.185px; max-height: none; max-width: none; z-index: -999999; left: 0px; top: -159.092px;\"></div>\n</header>\n<!-- END HEADER -->\n\n<!-- Javascript files -->\n<!-- jQuery -->\n<script src=\"/assets/cdtimer2_files/jquery.js.download\"></script>\n<!-- Backstretch -->\n<script src=\"/assets/cdtimer2_files/jquery.backstretch.min.js.download\"></script>\n<!-- CountDown  -->\n<script src=\"/assets/cdtimer2_files/jquery.countdown.js.download\"></script>\n<!-- Validate form -->\n<script src=\"/assets/cdtimer2_files/jquery.validate.js.download\"></script>\n<!-- Youtube Player -->\n<script src=\"/assets/cdtimer2_files/jquery.youtubebackground.js.download\"></script>\n<!-- Ajax chimp -->\n<script src=\"/assets/cdtimer2_files/jquery.ajaxchimp.js.download\"></script>\n<!-- Google map -->\n<script src=\"/assets/cdtimer2_files/js\"></script>\n<!-- rAF -->\n<script src=\"/assets/cdtimer2_files/rAF.js.download\"></script>\n<!-- Low-poly -->\n<script src=\"/assets/cdtimer2_files/low-poly.js.download\"></script>\n<!-- Custom -->\n<script src=\"/assets/cdtimer2_files/main.js.download\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/cdtimer/cdtimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdtimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CdtimerComponent = (function () {
    function CdtimerComponent() {
        this.updateTimer();
    }
    CdtimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.updateTimer();
        }, 1000);
    };
    CdtimerComponent.prototype.updateTimer = function () {
        this.seconds = ((Date.parse('March 16, 2018 00:00:00') - Date.now()) / 1000);
        this.minutes = this.seconds / 60;
        this.hours = this.minutes / 60;
        this.days = this.hours / 24;
        this.hourString = (this.hours % 24).toString().split('.')[0];
        this.minuteString = (this.minutes % 60).toString().split('.')[0];
        this.secondString = (this.seconds % 60).toString().split('.')[0];
        this.dayString = (this.days).toString().split('.')[0];
    };
    return CdtimerComponent;
}());
CdtimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cdtimer',
        template: __webpack_require__("../../../../../src/app/cdtimer/cdtimer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cdtimer/cdtimer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CdtimerComponent);

//# sourceMappingURL=cdtimer.component.js.map

/***/ }),

/***/ "../../../../../src/app/dartbg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dartbg.ca9475f6cd2b7e7ca51b.jpg";

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css);", ""]);

// module
exports.push([module.i, ".radio-red[type=\"radio\"].filled-in:checked + label:after{\n    border: 2px solid #BD4E4E;\n    background-color: #BD4E4E;\n}\n.radio-green[type=\"radio\"].filled-in:checked + label:after{\n    border: 2px solid #467E41;\n    background-color: #467E41;\n}\n.radio-blue[type=\"radio\"].filled-in:checked + label:after{\n    border: 2px solid #2366E2;\n    background-color: #2366E2;\n}\n.radio-yellow[type=\"radio\"].filled-in:checked + label:after{\n    border: 2px solid #ce7a04;\n    background-color: #ce7a04;\n}\n.row{\n  margin:0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal Structure -->\n<div id=\"modal3\" class=\"modal bottom-sheet open\" style=\"z-index: 1007; opacity: 1; top:auto; max-height:0%; left:30%; width:40%; bottom: 0px;\">\n   <form #form=\"ngForm\" (ngSubmit)=\"formSubmit(form)\">\n        <div class=\"modal-content\">\n            <h4>Post a Notice</h4>\n\n            <div class=\"row\">\n                <div class=\"input-field col s6\">\n                    <input id=\"nbTitle\" name=\"title\" type=\"text\" class=\"validate\" [(ngModel)]= \"form.title\">\n                    <label for=\"nbTitle\">Enter Title here</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"select input-field col s12\">\n                    <select name=\"prof\" ngModel>\n                    <option value=\"Choose\" disabled selected>Choose </option>\n                    <option *ngFor=\"let create of creator\" [ngValue]=\"create.name\">{{create.name}}</option>\n                    </select>\n                    <label>Creator</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <textarea id=\"nbContent\" name=\"content\" class=\"materialize-textarea\" ngModel></textarea>\n                    <label for=\"nbContent\">Enter Content here</label>\n                </div>\n            </div>\n            <div class=\"row\" style=\"margin-bottom:20px;\">\n                <p>\n                    <input name=\"group1\" (click)=\"setNoticeColor($event)\" class=\"filled-in radio-red\" type=\"radio\" id=\"red\" value=\"tomatoBG\"\n                    />\n                    <label for=\"red\">Red</label>\n                    <input name=\"group1\" (click)=\"setNoticeColor($event)\" class=\"filled-in radio-green\" type=\"radio\" id=\"green\" value=\"greenBG\"\n                    />\n                    <label for=\"green\">Green</label>\n                    <input name=\"group1\" (click)=\"setNoticeColor($event)\" class=\"filled-in radio-blue\" type=\"radio\" id=\"blue\" value=\"card-primary\"\n                    />\n                    <label for=\"blue\">Blue</label>\n                    <input name=\"group1\" (click)=\"setNoticeColor($event)\" class=\"filled-in radio-yellow\" type=\"radio\" id=\"yellow\" value=\"yellowBG\"\n                    />\n                    <label for=\"yellow\">Yellow</label>\n                </p>\n            </div>\n            <div class=\"row\">\n                <label>\n                    <input type=\"file\" (change)=\"detectFiles($event)\">\n                 </label>\n                <a class=\"waves-effect waves-light btn\" (click)=\"uploadSingle()\">\n                   Upload an Image\n                </a>\n            </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"waves-effect waves-light btn\" type=\"submit\" style=\"margin-right:10px;\">Create</button>\n            <a class=\"waves-effect waves-light btn\" (click)=\"hideMeNow()\">Cancel</a>\n        </div>\n   </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__ = __webpack_require__("../../../../../src/app/modal/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_upload__ = __webpack_require__("../../../../../src/app/modal/shared/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_people__ = __webpack_require__("../../../../../src/data/people.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireStorage } from 'firebase/storage';



var ModalComponent = (function () {
    function ModalComponent(db, upSvc) {
        this.db = db;
        this.upSvc = upSvc;
        this.modalToggler = false;
        this.creator = [];
        this.itemsRef = db.list("/sticky");
        this.updates = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ;
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.modalToggler) {
            this.setData().then(function (data) {
                console.log(data);
                $("select").material_select();
            });
        }
    };
    ModalComponent.prototype.addElement = function () {
        this.itemsRef.push({
            color: this.noticeColor,
            content: this.noticeContent,
            image: this.noticeImage,
            name: this.noticeCreator,
            title: this.noticeTitle
        });
    };
    ModalComponent.prototype.removeElement = function (key) {
        console.log(key);
        this.itemsRef.remove(key);
    };
    ModalComponent.prototype.setData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = __WEBPACK_IMPORTED_MODULE_4__data_people__["a" /* people */].forEach(function (data) {
                _this.creator.push({ name: data.name });
            });
            console.log(_this.creator);
            return resolve("done");
        });
    };
    ModalComponent.prototype.hideMeNow = function () {
        //$(".modal").css("display", "none");
        $(".modal-overlay").css("display", "none");
        $('#modal3').animate({ 'max-height': '0%' }, 'slow');
    };
    ModalComponent.prototype.setNoticeColor = function (event) {
        this.noticeColor = event.target.value;
        console.log(this.noticeColor);
    };
    ModalComponent.prototype.formSubmit = function (submittedValues) {
        console.log(submittedValues);
        this.noticeCreator = $('.select-dropdown').val();
        console.log(this.noticeCreator);
        this.noticeTitle = submittedValues.value.title;
        this.noticeContent = submittedValues.value.content;
        this.addElement();
        submittedValues.reset();
        $('.select-dropdown').val = '';
        this.hideMeNow();
    };
    ModalComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    ModalComponent.prototype.uploadSingle = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__shared_upload__["a" /* Upload */](file);
        this.upSvc.pushUpload(this.currentUpload).then(function (data) {
            _this.noticeImage = data;
        });
    };
    ModalComponent.prototype.clickedOption = function (event) {
        this.selectedOption = event.target.value;
        console.log(this.selectedOption);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalToggler", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-modal",
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_upload_service__["a" /* UploadService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/shared/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(db) {
        this.db = db;
        this.basePath = '/noticeboard';
    }
    //uploads: FirebaseListObservable<Upload[]>;
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.file.name).put(upload.file);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                //upload.progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
            }, function (error) {
                // upload failed
                console.log(error);
                reject(error);
            }, function () {
                // upload success
                console.log("Done");
                upload.url = uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                console.log(upload);
                resolve(upload.url);
                //this.saveFileData(upload);
            });
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveFileData = function (upload) {
        console.log("Printing form the saveFileData function" + upload);
        this.db.list('/noticeboard').push(upload);
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/modal/shared/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../../../../src/app/noticeboard/noticeboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, ":host{\n    margin:200px;\n }\n\n .tomatoBG{\n     background-color:tomato;\n }\n\n .greenBG{\n    background-color:#467E41;\n}\n\n.yellowBG{\n    background-color:#ce7a04;\n}\n\n\n .blackTX{\n     color:black;\n }\n\nbutton{\n    right: 2px;\n    position: absolute;\n    top: 2px;\n}\n\n#nbModal{\n  position:fixed;\n  top:20px;\n  right:70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/noticeboard/noticeboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\"> -->\n<div class=\"container\" style=\"width:100%\">\n  <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 card-columns\" style=\"column-count:4;\">\n          <a id=\"nbModal\" class=\"btn-floating btn-large waves-light red pulse\" (click)=\"modalTrigger()\"><i class=\"material-icons\">add</i></a>\n          <div class=\"card card-inverse {{update.color}}\" id=\"GameOfCards\" *ngFor=\"let update of updates | async ;\">\n            <img class=\"card-img-top img-fluid\" src={{update.image}}>\n            <button type=\"button\" class=\"close\" id={{update.key}} (click)=\"removeElement(update.key)\"><i class=\"material-icons\">&#xE5CD;</i></button>\n            <div class=\"card-block\">\n              <h4 class=\"card-title text-left\">{{update.title}}</h4>\n              <p class=\"card-text text-left\">{{update.content}}</p>\n              <p class=\"card-text text-right\"><small style=\"color:white;\">- {{update.name}}</small></p>\n            </div>\n          </div>\n        </div>\n        <app-modal [modalToggler]=\"modalDisplay\"></app-modal>\n        <div class=\"modal-overlay\" (click)=\"hideMe()\" style=\"z-index: 1006; display: none; opacity: 0.5;\"></div>\n  </div>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/esm/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/noticeboard/noticeboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeboardComponent = (function () {
    function NoticeboardComponent(db) {
        this.modalDisplay = false;
        this.imageAvail = false;
        this.itemsRef = db.list('/sticky');
        this.updates = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) {
                return (__assign({ key: c.payload.key }, c.payload.val()));
            });
        });
    }
    NoticeboardComponent.prototype.modalTrigger = function () {
        $('.modal').css('display', 'block');
        $('.modal-overlay').css('display', 'block');
        $('#modal3').animate({ 'max-height': '90%' }, 'slow');
        this.modalDisplay = !this.modalDisplay;
    };
    NoticeboardComponent.prototype.removeElement = function (key) {
        console.log(key);
        this.itemsRef.remove(key);
    };
    NoticeboardComponent.prototype.hideMe = function () {
        //$('.modal').css('display','none');
        $('.modal-overlay').css('display', 'none');
        $('#modal3').animate({ 'max-height': '0%' }, 'slow');
    };
    NoticeboardComponent.prototype.ngOnInit = function () {
    };
    return NoticeboardComponent;
}());
NoticeboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-noticeboard',
        template: __webpack_require__("../../../../../src/app/noticeboard/noticeboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/noticeboard/noticeboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], NoticeboardComponent);

var _a;
//# sourceMappingURL=noticeboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, ":host{\n   margin:200px;\n}\n\n.carousel-item.sactive{\n  display:webkit-box;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\"> -->\n<div class=\"container\">\n  <div class=\"row\">\n<div class=\"col-md-8 offset-md-2 card-columns\">\n  <div class=\"card\" *ngFor=\"let ppl of peoples\">\n      <!-- <div class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\" style=\"display: -webkit-box;\"> -->\n              <img class=\"card-img-top img-fluid\" src=\"{{ppl.imageurl[0]}}\" alt=\"First slide\">\n            <!-- </div>\n          </div>\n        </div> -->\n    <!-- <img class=\"card-img-top img-fluid\" src={{ppl.imageurl}} alt=\"Card image cap\"> -->\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ppl.name}}</h4>\n      <p class=\"card-text\">{{ppl.context}}</p>\n      <p class=\"card-text\"><small class=\"text-muted align-right\">{{ppl.place}}</small></p>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/esm/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_people__ = __webpack_require__("../../../../../src/data/people.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent() {
        this.peoples = __WEBPACK_IMPORTED_MODULE_1__data_people__["a" /* people */];
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/people.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].Native
    }),
    __metadata("design:paramtypes", [])
], PeopleComponent);

//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css);", ""]);

// module
exports.push([module.i, "#menu{\n  position:fixed;\n  top:10px;\n  left:10px;\n}\n\n.tap-target{\n  height:70%;\n  width:70%;\n  background-color:#26a69a;\n}\n\n.wave-ripple{\n  top: 21px;\n  left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"menu\" class=\" waves-light btn btn-floating pulse\" (click)=\"toggleSideNav()\" ><i class=\"material-icons\">menu</i></a>\n\n  <!-- Tap Target Structure -->\n  <div class=\"tap-target\" data-activates=\"menu\">\n    <div class=\"tap-target-content\" style=\"padding:0px;\">\n      <ul style=\"float:right;\">\n        <li style=\"padding:15px;\">\n            <a class=\"waves-effect btn btn-floating white pulse tooltipped\" data-position=\"left\" data-delay=\"50\" data-tooltip=\"Countdown Timer\" routerLink=\"/timer\" routerLinkActive=\"active\"><i class=\"material-icons\" style=\"color:#26a69a;\">timelapse</i></a>\n        </li>\n        <li style=\"padding:15px; margin-left:-60px; margin-top:45px\">\n            <a class=\"waves-effect btn btn-floating white pulse tooltipped\" data-position=\"left\" data-delay=\"50\" data-tooltip=\"Croud\" routerLink=\"/people\" routerLinkActive=\"active\"><i class=\"material-icons\" style=\"color:#26a69a;\">people</i></a>\n        </li>\n        <li style=\"padding:15px; margin-left:-180px; margin-top:5px\">\n            <a class=\"waves-effect btn btn-floating white pulse tooltipped\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Noticeboard\" routerLink=\"/noticeboard\" routerLinkActive=\"active\"><i class=\"material-icons\" style=\"color:#26a69a;\">developer_board</i></a>\n        </li>\n      </ul>      \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () { };
    SidenavComponent.prototype.toggleSideNav = function () {
        $('.tap-target').tapTarget('open');
        $('.tap-target-content').css('padding', '0px');
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidenav/sidenav.component.css")]
    })
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/data/people.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return people; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var people = [
    { name: 'Rohit Bohra', imageurl: ['/assets/bohra.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Pune,India' },
    { name: 'Deven Bhavsar', imageurl: ['/assets/deven.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' },
    { name: 'Anni Bhaskar', imageurl: ['/assets/anni.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' },
    { name: 'Sunaina Rohilla', imageurl: ['/assets/sunaina.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' },
    { name: 'Jyoti Pimoli', imageurl: ['/assets/jyoti.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Pune,India' },
    { name: 'Shashank Kumar', imageurl: ['/assets/shashank.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' },
    { name: 'Prashant Mudgal', imageurl: ['/assets/mudgal.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' },
    { name: 'Sneha Verma', imageurl: ['/assets/sneha.jpg', '/assets/bohra1.jpg', '/assets/bohra2.jpg'], context: '', place: 'Noida,India' }
];
//# sourceMappingURL=people.js.map

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
    production: false,
    firebase: {
        apiKey: "AIzaSyCpmtKbWxk-B1LJFLyd_ef2v_pjhctA4q8",
        authDomain: "goatrip-6969bc.firebaseapp.com",
        databaseURL: "https://goatrip-6969bc.firebaseio.com",
        projectId: "goatrip-6969bc",
        storageBucket: "goatrip-6969bc.appspot.com",
        messagingSenderId: "1009868737831"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map