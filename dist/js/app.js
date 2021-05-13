"use strict";

var _slider = _interopRequireDefault(require("./slider.js"));

var _header = _interopRequireDefault(require("./header.js"));

var _products = _interopRequireDefault(require("./products.js"));

var _form = _interopRequireDefault(require("./form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mainBanner = new _slider["default"]({
  container: '.main-banner__items',
  items: 1,
  loop: true,
  controlsContainer: "#customize-controls",
  nav: true,
  navContainer: '.mainscreen__paginations',
  autoplay: true,
  autoplayTimeout: 3000
});
var clasikBikeSlider = new _slider["default"]({
  container: '.tabcontent-classik',
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      controls: true
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  },
  loop: true,
  nav: false,
  controlsContainer: ".product__controls"
});
var kidsBikeSlider = new _slider["default"]({
  container: '.tabcontent-kids',
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      controls: true
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  },
  loop: true,
  nav: false,
  controlsContainer: ".product__controls"
});
var sportBikeSlider = new _slider["default"]({
  container: '.tabcontent-sport',
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      controls: true
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  },
  loop: true,
  nav: false,
  controlsContainer: ".product__controls"
});
var menuBtn = new _header["default"]('.js-header__hamburger', '.js-header__nav');
menuBtn.init();
var products = new _products["default"]('.js-product__tab', '.product__cards');
products.init();
var form = new _form["default"](".form__email", ".form__fname", ".form__lname");
form.init();