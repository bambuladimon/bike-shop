export default class PopUp {
    constructor(closeBtn, overlay) {
        this.closeBtn = document.querySelector(closeBtn);
        this.overlay = document.querySelector(overlay);
        this.overlayClick = this.overlayClick.bind(this);
        this.closeBtnClick = this.closeBtnClick.bind(this);
    }

    overlayClick(e) {
        if (e.target.classList.contains('modal')) {
            this.overlay.classList.add('d-none');
            document.body.classList.remove('overflow-hidden');
            localStorage.setItem('popupClosed', true);
        }
    }

    closeBtnClick() {
        this.overlay.classList.add('d-none');
        document.body.classList.remove('overflow-hidden');
        localStorage.setItem('popupClosed', true);
    }

    checkPopup() {
        if (localStorage.getItem('popupClosed')) {
            this.overlay.classList.add('d-none');
        }
        else {
            document.body.classList.add('overflow-hidden');
        }
    }


    init() {
        this.closeBtn.addEventListener("click", this.closeBtnClick);
        this.overlay.addEventListener("click", this.overlayClick);
        document.addEventListener('load', this.checkPopup());
    }
}