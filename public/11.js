(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import { axios } from "vue/types/umd";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      valid: true,
      email: "",
      password: "",
      passwordRules: [function (v) {
        return !!v || "Password is required";
      }, function (v) {
        return v && v.length >= 5 || "Name must be greater than 5 characters";
      }]
    }, _defineProperty(_ref, "email", ""), _defineProperty(_ref, "emailRules", [function (v) {
      return !!v || "E-mail is required";
    }, function (v) {
      return /.+@.+\..+/.test(v) || "E-mail must be valid";
    }]), _defineProperty(_ref, "checkbox", false), _ref;
  },
  created: function created() {
    this.isAuth();
  },
  methods: {
    isAuth: function isAuth() {
      if (user.lenght > 0) {
        this.$router.push({
          name: "Dashboard"
        });
      }
    },
    login: function login() {
      var _this = this;

      var val = this.$refs.form.validate();

      if (!val) {
        return;
      } // const data = JSON.stringify({
      //     email: this.email,
      //     password:this.password,
      //     });


      var datas = {
        email: this.email,
        password: this.password
      };
      axios.post("api/login", datas).then(function () {
        _this.$router.push({
          name: "Dashboard"
        });
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pa-15", attrs: { id: "app" } },
    [
      _c(
        "v-card",
        {
          staticClass: "pa-5 mx-auto",
          attrs: { elevation: "6", outlined: "", shaped: "", width: "500" }
        },
        [
          _c("v-card-text", { staticClass: "mb-0" }, [
            _c("p", { staticClass: "text-h6 text--primary text-center" }, [
              _vm._v("Login")
            ])
          ]),
          _vm._v(" "),
          _vm.user.length <= 0
            ? _c(
                "div",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          rules: _vm.emailRules,
                          label: "E-mail",
                          required: ""
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          counter: 5,
                          rules: _vm.passwordRules,
                          label: "Password",
                          required: ""
                        },
                        model: {
                          value: _vm.password,
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-checkbox", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.setDisable,
                            expression: "setDisable"
                          }
                        ],
                        attrs: { label: "Do you agree?", required: "" },
                        model: {
                          value: _vm.checkbox,
                          callback: function($$v) {
                            _vm.checkbox = $$v
                          },
                          expression: "checkbox"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-4",
                          attrs: { disabled: !_vm.valid, color: "success" },
                          on: { click: _vm.login }
                        },
                        [_vm._v("\n          Login\n        ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "text--primary mt-3" }, [
            _c(
              "p",
              [
                _vm._v("\n        Don't have an account yet ?"),
                _c(
                  "router-link",
                  {
                    attrs: { to: "/Registration" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.Registration($event)
                      }
                    }
                  },
                  [_vm._v("\n          Sign Up\n        ")]
                ),
                _vm._v(" "),
                _c("v-divider", { attrs: { inset: "", vertical: "" } }),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: { to: "/Dashboard" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.Registration($event)
                      }
                    }
                  },
                  [_vm._v(" Home ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3b6adb30& */ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=3b6adb30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);