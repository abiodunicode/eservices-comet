(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      valid: true,
      first_name: '',
      last_name: '',
      photo: '',
      password: '',
      email: '',
      type: 'agent'
    }, _defineProperty(_ref, "photo", 'profile.png'), _defineProperty(_ref, "passwordRules", [function (v) {
      return !!v || 'Password is required';
    }, function (v) {
      return v && v.length >= 5 || 'Name must be greater than 5 characters';
    }]), _defineProperty(_ref, "nameRules", [function (v) {
      return !!v || 'This field is required';
    }, function (v) {
      return v && v.length >= 5 || 'Input must be greater than 2 characters';
    }]), _defineProperty(_ref, "email", ''), _defineProperty(_ref, "emailRules", [function (v) {
      return !!v || 'E-mail is required';
    }, function (v) {
      return /.+@.+\..+/.test(v) || 'E-mail must be valid';
    }]), _defineProperty(_ref, "checkbox", false), _ref;
  },
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
    },
    saveItem: function saveItem() {
      var val = this.$refs.form.validate();
      /* this is used for both creating and updating API records
       the default method is POST for creating a new item */

      if (!val) {
        return;
      } else {
        var method = "post";
        var url = 'api/register'; // airtable API needs the data to be placed in fields object

        var data = JSON.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          type: this.type,
          photo: this.photo
        }); // save the record

        axios[method](url, data, {
          headers: {
            //Authorization: "Bearer " + apiToken,
            "Content-Type": "application/json"
          }
        }).then(function (response) {
          if (response.data) {
            console.log(response.data);
          }
        });
      } //esle

    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c& ***!
  \**********************************************************************************************************************************************************************************************************/
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
          staticClass: " pa-5 mx-auto",
          attrs: { elevation: "6", outlined: "", shaped: "", width: "500" }
        },
        [
          _c("v-card-text", { staticClass: "mb-0 " }, [
            _c("p", { staticClass: "text-h6 text--primary text-center " }, [
              _vm._v("\r\n     Create Account\r\n      ")
            ])
          ]),
          _vm._v(" "),
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
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.setDisable,
                    expression: "setDisable"
                  }
                ],
                attrs: { label: "Type" },
                model: {
                  value: _vm.type,
                  callback: function($$v) {
                    _vm.type = $$v
                  },
                  expression: "type"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.setDisable,
                    expression: "setDisable"
                  }
                ],
                attrs: { label: "Photo" },
                model: {
                  value: _vm.photo,
                  callback: function($$v) {
                    _vm.photo = $$v
                  },
                  expression: "photo"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: _vm.nameRules,
                  label: "First Name",
                  required: ""
                },
                model: {
                  value: _vm.first_name,
                  callback: function($$v) {
                    _vm.first_name = $$v
                  },
                  expression: "first_name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: _vm.nameRules,
                  label: "Last Name",
                  required: ""
                },
                model: {
                  value: _vm.last_name,
                  callback: function($$v) {
                    _vm.last_name = $$v
                  },
                  expression: "last_name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { rules: _vm.emailRules, label: "E-mail", required: "" },
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
                attrs: {
                  rules: [
                    function(v) {
                      return !!v || "You must agree to continue!"
                    }
                  ],
                  label: "Do you agree?",
                  required: ""
                },
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
                  on: { click: _vm.saveItem }
                },
                [_vm._v("\r\n      Register\r\n    ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text--primary mt-3" }, [
            _c(
              "p",
              [
                _vm._v("   Already have an account ?"),
                _c(
                  "router-link",
                  {
                    attrs: { to: "/Login" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.Registration($event)
                      }
                    }
                  },
                  [_vm._v(" Sign in")]
                ),
                _vm._v(" | Go Home  ")
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

/***/ "./resources/js/pages/Registration.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Registration.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=4308e37c& */ "./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/pages/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=4308e37c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);