(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admins copy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admins copy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var apiToken = "keyZIIVNiQPvozEWb";
var airTableApp = "appXJzFFs2zgj4X5C";
var airTableName = "Example";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      headers: [{
        text: 'Id',
        value: 'id'
      }, {
        text: 'Name',
        value: 'Name'
      }, {
        text: 'Details',
        value: 'details',
        sortable: false,
        width: "100"
      }, {
        text: 'URL',
        value: 'url',
        name: 'url',
        width: "180"
      }, {
        text: 'Action',
        value: 'actions',
        sortable: false
      }],
      items: [],
      dialog: false,
      editedItem: {}
    };
  },
  mounted: function mounted() {
    this.loadItems();
  },
  methods: {
    showEditDialog: function showEditDialog(item) {
      this.editedItem = item || {};
      this.dialog = !this.dialog;
    },
    loadItems: function loadItems() {
      var _this = this;

      this.items = [];
      axios.get("https://api.airtable.com/v0/".concat(airTableApp, "/").concat(airTableName), {
        headers: {
          Authorization: "Bearer " + apiToken
        }
      }).then(function (response) {
        _this.items = response.data.records.map(function (item) {
          return _objectSpread({
            id: item.id
          }, item.fields);
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveItem: function saveItem(item) {
      var _this2 = this;

      /* this is used for both creating and updating API records
       the default method is POST for creating a new item */
      var method = "post";
      var url = "https://api.airtable.com/v0/".concat(airTableApp, "/").concat(airTableName);
      var id = item.id; // airtable API needs the data to be placed in fields object

      var data = {
        fields: item
      };

      if (id) {
        // if the item has an id, we're updating an existing item
        method = "patch";
        url = "https://api.airtable.com/v0/".concat(airTableApp, "/").concat(airTableName, "/").concat(id); // must remove id from the data for airtable patch to work

        delete data.fields.id;
      } // save the record


      axios[method](url, data, {
        headers: {
          Authorization: "Bearer " + apiToken,
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        if (response.data && response.data.id) {
          console.log(response.data); // add new item to state

          _this2.editedItem.id = response.data.id;

          if (!id) {
            // add the new item to items state
            _this2.items.push(_this2.editedItem);
          }

          _this2.editedItem = {};
        }

        _this2.dialog = !_this2.dialog;
      });
    },
    deleteItem: function deleteItem(item) {
      //console.log('deleteItem', item)
      var id = item.id;
      var idx = this.items.findIndex(function (item) {
        return item.id === id;
      });

      if (confirm('Are you sure you want to delete this?')) {
        /* not really deleting in API for demo */

        /*
        axios.delete(`https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`,
            { headers: { 
                Authorization: "Bearer " + apiToken,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            this.items.splice(idx, 1)
        })*/
        this.items.splice(idx, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "v-app",
    { staticClass: "mt-0" },
    [
      _c(
        "v-content",
        { staticClass: "container align-center px-1" },
        [
          _c("h2", { staticClass: "font-weight-light mb-2" }, [
            _vm._v("\n               Vuetify CRUD Example\n           ")
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-data-table", {
                staticClass: "elevation-0",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  "mobile-breakpoint": "800"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "div",
                            { staticClass: "text-truncate" },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-2",
                                  attrs: { small: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.showEditDialog(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                           mdi-pencil\n                         "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  attrs: { small: "", color: "pink" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteItem(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                           mdi-delete\n                         "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      }
                    },
                    {
                      key: "item.details",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "text-truncate",
                              staticStyle: { width: "180px" }
                            },
                            [
                              _vm._v(
                                "\n                           " +
                                  _vm._s(item.Details) +
                                  "\n                       "
                              )
                            ]
                          )
                        ]
                      }
                    },
                    {
                      key: "item.url",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "text-truncate",
                              staticStyle: { width: "180px" }
                            },
                            [
                              _c(
                                "a",
                                { attrs: { href: item.URL, target: "_new" } },
                                [_vm._v(_vm._s(item.URL))]
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              }),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "div",
                            { staticClass: "d-flex" },
                            [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    staticClass: "ml-auto ma-3",
                                    attrs: { color: "primary", dark: "" }
                                  },
                                  on
                                ),
                                [
                                  _vm._v(
                                    "\n                           New \n                           "
                                  ),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-plus-circle-outline")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _vm.editedItem.id
                          ? _c("span", [
                              _vm._v("Edit " + _vm._s(_vm.editedItem.id))
                            ])
                          : _c("span", [_vm._v("Create")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Name" },
                                    model: {
                                      value: _vm.editedItem.Name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "Name", $$v)
                                      },
                                      expression: "editedItem.Name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Details" },
                                    model: {
                                      value: _vm.editedItem.Details,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "Details", $$v)
                                      },
                                      expression: "editedItem.Details"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "URL" },
                                    model: {
                                      value: _vm.editedItem.URL,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "URL", $$v)
                                      },
                                      expression: "editedItem.URL"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.showEditDialog()
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.saveItem(_vm.editedItem)
                                }
                              }
                            },
                            [_vm._v("Save")]
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
            ],
            1
          )
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

/***/ "./resources/js/pages/Admins copy.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Admins copy.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins copy.vue?vue&type=template&id=088ed8d0& */ "./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0&");
/* harmony import */ var _Admins_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins copy.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admins copy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admins_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admins copy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admins copy.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Admins copy.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Admins copy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admins copy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Admins copy.vue?vue&type=template&id=088ed8d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admins copy.vue?vue&type=template&id=088ed8d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_copy_vue_vue_type_template_id_088ed8d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);