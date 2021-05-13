"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Products = /*#__PURE__*/function () {
  function Products(tab, allTabs) {
    _classCallCheck(this, Products);

    this.tab = document.querySelector(tab);
    this.tabs = document.querySelectorAll(allTabs);
    this.tabToggle = this.tabToggle.bind(this);
  }

  _createClass(Products, [{
    key: "tabToggle",
    value: function tabToggle(e) {
      this.currentTab = e.target.dataset.content;
      this.tabs.forEach(function (element) {
        if (element.classList.contains('display-block')) {
          element.classList.remove('display-block');
        }
      });
      document.querySelector(".tabcontent-".concat(this.currentTab)).classList.add('display-block');
    }
  }, {
    key: "init",
    value: function init() {
      this.tab.addEventListener("click", this.tabToggle);
    }
  }]);

  return Products;
}();

exports["default"] = Products;