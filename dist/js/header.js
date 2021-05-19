export default class Header {
    constructor(hamburgerBtn, navList) {
        this.hamburgerBtn = document.querySelector(hamburgerBtn);
        this.navList = document.querySelector(navList);
        this.menuTogl = this.menuTogl.bind(this);
    }

    menuTogl() {
        this.hamburgerBtn.classList.toggle('active');
        this.navList.classList.toggle('ds-none');
    }

    init() {
        this.hamburgerBtn.addEventListener("click", this.menuTogl);
    }
}