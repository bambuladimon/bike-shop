"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(email, firstName, lastName) {
    _classCallCheck(this, Form);

    this.email = document.querySelector(email);
    this.fname = document.querySelector(firstName);
    this.lname = document.querySelector(lastName);
    this.validate = this.validate.bind(this);
  }

  _createClass(Form, [{
    key: "validateEmail",
    value: function validateEmail(email) {
      this.regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return this.regMail.test(String(email).toLowerCase());
    }
  }, {
    key: "valideteFullname",
    value: function valideteFullname(name, surname) {
      this.regFullmaane = /^[A-Za-z\u0401\u0406\u0410-\u044F\u0451\u0456]+$/;
      this.nameRes = this.regFullmaane.test(String(name).toLowerCase());
      this.surnameRes = this.regFullmaane.test(String(surname).toLowerCase());
      return this.nameRes && this.surnameRes ? true : false;
    }
  }, {
    key: "validate",
    value: function validate(e) {
      e.preventDefault();
      document.querySelector(".js-email-error").innerText = !this.validateEmail(this.email.value) ? 'Ви ввели не вірний e-mail аддрес!' : '';
      document.querySelector(".js-fгllname-error").innerText = !this.valideteFullname(this.fname.value, this.lname.value) ? 'Ви ввели не вірно ім\'я або прізвище!' : '';
    }
  }, {
    key: "init",
    value: function init() {
      document.querySelector('.js-form__submit').addEventListener('click', this.validate);
    }
  }]);

  return Form;
}();

exports["default"] = Form;