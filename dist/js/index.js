const hamburgerBtn = document.querySelector('.js-header__hamburger');
const navList = document.querySelector('.js-header__nav');
const formSubmit = document.querySelector('.js-form__submit');
const tab = document.querySelector('.js-product__tab');

hamburgerBtn.addEventListener('click', e => {
    hamburgerBtn.classList.toggle('active');
    navList.classList.toggle('ds-none');
});

formSubmit.addEventListener('click', validate);


//переключення між вкладками
tab.addEventListener('click', e => {
    let currentTab = e.target.dataset.content;
    let tabs = document.querySelectorAll('.product__cards');
    
    tabs.forEach(element => {
        if (element.classList.contains('display-block')) {
            element.classList.remove('display-block');
        }
    });
    document.querySelector(`.tabcontent-${currentTab}`).classList.add('display-block');
})

// валідація емайла
function validateEmail(email) {
    const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regMail.test(String(email).toLowerCase());
  }
//валілація імені і прізвища
function valideteFullname(name, surname) {
    const regFullmaane = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    let nameRes = regFullmaane.test(String(name).toLowerCase());
    let surnameRes = regFullmaane.test(String(surname).toLowerCase())

    return nameRes && surnameRes ? true : false;
}

  // валідація форми
  function validate(e) {
    e.preventDefault();
    const email = document.querySelector(".form__email").value;
    const name = document.querySelector(".form__fname").value;
    const surname = document.querySelector(".form__lname").value

    const emailError = document.querySelector(".js-email-error");
    const fullNameError = document.querySelector(".js-fгllname-error");

    emailError.innerText = !validateEmail(email) ? 'Ви ввели не вірний e-mail аддрес!' : '';
    fullNameError.innerText = !valideteFullname(name, surname) ? 'Ви ввели не вірно ім\'я або прізвище!' : '';
  }