export default class Form {
    constructor(email, firstName, lastName) {
        this.email = document.querySelector(email);
        this.fname = document.querySelector(firstName);
        this.lname = document.querySelector(lastName);
        this.validate = this.validate.bind(this);
    }

    validateEmail(email) {
        this.regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return this.regMail.test(String(email).toLowerCase());
    }

    valideteFullname(name, surname) {
        this.regFullmaane = /^[a-zA-Zа-яёіА-ЯІЁ]+$/u;
        this.nameRes = this.regFullmaane.test(String(name).toLowerCase());
        this.surnameRes = this.regFullmaane.test(String(surname).toLowerCase())
        return this.nameRes && this.surnameRes ? true : false;
    }

    validate(e) {
        e.preventDefault();
        document.querySelector(".js-email-error").innerText = !this.validateEmail(this.email.value) ? 'Ви ввели не вірний e-mail аддрес!' : '';
        document.querySelector(".js-fгllname-error").innerText = !this.valideteFullname(this.fname.value, this.lname.value) ? 'Ви ввели не вірно ім\'я або прізвище!' : '';
    }

    init() {
        document.querySelector('.js-form__submit').addEventListener('click', this.validate)
    }
}