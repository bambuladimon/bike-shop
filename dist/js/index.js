const   hamburgerBtn = document.querySelector('.header__hamburger-btn'),
        navList = document.querySelector('.header__nav');

hamburgerBtn.addEventListener('click', e => {
    if (hamburgerBtn.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navList.classList.add('ds-none');
    } else {
        hamburgerBtn.classList.add('active');
        navList.classList.remove('ds-none');
    }
})