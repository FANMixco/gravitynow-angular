function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(activeModal) {
        _classCallCheck(this, AboutComponent);

        this.activeModal = activeModal;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 25,
      vars: 0,
      consts: [[1, "modal-header"], ["id", "modal-primary-title", "translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "centered"], ["translate", ""], ["rel", "noreferrer", "href", "https://2014.spaceappschallenge.org/awards/#globalawards", "target", "_blank"], ["id", "spaceLogo", "src", "./assets/img/space_apps.png"], ["rel", "noreferrer", "href", "https://supernovaic.tk", "target", "_blank"], ["id", "supernovaLogo", "src", "./assets/img/supernova-logo.png"], [1, "row"], [1, "col"], ["rel", "noreferrer", "href", "https://play.google.com/store/apps/details?id=tk.supernova.gnow", "target", "_blank"], ["src", "./assets/img/android.png", 1, "logo"], ["rel", "noreferrer", "href", "https://www.microsoft.com/en-us/p/gravity-now/9nblgggzjlp5", "target", "_blank"], ["src", "./assets/img/windows.png", 1, "logoWindows"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AboutUs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gravity Now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"]],
      styles: [".centered[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#spaceLogo[_ngcontent-%COMP%] {\n    max-width: 128px;\n}\n\n#supernovaLogo[_ngcontent-%COMP%] {\n    max-width: 300px;\n}\n\n.logo[_ngcontent-%COMP%] {\n    max-width: 96px;\n}\n\n.logoWindows[_ngcontent-%COMP%] {\n    max-width: 70px;\n    margin: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3NwYWNlTG9nbyB7XG4gICAgbWF4LXdpZHRoOiAxMjhweDtcbn1cblxuI3N1cGVybm92YUxvZ28ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDk2cHg7XG59XG5cbi5sb2dvV2luZG93cyB7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogMTNweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./classes/local-storage */
    "./src/app/classes/local-storage.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _osm_map_osm_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./osm-map/osm-map.component */
    "./src/app/osm-map/osm-map.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toast/toast.component */
    "./src/app/toast/toast.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(toastService) {
        _classCallCheck(this, AppComponent);

        this.toastService = toastService;
        this.title = 'GNow';
        this.localStorage = new _classes_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"]();
        this.getFirstRun();
      }

      _createClass(AppComponent, [{
        key: "getFirstRun",
        value: function getFirstRun() {
          if (!this.localStorage.getLocalStorageValue("isFirstRun")) {
            this.showStandard();
            this.localStorage.setLocalStorage("isFirstRun", new Date());
          }
        }
      }, {
        key: "showStandard",
        value: function showStandard() {
          this.toastService.show('Drag and drop the green marker to update the gravity or click on the map to get the gravity on that place.', {
            classname: 'bg-success text-light',
            delay: 5000,
            autohide: true,
            headertext: 'Notification'
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-osm-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-toasts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _osm_map_osm_map_component__WEBPACK_IMPORTED_MODULE_4__["OsmMapComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: translateHttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateHttpLoaderFactory", function () {
      return translateHttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _osm_map_osm_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./osm-map/osm-map.component */
    "./src/app/osm-map/osm-map.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar-search/navbar-search.component */
    "./src/app/navbar-search/navbar-search.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/osm-message-service.service */
    "./src/app/services/osm-message-service.service.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./calculator/calculator.component */
    "./src/app/calculator/calculator.component.ts");
    /* harmony import */


    var _comparison_comparison_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./comparison/comparison.component */
    "./src/app/comparison/comparison.component.ts");
    /* harmony import */


    var _help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./help/help.component */
    "./src/app/help/help.component.ts");
    /* harmony import */


    var _toast_toast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./toast/toast.component */
    "./src/app/toast/toast.component.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function translateHttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule(translateService) {
      _classCallCheck(this, AppModule);

      this.translateService = translateService;
      this.availableLng = ['en', 'es'];
      var tmpLng = 'en';
      var currentLng = window.navigator.language.substring(0, 2);
      if (this.availableLng.includes(currentLng)) tmpLng = currentLng;
      translateService.setDefaultLang(tmpLng);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"]));
      },
      providers: [_services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_11__["OsmMessageServiceService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
          useFactory: translateHttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _osm_map_osm_map_component__WEBPACK_IMPORTED_MODULE_5__["OsmMapComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_7__["NavbarSearchComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"], _comparison_comparison_component__WEBPACK_IMPORTED_MODULE_14__["ComparisonComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_16__["ToastComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _osm_map_osm_map_component__WEBPACK_IMPORTED_MODULE_5__["OsmMapComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_7__["NavbarSearchComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"], _comparison_comparison_component__WEBPACK_IMPORTED_MODULE_14__["ComparisonComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_16__["ToastComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
              useFactory: translateHttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
            }
          })],
          entryComponents: [_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"], _comparison_comparison_component__WEBPACK_IMPORTED_MODULE_14__["ComparisonComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"]],
          providers: [_services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_11__["OsmMessageServiceService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/calculator/calculator.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/calculator/calculator.component.ts ***!
    \****************************************************/

  /*! exports provided: CalculatorComponent */

  /***/
  function srcAppCalculatorCalculatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () {
      return CalculatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_gravity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../classes/gravity */
    "./src/app/classes/gravity.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CalculatorComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.name);
      }
    }

    var CalculatorComponent = /*#__PURE__*/function () {
      function CalculatorComponent(formBuilder, activeModal, translateService) {
        _classCallCheck(this, CalculatorComponent);

        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.translateService = translateService;
        this.messageStyle = "text-primary";
        this.gResult = "";
        this.decimalNumbers = "5";
      }

      _createClass(CalculatorComponent, [{
        key: "calcGravity",
        value: function calcGravity(latitude, altitude, selectedGUnits) {
          this.messageStyle = "text-danger";
          var g = new _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["Gravity"]();
          var gravity = parseFloat(g.GetGravity(latitude, altitude, false, selectedGUnits == 0 ? false : true).toFixed(parseInt(this.decimalNumbers)));

          switch (gravity) {
            case _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["WrongValues"].Latitude:
              this.gResult = "".concat(this.translations.ErrorLat);
              break;

            case _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["WrongValues"].Everest:
              this.gResult = "".concat(this.translations.ErrorEverest, ": ").concat(selectedGUnits == 1 ? g.ChangeToMetres(g.EVEREST).toFixed(0) + "ft" : g.EVEREST + "m");
              break;

            case _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["WrongValues"].DeadSea:
              this.gResult = "".concat(this.translations.ErrorDeadSea, ": ").concat(selectedGUnits == 1 ? g.ChangeToMetres(g.DEAD_SEA).toFixed(0) + "ft" : g.DEAD_SEA + "m");
              break;

            default:
              this.gResult = gravity + (selectedGUnits == 1 ? " ft/s²" : " m/s²");
              this.messageStyle = "text-primary";
          }
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this = this;

          this.calcForm.valueChanges.subscribe(function (val) {
            _this.decimalNumbers = val.rangeDec;

            if (val.latitude == '' || val.altitude == '') {
              _this.gResult = "";
            } else {
              _this.calcGravity(parseFloat(val.latitude), parseFloat(val.altitude), parseInt(val.gUnits));
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translations = this.translateService.store.translations["".concat(this.translateService.defaultLang)];
          this.enterAlt = this.translations.EnterAltitude;
          this.enterLat = this.translations.EnterLatitude;
          this.calcForm = this.formBuilder.group({
            latitude: '',
            altitude: '',
            gUnits: 0,
            rangeDec: 5
          });
          this.calcForm.controls['gUnits'].setValue(0, {
            onlySelf: true
          });
          this.onChanges();
          this.gUnits = [{
            value: 0,
            name: "m/s²",
            selected: "selected"
          }, {
            value: 1,
            name: "ft/s²",
            selected: ""
          }];
        }
      }]);

      return CalculatorComponent;
    }();

    CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) {
      return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculatorComponent,
      selectors: [["app-calculator"]],
      decls: 30,
      vars: 7,
      consts: [[1, "modal-header"], ["id", "modal-primary-title", "translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group"], ["for", "txtLatitude", "translate", ""], ["type", "number", "min", "-90", "max", "90", "formControlName", "latitude", 1, "form-control", 3, "placeholder"], ["for", "txtAltitude", "translate", ""], ["type", "number", "formControlName", "altitude", 1, "form-control", 3, "placeholder"], ["for", "cmbUnits", "translate", ""], ["formControlName", "gUnits", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "rangeDec"], ["translate", ""], ["formControlName", "rangeDec", "value", "5", "type", "range", "id", "customRange1", "min", "1", "max", "10", "step", "1", 1, "custom-range"], [1, "centered"], [3, "className"], [3, "value"]],
      template: function CalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LatitudeFull");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "AltitudeFull");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Units");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CalculatorComponent_option_20_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DecimalPlaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.calcForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.enterLat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.enterAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gUnits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.decimalNumbers, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.messageStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gResult);
        }
      },
      directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: [".centered[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calculator',
          templateUrl: './calculator.component.html',
          styleUrls: ['./calculator.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/classes/celestial-objects.ts":
  /*!**********************************************!*\
    !*** ./src/app/classes/celestial-objects.ts ***!
    \**********************************************/

  /*! exports provided: CelestialObjects */

  /***/
  function srcAppClassesCelestialObjectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CelestialObjects", function () {
      return CelestialObjects;
    });

    var CelestialObjects = /*#__PURE__*/function () {
      function CelestialObjects() {
        _classCallCheck(this, CelestialObjects);

        this.celestialObjectsArray = [];
        this.celestialObjectsArray = [{
          value: 0,
          name: "Sun",
          gravity: 274,
          CelestialObjectTypes: "Star",
          selected: ""
        }, {
          value: 1,
          name: "Mercury",
          gravity: 3.7,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 2,
          name: "Venus",
          gravity: 8.87,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 3,
          name: "Earth",
          gravity: 9.798,
          CelestialObjectTypes: "Planet",
          selected: "selected"
        }, {
          value: 4,
          name: "Moon",
          gravity: 1.62,
          CelestialObjectTypes: "Moon",
          selected: ""
        }, {
          value: 5,
          name: "Mars",
          gravity: 3.71,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 6,
          name: "Jupiter",
          gravity: 24.92,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 7,
          name: "Titan",
          gravity: 1.352,
          CelestialObjectTypes: "Moon",
          selected: ""
        }, {
          value: 8,
          name: "Saturn",
          gravity: 10.44,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 9,
          name: "Uranus",
          gravity: 8.69,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 10,
          name: "Neptune",
          gravity: 11.15,
          CelestialObjectTypes: "Planet",
          selected: ""
        }, {
          value: 11,
          name: "Pluto",
          gravity: 0.58,
          CelestialObjectTypes: "Dwarf planet",
          selected: ""
        }];
      }

      _createClass(CelestialObjects, [{
        key: "comparedGravity",
        value: function comparedGravity(id1, id2) {
          var gravity1 = this.celestialObjectsArray[id1].gravity;
          var gravity2 = this.celestialObjectsArray[id2].gravity;
          if (gravity1 > gravity2) return 0;else if (gravity1 < gravity2) return 1;else return 2;
        }
      }, {
        key: "percentageGravity",
        value: function percentageGravity(id1, id2) {
          var result = this.comparedGravity(id1, id2);
          var gravity1 = this.celestialObjectsArray[id1].gravity;
          var gravity2 = this.celestialObjectsArray[id2].gravity;
          if (result == 0) return gravity1 * 100 / gravity2;else if (result == 1) return gravity2 * 100 / gravity1;else return 1;
        }
      }, {
        key: "getGravity",
        value: function getGravity(id) {
          return this.celestialObjectsArray[id].gravity;
        }
      }, {
        key: "celestialObjectType",
        value: function celestialObjectType(id) {
          return this.celestialObjectsArray[id].CelestialObjectTypes;
        }
      }, {
        key: "getCelestialObjects",
        value: function getCelestialObjects() {
          return this.celestialObjectsArray;
        }
      }]);

      return CelestialObjects;
    }();
    /***/

  },

  /***/
  "./src/app/classes/gravity.ts":
  /*!************************************!*\
    !*** ./src/app/classes/gravity.ts ***!
    \************************************/

  /*! exports provided: WrongValues, Gravity */

  /***/
  function srcAppClassesGravityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrongValues", function () {
      return WrongValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gravity", function () {
      return Gravity;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WrongValues;

    (function (WrongValues) {
      WrongValues[WrongValues["Latitude"] = 0] = "Latitude";
      WrongValues[WrongValues["Everest"] = 1] = "Everest";
      WrongValues[WrongValues["DeadSea"] = 2] = "DeadSea";
    })(WrongValues || (WrongValues = {}));

    var Gravity = /*#__PURE__*/function () {
      function Gravity() {
        _classCallCheck(this, Gravity);

        this.EVEREST = 6168;
        this.DEAD_SEA = -427;
        this.FOOT = 3.2808399;
      }

      _createClass(Gravity, [{
        key: "getAltitude",
        value: function getAltitude(lat, lng) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, jsonResult;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch("https://elevation-api.io/api/elevation?points=(".concat(lat, ",").concat(lng, ")&key=iijkws66Y5FIa99ZoEpa56pb25v6mo"));

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();

                  case 5:
                    jsonResult = _context.sent;
                    return _context.abrupt("return", jsonResult);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "GetGravity",
        value: function GetGravity(lat, alt) {
          var isMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var isImperial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (!isMap) {
            if (lat < -90 || lat > 90) {
              return WrongValues.Latitude;
            }

            var tmpEverest = this.EVEREST;
            var tmpDeadSea = this.DEAD_SEA;

            if (isImperial) {
              tmpEverest = this.ChangeToFeet(tmpEverest);
              tmpDeadSea = this.ChangeToFeet(tmpDeadSea);
            }

            if (alt > tmpEverest) {
              return WrongValues.Everest;
            } else if (alt < tmpDeadSea) {
              return WrongValues.DeadSea;
            }
          }

          var IGF = 9.780327 * (1 + 0.0053024 * Math.pow(Math.sin(lat), 2) - 0.0000058 * Math.pow(Math.sin(2 * lat), 2));
          var FAC = -3.086 * Math.pow(10, -6) * alt;
          var g = IGF + FAC;

          if (g < 9.7639 || g > 9.8337) {
            g = 9.798;
          }

          return isImperial ? this.ChangeToFeet(g) : g;
        }
      }, {
        key: "ChangeToMetres",
        value: function ChangeToMetres(value) {
          return value / this.FOOT;
        }
      }, {
        key: "ChangeToFeet",
        value: function ChangeToFeet(value) {
          return value * this.FOOT;
        }
      }]);

      return Gravity;
    }();
    /***/

  },

  /***/
  "./src/app/classes/local-storage.ts":
  /*!******************************************!*\
    !*** ./src/app/classes/local-storage.ts ***!
    \******************************************/

  /*! exports provided: LocalStorage */

  /***/
  function srcAppClassesLocalStorageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
      return LocalStorage;
    });

    var LocalStorage = /*#__PURE__*/function () {
      function LocalStorage() {
        _classCallCheck(this, LocalStorage);
      }

      _createClass(LocalStorage, [{
        key: "setLocalStorage",
        value: function setLocalStorage(key, val) {
          if (this.getLocalStorageValue(key) !== null) this.removeLocalStorage(key);
          localStorage.setItem(key, val);
        }
      }, {
        key: "getLocalStorageValue",
        value: function getLocalStorageValue(key) {
          return localStorage.getItem(key);
        }
      }, {
        key: "removeLocalStorage",
        value: function removeLocalStorage(key) {
          localStorage.removeItem(key);
        }
      }]);

      return LocalStorage;
    }();
    /***/

  },

  /***/
  "./src/app/classes/osm-location.ts":
  /*!*****************************************!*\
    !*** ./src/app/classes/osm-location.ts ***!
    \*****************************************/

  /*! exports provided: OsmLocation */

  /***/
  function srcAppClassesOsmLocationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OsmLocation", function () {
      return OsmLocation;
    });

    var OsmLocation = function OsmLocation() {
      _classCallCheck(this, OsmLocation);
    };
    /***/

  },

  /***/
  "./src/app/comparison/comparison.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/comparison/comparison.component.ts ***!
    \****************************************************/

  /*! exports provided: ComparisonComponent */

  /***/
  function srcAppComparisonComparisonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComparisonComponent", function () {
      return ComparisonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_celestial_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../classes/celestial-objects */
    "./src/app/classes/celestial-objects.ts");
    /* harmony import */


    var _classes_gravity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/gravity */
    "./src/app/classes/gravity.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ComparisonComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.name);
      }
    }

    function ComparisonComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.name);
      }
    }

    function ComparisonComponent_option_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.name);
      }
    }

    function ComparisonComponent_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r7.name);
      }
    }

    var ComparisonComponent = /*#__PURE__*/function () {
      function ComparisonComponent(formBuilder, activeModal, translateService) {
        _classCallCheck(this, ComparisonComponent);

        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.translateService = translateService;
        this.wResult = "";
        this.messageComparisonStyle = "text-primary";
        this.gResult = "";
        this.messageGComparisonStyle = "text-primary";
        this.celestialImgFirst = "./assets/img/earth.png";
        this.celestialImgSecond = "./assets/img/earth.png";
        this.celestialStrFirstGravity = "9.798 m/s²";
        this.celestialStrSecondGravity = "9.798 m/s²";
      }

      _createClass(ComparisonComponent, [{
        key: "calcWeight",
        value: function calcWeight(weight, selectedValueCO1, selectedValueCO2, selectedWUnits) {
          if (weight == undefined) {
            this.wResult = "";
            return;
          }

          var data = new _classes_celestial_objects__WEBPACK_IMPORTED_MODULE_1__["CelestialObjects"]();
          var newWeight = 0;
          var gravity1 = data.getGravity(selectedValueCO1);
          var gravity2 = data.getGravity(selectedValueCO2);
          var difference = gravity2 / gravity1;

          if (selectedValueCO1 != 3) {
            var temp = gravity1 / data.getGravity(3);
            newWeight = weight * temp;
            newWeight *= difference;
          } else {
            newWeight = weight * difference;
          }

          this.setWeight(weight, parseFloat(newWeight.toFixed(1)), selectedValueCO2, selectedWUnits);
        }
      }, {
        key: "setWeight",
        value: function setWeight(initialWeight, newWeight, selectedValueCO2, selectedWUnits) {
          if (newWeight < initialWeight) {
            this.messageComparisonStyle = "text-success"; // @ts-ignore

            this.wResult = "You are going to be lighter in ".concat(this.celestialObjects[selectedValueCO2].name, " check it out! ").concat(newWeight, " ").concat(this.wUnits[selectedWUnits].name);
          } else if (newWeight > initialWeight) {
            this.messageComparisonStyle = "text-danger"; // @ts-ignore

            this.wResult = "Your weight in ".concat(this.celestialObjects[selectedValueCO2].name, " is greater check it out! ").concat(newWeight, " ").concat(this.wUnits[selectedWUnits].name);
          } else if (newWeight == initialWeight) {
            this.messageComparisonStyle = "text-primary";
            this.wResult = "Same weight";
          } else {
            this.messageComparisonStyle = "text-primary";
            this.wResult = "";
          }
        }
      }, {
        key: "compareGravity",
        value: function compareGravity(selectedValueCO1, selectedValueCO2) {
          if (selectedValueCO1 == selectedValueCO2) {
            this.gResult = "";
            return;
          }

          var data = new _classes_celestial_objects__WEBPACK_IMPORTED_MODULE_1__["CelestialObjects"]();
          var gPercentage = data.percentageGravity(selectedValueCO1, selectedValueCO2);
          var extra = "";

          if (selectedValueCO1 == 3 || selectedValueCO1 == 4 || selectedValueCO1 == 0) {
            extra = "the ";
          }

          switch (data.comparedGravity(selectedValueCO1, selectedValueCO2)) {
            case 0:
              this.messageGComparisonStyle = "text-success"; // @ts-ignore

              this.gResult = "The gravity in ".concat(extra).concat(this.celestialObjects[selectedValueCO1].name, " is bigger in: ").concat(gPercentage.toFixed(0), "%");
              break;

            case 1:
              this.messageGComparisonStyle = "text-danger"; // @ts-ignore

              this.gResult = "The gravity in ".concat(extra).concat(this.celestialObjects[selectedValueCO1].name, " is smaller in: ").concat(gPercentage.toFixed(0), "%");
              break;
          }
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this2 = this;

          this.comparisonForm.valueChanges.subscribe(function (val) {
            // @ts-ignore
            _this2.celestialImgFirst = "./assets/img/".concat(_this2.celestialObjects[val.selectedValueCO1].name.toLowerCase(), ".png"); // @ts-ignore

            _this2.celestialImgSecond = "./assets/img/".concat(_this2.celestialObjects[val.selectedValueCO2].name.toLowerCase(), ".png");

            if (val.selectedGUnits == 0) {
              // @ts-ignore
              _this2.celestialStrFirstGravity = "".concat(_this2.celestialObjects[val.selectedValueCO1].gravity, " m/s\xB2"); // @ts-ignore

              _this2.celestialStrSecondGravity = "".concat(_this2.celestialObjects[val.selectedValueCO2].gravity, " m/s\xB2");
            } else {
              var g = new _classes_gravity__WEBPACK_IMPORTED_MODULE_2__["Gravity"](); // @ts-ignore

              _this2.celestialStrFirstGravity = "".concat(g.ChangeToFeet(_this2.celestialObjects[val.selectedValueCO1].gravity).toFixed(), " ft/s\xB2"); // @ts-ignore

              _this2.celestialStrSecondGravity = "".concat(g.ChangeToFeet(_this2.celestialObjects[val.selectedValueCO2].gravity).toFixed(3), " ft/s\xB2");
            }

            _this2.compareGravity(parseInt(val.selectedValueCO1), parseInt(val.selectedValueCO2));

            if (val.weight == '') {
              _this2.wResult = "";
            } else {
              _this2.calcWeight(parseFloat(val.weight), parseInt(val.selectedValueCO1), parseInt(val.selectedValueCO2), parseInt(val.selectedWUnits));
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.celestialObjects = new _classes_celestial_objects__WEBPACK_IMPORTED_MODULE_1__["CelestialObjects"]().getCelestialObjects();
          this.translations = this.translateService.store.translations["".concat(this.translateService.defaultLang)];
          this.comparisonForm = this.formBuilder.group({
            weight: '',
            selectedWUnits: 0,
            selectedGUnits: 0,
            selectedValueCO1: 3,
            selectedValueCO2: 3
          });
          this.comparisonForm.controls['selectedWUnits'].setValue(0, {
            onlySelf: true
          });
          this.comparisonForm.controls['selectedGUnits'].setValue(0, {
            onlySelf: true
          });
          this.comparisonForm.controls['selectedValueCO1'].setValue(3, {
            onlySelf: true
          });
          this.comparisonForm.controls['selectedValueCO2'].setValue(3, {
            onlySelf: true
          });
          this.onChanges();
          this.wUnits = [{
            value: 0,
            name: "kg",
            selected: "selected"
          }, {
            value: 1,
            name: "lb",
            selected: ""
          }];
          this.gUnits = [{
            value: 0,
            name: "m/s²",
            selected: "selected"
          }, {
            value: 1,
            name: "ft/s²",
            selected: ""
          }];
        }
      }]);

      return ComparisonComponent;
    }();

    ComparisonComponent.ɵfac = function ComparisonComponent_Factory(t) {
      return new (t || ComparisonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    ComparisonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComparisonComponent,
      selectors: [["app-comparison"]],
      decls: 57,
      vars: 13,
      consts: [[1, "modal-header"], ["id", "modal-primary-title", "translate", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group"], [1, "row"], [1, "col-8"], ["for", "txtWeight"], ["min", "1", "type", "number", "placeholder", "Weight", "formControlName", "weight", 1, "form-control"], [1, "col-4"], ["for", "cmbUnitsWeight"], ["formControlName", "selectedWUnits", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "cmbGUnits"], ["formControlName", "selectedGUnits", 1, "form-control"], [1, "col"], ["for", "cmbFirstCelestialObject"], ["formControlName", "selectedValueCO1", 1, "form-control"], [1, "centered"], [1, "imgCelestialObject", 3, "src"], [1, "caption"], ["for", "cmbSecondCelestialObject"], ["formControlName", "selectedValueCO2", 1, "form-control"], [3, "className"], [3, "value"]],
      template: function ComparisonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comparison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComparisonComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your weight on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "the Earth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Units:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ComparisonComponent_option_21_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gravity units:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ComparisonComponent_option_26_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " celestial object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ComparisonComponent_option_35_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " celestial object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ComparisonComponent_option_47_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.comparisonForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wUnits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gUnits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.celestialObjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.celestialImgFirst, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.celestialStrFirstGravity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.celestialObjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.celestialImgSecond, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.celestialStrSecondGravity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.messageGComparisonStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.messageComparisonStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wResult);
        }
      },
      directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".centered[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.imgCelestialObject[_ngcontent-%COMP%] {\n    max-width: 192px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyaXNvbi9jb21wYXJpc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wYXJpc29uL2NvbXBhcmlzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nQ2VsZXN0aWFsT2JqZWN0IHtcbiAgICBtYXgtd2lkdGg6IDE5MnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComparisonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comparison',
          templateUrl: './comparison.component.html',
          styleUrls: ['./comparison.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 10,
      vars: 1,
      consts: [["id", "footer", 1, "py-2", "bg-dark", "text-white-50"], [1, "container", "text-center"], ["href", "https://federiconavarrete.com", "target", "_blank"], ["href", "https://supernovaic.tk", "target", "_blank"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Federico Navarrete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Supernova IC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", 2014 - ", ctx.currentYear, "");
        }
      },
      styles: ["#footer[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/help/help.component.ts":
  /*!****************************************!*\
    !*** ./src/app/help/help.component.ts ***!
    \****************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function HelpComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What is Gravity?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gravity, is a natural phenomenon by which all physical bodies attract each other. It is most commonly recognized and experienced as the agent that gives weight to physical objects, and causes physical objects to fall toward the ground when dropped from a height. [\xB9]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Its standard value on the Earth is 9.80665 m/s\xB2 (32.1740 ft/s\xB2) is the one originally adopted by the International Committee on Weights and Measures in 1901 for 45\xB0 latitude, even though it has been shown to be too high by about five parts in ten thousand.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The common myth that a falling apple inspired Isaac Newton's insight into the law of gravity.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What else does gravity do?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Why do you land on the ground when you jump up instead of floating off into space? Why do things fall down when you throw them or drop them? The answer is gravity: an invisible force that pulls objects toward each other. Earth's gravity is what keeps you on the ground and what makes things fall. [\xB2]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "An animation of gravity at work. Albert Einstein described gravity as a curve in space that wraps around an object\u2014such as a star or a planet. If another object is nearby, it is pulled into the curve. Text credit: NASA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "More information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xB9 Gravity ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "en.wikipedia.org/wiki/Gravity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xB2 What is gravity? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "spaceplace.nasa.gov/what-is-gravity/en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HelpComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gravity change");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Anything that has mass also has gravity. Objects with more mass have more gravity. Gravity also gets weaker with distance. So, the closer objects are to each other, the stronger their gravitational pull is.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Earth's gravity comes from all its mass. All its mass makes a combined gravitational pull on all the mass in your body. That's what gives you weight. And if you were on a planet with less mass than Earth, you would weigh less than you do here. [\xB9]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Image credit: NASA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You exert the same gravitational force on Earth that it does on you. But because Earth is so much more massive than you, your force doesn't really have an effect our planet.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Also, the gravity varies all over our planet, it's not homogeneous.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Earth's gravity measured by NASA's GRACE mission, showing deviations from the theoretical gravity of an idealized smooth Earth, the so-called earth ellipsoid. Red shows the areas where gravity is stronger than the smooth, standard value, and blue reveals areas where gravity is weaker. (Animated version)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Furthermore, the lowest gravity recorded is in the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mount Nevado Huascar\xE1n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " in Peru with 9.7639 m/s\xB2, while the highest is at the surface of the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Arctic Ocean");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", at 9.8337 m/s\xB2. [\xB2]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "More information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xB9 What is gravity? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "spaceplace.nasa.gov/what-is-gravity/en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xB2 Gravity map reveals Earth's extremes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "www.newscientist.com/article/dn24068-gravity-map-reveals-earths-extremes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HelpComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Formula");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The formulas used by this App are based on the International Gravity Formula 1967 (IGF)\xB9 which determines the gravity from the position of latitude, and the Free Air Correction (FAC)\xB2 which corrects for height above sea level.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ICF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " = 9.780327 (1 + 0.0053024");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xB2\u03A6 - 0.0000058");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xB22\u03A6)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FAC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " = -3.086 \u2715 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u2715 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "h");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "g = IGF + FAC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Symbols");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " = Theoretical local gravity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "IGF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " = International Gravity Formula");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "FAC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " = Free Air Correction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u03A6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " = Latitude");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "h");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " = Height relative to sea level");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Key concepts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Latitude");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Position relative to the equator in decimal degrees. Latitude can only be specified between -90\xB0 and 90\xB0.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "You can determine the latitude position by going to Google Maps and right clicking on the required location and then selecting \u201CDrop LatLng Marker\u201D which will display the decimal latitude value first before the longitude value.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Height/Altitude");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Height above sea level is a value in metres or feet. If you do not know the height above sea level you should be able to obtain it from your national geological survey maps.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "More information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\xB9 International Gravity Formula 1967 (IGF) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "en.wikipedia.org/wiki/International_Gravity_Formula");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xB2 Free Air Correction (FAC) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "en.wikipedia.org/wiki/Gravity_of_Earth#Free_air_correction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HelpComponent = /*#__PURE__*/function () {
      function HelpComponent(activeModal) {
        _classCallCheck(this, HelpComponent);

        this.activeModal = activeModal;
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 14,
      vars: 0,
      consts: [[1, "modal-header"], ["id", "modal-primary-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["title", "What is?"], ["ngbTabContent", ""], ["title", "Change"], ["title", "Formula"], [1, "centered"], ["src", "./assets/img/newtonApple.jpg", 1, "imgApple"], [1, "caption"], ["src", "./assets/img/einstein-gravitational-wave.gif", 1, "horizontalMax"], ["target", "blank", "href", "https://en.wikipedia.org/wiki/Gravity"], ["target", "blank", "href", "https://spaceplace.nasa.gov/what-is-gravity/en/"], ["src", "./assets/img/whatIsGravity.jpg", 1, "horizontalMax"], [1, "caption", "txtRight"], ["src", "./assets/img/GRACE_globe_animation.gif", 1, "imgRotation"], ["target", "blank", "href", "https://goo.gl/maps/Vah5YCPKbk32"], ["target", "blank", "href", "https://goo.gl/maps/tc287in2Vnt"], ["target", "blank", "href", "https://www.newscientist.com/article/dn24068-gravity-map-reveals-earths-extremes"], [1, "fontItalic"], [1, "centered", "fontItalic"], ["target", "blank", "href", "http://en.wikipedia.org/wiki/International_Gravity_Formula"], ["target", "blank", "href", "http://en.wikipedia.org/wiki/Gravity_of_Earth#Free_air_correction"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HelpComponent_ng_template_9_Template, 29, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-tab", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HelpComponent_ng_template_11_Template, 37, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HelpComponent_ng_template_13_Template, 75, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"]],
      styles: [".centered[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.caption[_ngcontent-%COMP%] {\n    font-size: small;\n}\n\n.fontItalic[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n\n.horizontalMax[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n\n.imgApple[_ngcontent-%COMP%] {\n    max-width: 256px;\n}\n\n.txtRight[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.imgRotation[_ngcontent-%COMP%] {\n    max-width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9udEl0YWxpYyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaG9yaXpvbnRhbE1heCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW1nQXBwbGUge1xuICAgIG1heC13aWR0aDogMjU2cHg7XG59XG5cbi50eHRSaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbWdSb3RhdGlvbiB7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar-search/navbar-search.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/navbar-search/navbar-search.component.ts ***!
    \**********************************************************/

  /*! exports provided: OSMService, NavbarSearchComponent */

  /***/
  function srcAppNavbarSearchNavbarSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OSMService", function () {
      return OSMService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarSearchComponent", function () {
      return NavbarSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var OSM_URL = "https://nominatim.openstreetmap.org/search/{0}?format=json&email=fanmixco@gmail.com";
    var currentSearch;

    var OSMService = /*#__PURE__*/function () {
      function OSMService(http) {
        _classCallCheck(this, OSMService);

        this.http = http;
      }

      _createClass(OSMService, [{
        key: "search",
        value: function search(term) {
          if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }

          return this.http.get(OSM_URL.replace('{0}', term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            currentSearch = response; // @ts-ignore

            return response.map(function (a) {
              return a.display_name;
            });
          }));
        }
      }]);

      return OSMService;
    }();

    OSMService.ɵfac = function OSMService_Factory(t) {
      return new (t || OSMService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    OSMService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OSMService,
      factory: OSMService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OSMService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();

    var NavbarSearchComponent = /*#__PURE__*/function () {
      function NavbarSearchComponent(_service) {
        var _this3 = this;

        _classCallCheck(this, NavbarSearchComponent);

        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this3.searching = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this3._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this3.searchFailed = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              _this3.searchFailed = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this3.searching = false;
          }));
        };
      }

      _createClass(NavbarSearchComponent, [{
        key: "selectedItem",
        value: function selectedItem(item) {
          this.onItemSelected.emit(currentSearch.filter(function (x) {
            return x.display_name == item.item;
          })[0]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarSearchComponent;
    }();

    NavbarSearchComponent.ɵfac = function NavbarSearchComponent_Factory(t) {
      return new (t || NavbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](OSMService));
    };

    NavbarSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarSearchComponent,
      selectors: [["app-navbar-search"]],
      outputs: {
        onItemSelected: "onItemSelected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([OSMService])],
      decls: 1,
      vars: 4,
      consts: [["id", "app-navbar-search", "type", "text", "placeholder", "Search \u2026", 1, "form-control", 3, "ngModel", "ngbTypeahead", "selectItem", "ngModelChange"]],
      template: function NavbarSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectItem", function NavbarSearchComponent_Template_input_selectItem_0_listener($event) {
            return ctx.selectedItem($event);
          })("ngModelChange", function NavbarSearchComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.model = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".form-control[_ngcontent-%COMP%] { width: 250px; display: inline; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLXNlYXJjaC9uYXZiYXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFlBQVksRUFBRSxlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXItc2VhcmNoL25hdmJhci1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wgeyB3aWR0aDogMjUwcHg7IGRpc3BsYXk6IGlubGluZTsgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar-search',
          providers: [OSMService],
          templateUrl: './navbar-search.component.html',
          styleUrls: ['./navbar-search.component.css']
        }]
      }], function () {
        return [{
          type: OSMService
        }];
      }, {
        onItemSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../help/help.component */
    "./src/app/help/help.component.ts");
    /* harmony import */


    var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../calculator/calculator.component */
    "./src/app/calculator/calculator.component.ts");
    /* harmony import */


    var _comparison_comparison_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../comparison/comparison.component */
    "./src/app/comparison/comparison.component.ts");
    /* harmony import */


    var _services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/osm-message-service.service */
    "./src/app/services/osm-message-service.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../navbar-search/navbar-search.component */
    "./src/app/navbar-search/navbar-search.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "show": a0
      };
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(service, modalService) {
        _classCallCheck(this, NavbarComponent);

        this.service = service;
        this.modalService = modalService;
        this.navbarOpen = false;
      }

      _createClass(NavbarComponent, [{
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.navbarOpen = !this.navbarOpen;
        }
      }, {
        key: "openCalc",
        value: function openCalc() {
          var calcConst = this.modalService.open(_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"], {
            centered: true,
            scrollable: true
          });
          calcConst.componentInstance.latitude = undefined;
          calcConst.componentInstance.altitude = undefined;
          calcConst.componentInstance.gResult = undefined;
        }
      }, {
        key: "openHelp",
        value: function openHelp() {
          this.modalService.open(_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], {
            centered: true,
            scrollable: true
          });
        }
      }, {
        key: "openComparison",
        value: function openComparison() {
          var compConst = this.modalService.open(_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonComponent"], {
            centered: true,
            scrollable: true
          });
          compConst.componentInstance.weight = undefined;
          compConst.componentInstance.wResult = undefined;
        }
      }, {
        key: "openAbout",
        value: function openAbout() {
          this.modalService.open(_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], {
            centered: true,
            scrollable: true
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setLocation",
        value: function setLocation(location) {
          this.currentLocation = location;
          this.setLocations();
        }
      }, {
        key: "setLocations",
        value: function setLocations() {
          var d = JSON.parse(JSON.stringify(this.currentLocation));
          this.service.setLocations(d);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_5__["OsmMessageServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        currentLocation: "currentLocation"
      },
      decls: 20,
      vars: 3,
      consts: [["id", "titleBar", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["translate", "", 1, "nav-link", 3, "click"], [3, "onItemSelected"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gravity Now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() {
            return ctx.toggleNavbar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() {
            return ctx.openCalc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
            return ctx.openComparison();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comparison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.openHelp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() {
            return ctx.openAbout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-navbar-search", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemSelected", function NavbarComponent_Template_app_navbar_search_onItemSelected_19_listener($event) {
            return ctx.setLocation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navbarOpen));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_9__["NavbarSearchComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_5__["OsmMessageServiceService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      }, {
        currentLocation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/osm-map/osm-map.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/osm-map/osm-map.component.ts ***!
    \**********************************************/

  /*! exports provided: OsmMapComponent */

  /***/
  function srcAppOsmMapOsmMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OsmMapComponent", function () {
      return OsmMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_gravity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../classes/gravity */
    "./src/app/classes/gravity.ts");
    /* harmony import */


    var _services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/osm-message-service.service */
    "./src/app/services/osm-message-service.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var OsmMapComponent = /*#__PURE__*/function () {
      function OsmMapComponent(service, translateService) {
        _classCallCheck(this, OsmMapComponent);

        this.service = service;
        this.translateService = translateService;
        this.gravityResult = "G";
        this.osmLocationSubject$ = this.service.osmLocationSubject$;
      }

      _createClass(OsmMapComponent, [{
        key: "onWindowResize",
        value: function onWindowResize() {
          this.resizeMap();
        }
      }, {
        key: "resizeMap",
        value: function resizeMap() {
          var mapHeight = document.body.clientHeight - (document.getElementById("titleBar").clientHeight + document.getElementById("footer").clientHeight);
          this.imgMarginTop = mapHeight - 89;
          this.imgMarginLeft = document.body.clientWidth / 2 - 89;
          this.mapHeight = mapHeight;
        }
      }, {
        key: "setNewMarker",
        value: function setNewMarker(loc, translations) {
          new _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["Gravity"]().getAltitude(parseFloat(loc[0]), parseFloat(loc[1])).then(function (result) {
            var markerIcon = new L.DivIcon({
              className: 'my-div-icon',
              html: "<img style=\"height:32px;width:23.5px\" class=\"my-div-image\" src=\"assets/img/Map_pin_icon.svg\"/>\n                  <span class=\"my-div-span\">".concat(new _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["Gravity"]().GetGravity(result.elevations[0].lat, result.elevations[0].elevation).toFixed(4), "m/s\xB2</span>")
            });
            new L.marker(loc, {
              icon: markerIcon
            }).bindTooltip("".concat(translations.Latitude, ": ").concat(result.elevations[0].lat.toFixed(2), "\xB0, ").concat(translations.Longitude, ": ").concat(result.elevations[0].lon.toFixed(2), "\xB0, ").concat(translations.Altitude, ": ").concat(result.elevations[0].elevation, "m")).addTo(OsmMapComponent.map);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.service.osmLocationSubject$.subscribe(function (value) {
            if (value.lat != undefined && value.lon != undefined) {
              _this4.setNewMarker([value.lat, value.lon], _this4.translateService.store.translations["".concat(_this4.translateService.defaultLang)]);

              OsmMapComponent.map.setView([value.lat, value.lon], 4);
            }
          });
          var curLocation = []; //El Salvador

          curLocation = [13.905190, -89.500206];
          OsmMapComponent.map = L.map('map').setView(curLocation, 4);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(OsmMapComponent.map);
          L.control.locate().addTo(OsmMapComponent.map);
          OsmMapComponent.map.attributionControl.setPrefix(false);
          var markerIcon = L.icon({
            iconUrl: 'assets/img/Map_pin_icon_green.svg',
            iconSize: [94 / 3, 128 / 3]
          });
          var marker = new L.marker(curLocation, {
            icon: markerIcon,
            draggable: 'true'
          });
          marker.on('dragend', this.dragMarker);
          OsmMapComponent.map.addLayer(marker);
          OsmMapComponent.map.on('click', function (e) {
            return _this4.setNewMarker([e.latlng.lat, e.latlng.lng], _this4.translateService.store.translations["".concat(_this4.translateService.defaultLang)]);
          });
          OsmMapComponent.map.on('locationfound', function (e) {
            return _this4.setNewMarker([e.latlng.lat, e.latlng.lng], _this4.translateService.store.translations["".concat(_this4.translateService.defaultLang)]);
          });
          this.resizeMap();
        }
      }, {
        key: "dragMarker",
        value: function dragMarker(event) {
          var _this5 = this;

          // @ts-ignore
          var position = this.getLatLng(); // @ts-ignore

          this.setLatLng(position, {
            draggable: 'true'
          }).bindPopup(position).update();
          new _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["Gravity"]().getAltitude(position.lat, position.lng).then(function (result) {
            return new _classes_gravity__WEBPACK_IMPORTED_MODULE_1__["Gravity"]().GetGravity(result.elevations[0].lat, result.elevations[0].elevation).toFixed(2);
          }).then(function (gResult) {
            _this5.gravityResult = gResult;
            document.getElementById("lblGravity").innerHTML = "".concat(gResult);
            document.getElementById("lblGUnit").innerHTML = "m/s\xB2";
          });
        }
      }]);

      return OsmMapComponent;
    }();

    OsmMapComponent.ɵfac = function OsmMapComponent_Factory(t) {
      return new (t || OsmMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_2__["OsmMessageServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    OsmMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OsmMapComponent,
      selectors: [["app-osm-map"]],
      hostBindings: function OsmMapComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function OsmMapComponent_resize_HostBindingHandler() {
            return ctx.onWindowResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 7,
      consts: [[1, "mapbox"], ["id", "map", 1, "row-fluid", "some"], [1, "topCircle", "row-fluid", "overlay", "text-white-50"], ["id", "divGContainer"], ["id", "lblGravity"], ["id", "lblGUnit"]],
      template: function OsmMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.mapHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.imgMarginTop, "px")("margin-left", ctx.imgMarginLeft, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gravityResult);
        }
      },
      styles: ["#map[_ngcontent-%COMP%]{\n    height: 400px;\n    width: 100%;\n}\n\n#divGContainer[_ngcontent-%COMP%] {\n    margin-top: 15px;\n}\n\n#lblGravity[_ngcontent-%COMP%] {\n    font-size: 50px;\n}\n\n#lblGUnit[_ngcontent-%COMP%] {\n    font-size: small;\n}\n\n.topCircle[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 180px;\n    background:#343a40!important;\n    border-top-left-radius: 180px;\n    border-top-right-radius: 180px;\n    margin: auto;\n    position: absolute;\n    z-index: 400;\n    text-align: center;\n}\n\n.mapbox[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.mapbox[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n}\n\n.mapbox[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .topCircle[_ngcontent-%COMP%] {\n    pointer-events: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3NtLW1hcC9vc20tbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvb3NtLW1hcC9vc20tbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNkaXZHQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jbGJsR3Jhdml0eSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4jbGJsR1VuaXQge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50b3BDaXJjbGUge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDojMzQzYTQwIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxODBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFwYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXBib3ggLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1hcGJveCAub3ZlcmxheSAudG9wQ2lyY2xlIHtcbiAgICBwb2ludGVyLWV2ZW50czogaW5pdGlhbDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsmMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-osm-map',
          templateUrl: './osm-map.component.html',
          styleUrls: ['./osm-map.component.css']
        }]
      }], function () {
        return [{
          type: _services_osm_message_service_service__WEBPACK_IMPORTED_MODULE_2__["OsmMessageServiceService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, {
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/osm-message-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/osm-message-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: OsmMessageServiceService */

  /***/
  function srcAppServicesOsmMessageServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OsmMessageServiceService", function () {
      return OsmMessageServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var _classes_osm_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/osm-location */
    "./src/app/classes/osm-location.ts");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);

    var OsmMessageServiceService = /*#__PURE__*/function () {
      function OsmMessageServiceService() {
        _classCallCheck(this, OsmMessageServiceService);

        this.osmLocation = new _classes_osm_location__WEBPACK_IMPORTED_MODULE_2__["OsmLocation"]();
        this.osmLocationSubject$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.osmLocation);
      }

      _createClass(OsmMessageServiceService, [{
        key: "setLocations",
        value: function setLocations(osmLoc) {
          this.osmLocationSubject$.next(osmLoc);
        }
      }]);

      return OsmMessageServiceService;
    }();

    OsmMessageServiceService.ɵfac = function OsmMessageServiceService_Factory(t) {
      return new (t || OsmMessageServiceService)();
    };

    OsmMessageServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OsmMessageServiceService,
      factory: OsmMessageServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsmMessageServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // toast.service.ts


    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toasts = [];
      } // Push new Toasts to array with content and options


      _createClass(ToastService, [{
        key: "show",
        value: function show(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, options));
        } // Callback method to remove Toast DOM element from view

      }, {
        key: "remove",
        value: function remove(toast) {
          this.toasts = this.toasts.filter(function (t) {
            return t !== toast;
          });
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/toast/toast.component.ts":
  /*!******************************************!*\
    !*** ./src/app/toast/toast.component.ts ***!
    \******************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

    function ToastComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
      }
    }

    function ToastComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
      }
    }

    function ToastComponent_ngb_toast_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var toast_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toastService.remove(toast_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toast_r1 = ctx.$implicit;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", toast_r1.headertext)("autohide", toast_r1.autohide)("delay", toast_r1.delay || 5000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
      }
    }

    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent(toastService) {
        _classCallCheck(this, ToastComponent);

        this.toastService = toastService;
      }

      _createClass(ToastComponent, [{
        key: "isTemplate",
        value: function isTemplate(toast) {
          return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toasts"]],
      hostVars: 2,
      hostBindings: function ToastComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "header", "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "header", "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 4, 7, "ngb-toast", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toasts',
          template: "\n    <ngb-toast\n      *ngFor=\"let toast of toastService.toasts\"\n      [header]=\"toast.headertext\"\n      [class]=\"toast.classname\"\n      [autohide]=\"toast.autohide\"\n      [delay]=\"toast.delay || 5000\"\n      (hide)=\"toastService.remove(toast)\"\n    >\n      <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n        <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n      </ng-template>\n \n      <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n    </ngb-toast>\n  ",
          host: {
            '[class.ngb-toasts]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/fanmixco/Downloads/gravitynow-angular-master/source_code/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map