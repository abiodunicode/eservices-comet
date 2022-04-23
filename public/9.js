(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//import Enquiries from '@/components/SideBar/Enquiries.vue';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    name: "Home",
    "table-ops": __webpack_require__(/*! ../components/Dashboard/TableOps.vue */ "./resources/js/components/Dashboard/TableOps.vue")["default"],
    "table-schedu": __webpack_require__(/*! ../components//Dashboard/TableVesSche.vue */ "./resources/js/components/Dashboard/TableVesSche.vue")["default"],
    "table-ad": __webpack_require__(/*! ../components//Dashboard/VesselAD.vue */ "./resources/js/components/Dashboard/VesselAD.vue")["default"]
  },
  data: function data() {
    return {
      user: null,
      overlay: true,
      "return": {
        isDark: false,
        iconIndex: 0,
        icons: ["mdi-weather-sunny", "mdi-weather-night"]
      },
      drawer: null,
      items: [{
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        to: "/"
      }, {
        title: "Login For Detials",
        icon: "mdi-lock",
        to: "/Login"
      }]
    };
  },
  computed: {
    icon: function icon() {
      return this.icons[this.iconIndex];
    }
  },
  methods: {
    toggleIsDark: function toggleIsDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isDark = !this.isDark;
      this.iconIndex === this.icons.length - 1 ? this.iconIndex = 0 : this.iconIndex++;
    },
    changeIcon: function changeIcon() {}
  },
  mounted: function mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    this.overlay = false; //   axios.get('api/user').then((res)=>{
    //     this.user = res.data
    //   })
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \**************************************************************************************************************************************************************************************************/
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
    [
      _c("v-app", { attrs: { id: "inspire" } }, [
        !["Login", "Registration", "Tests"].includes(_vm.$route.name)
          ? _c(
              "div",
              [
                _c(
                  "v-navigation-drawer",
                  {
                    attrs: { app: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "append",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                { staticClass: "pa-2" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/Login", exact: "" } },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { block: "" } },
                                        [
                                          _c("v-icon", [_vm._v("mdi-login")]),
                                          _vm._v(
                                            "\n                Login\n              "
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      3928882402
                    ),
                    model: {
                      value: _vm.drawer,
                      callback: function($$v) {
                        _vm.drawer = $$v
                      },
                      expression: "drawer"
                    }
                  },
                  [
                    _c(
                      "v-list-item",
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-img", {
                              attrs: {
                                "lazy-src":
                                  "https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png",
                                height: "40",
                                width: "250",
                                contain: "",
                                src:
                                  "https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-list",
                      { attrs: { dense: "", nav: "" } },
                      _vm._l(_vm.items, function(item) {
                        return _c(
                          "v-list-item",
                          { key: item.title, attrs: { to: item.to, link: "" } },
                          [
                            _c(
                              "v-list-item-icon",
                              [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(item.title))
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-app-bar",
                  {
                    attrs: {
                      app: "",
                      prominent: "",
                      color: "primary",
                      dark: "",
                      src:
                        "https://www.container-xchange.com/wp-content/uploads/2019/07/container-terminal-classification-2048x1055.jpg"
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "img",
                          fn: function(ref) {
                            var props = ref.props
                            return [
                              _c(
                                "v-img",
                                _vm._b(
                                  {
                                    attrs: {
                                      gradient:
                                        "to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                                    }
                                  },
                                  "v-img",
                                  props,
                                  false
                                )
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      3283470206
                    )
                  },
                  [
                    _vm._v(" "),
                    _c("v-app-bar-nav-icon", {
                      on: {
                        click: function($event) {
                          _vm.drawer = !_vm.drawer
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("v-app-bar-title", { staticClass: "mt-6" }, [
                      _c("div", { staticClass: "mt-12" }, [_vm._v("Dashboard")])
                    ]),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      { attrs: { icon: "" } },
                      [
                        _c("v-icon", { on: { click: _vm.toggleIsDark } }, [
                          _vm._v("mdi-weather-night ")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-menu", {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-width": 150,
                        "max-width": "300",
                        "offset-x": ""
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c(
            "div",
            [
              _c("table-ops"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("table-ad"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("table-schedu")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);