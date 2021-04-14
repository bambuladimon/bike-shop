const   hamburgerBtn = document.querySelector('.header__hamburger-btn'),
        navList = document.querySelector('.header__nav');
        formSubmit = document.querySelector('.form__submit');

hamburgerBtn.addEventListener('click', e => {
    if (hamburgerBtn.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navList.classList.add('ds-none');
    } else {
        hamburgerBtn.classList.add('active');
        navList.classList.remove('ds-none');
    }
});

formSubmit.addEventListener('click', validate);

// валідація емайла
function validateEmail(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  // валідація форми
  function validate(e) {
    e.preventDefault();
    let email = document.querySelector(".form__email").value;
    let emailError = document.querySelector(".email-error");

    if (!validateEmail(email)) {
        emailError.innerText = 'Ви ввели не вірний e-mail аддрес!';
    } 
    else {
        emailError.innerText = '';
    }
    
    return false;
  }