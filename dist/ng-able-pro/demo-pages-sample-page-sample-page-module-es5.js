function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-sample-page-sample-page-module"], {
  /***/
  "./src/app/demo/pages/sample-page/sample-page-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/demo/pages/sample-page/sample-page-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SamplePageRoutingModule */

  /***/
  function srcAppDemoPagesSamplePageSamplePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function () {
      return SamplePageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sample_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sample-page.component */
    "./src/app/demo/pages/sample-page/sample-page.component.ts");

    var routes = [{
      path: '',
      component: _sample_page_component__WEBPACK_IMPORTED_MODULE_2__["SamplePageComponent"]
    }];

    var SamplePageRoutingModule = function SamplePageRoutingModule() {
      _classCallCheck(this, SamplePageRoutingModule);
    };

    SamplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SamplePageRoutingModule
    });
    SamplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SamplePageRoutingModule_Factory(t) {
        return new (t || SamplePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/sample-page/sample-page.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/demo/pages/sample-page/sample-page.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SamplePageComponent */

  /***/
  function srcAppDemoPagesSamplePageSamplePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function () {
      return SamplePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/api.service */
    "./src/app/demo/pages/service/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../theme/shared/components/gallery/gallery.component */
    "./src/app/theme/shared/components/gallery/gallery.component.ts");

    function SamplePageComponent_app_gallery_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 1);
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("albums", ctx_r36.albImage)("users", ctx_r36.user);
      }
    }

    var SamplePageComponent =
    /*#__PURE__*/
    function () {
      function SamplePageComponent(service) {
        _classCallCheck(this, SamplePageComponent);

        this.service = service;
        this.isload = false;
      }

      _createClass(SamplePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getUser().subscribe(function (user) {
            _this.user = user;

            _this.service.getAlbums().subscribe(function (albums) {
              _this.albImage = albums;
              _this.isload = true;
            });
          });
        }
      }]);

      return SamplePageComponent;
    }();

    SamplePageComponent.ɵfac = function SamplePageComponent_Factory(t) {
      return new (t || SamplePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    SamplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SamplePageComponent,
      selectors: [["app-sample-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "albums", "users", 4, "ngIf"], [3, "albums", "users"]],
      template: function SamplePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SamplePageComponent_app_gallery_0_Template, 1, 2, "app-gallery", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isload);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FtcGxlLXBhZ2Uvc2FtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sample-page',
          templateUrl: './sample-page.component.html',
          styleUrls: ['./sample-page.component.scss']
        }]
      }], function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/sample-page/sample-page.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/demo/pages/sample-page/sample-page.module.ts ***!
    \**************************************************************/

  /*! exports provided: SamplePageModule */

  /***/
  function srcAppDemoPagesSamplePageSamplePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SamplePageModule", function () {
      return SamplePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sample-page-routing.module */
    "./src/app/demo/pages/sample-page/sample-page-routing.module.ts");
    /* harmony import */


    var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sample-page.component */
    "./src/app/demo/pages/sample-page/sample-page.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/api.service */
    "./src/app/demo/pages/service/api.service.ts");

    var SamplePageModule = function SamplePageModule() {
      _classCallCheck(this, SamplePageModule);
    };

    SamplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SamplePageModule
    });
    SamplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SamplePageModule_Factory(t) {
        return new (t || SamplePageModule)();
      },
      providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageModule, {
        declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=demo-pages-sample-page-sample-page-module-es5.js.map