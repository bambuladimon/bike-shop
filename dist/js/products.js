export default class Products {
    constructor(tab, allTabs) {
        this.tab = document.querySelector(tab);
        this.tabs = document.querySelectorAll(allTabs);
        this.tabToggle = this.tabToggle.bind(this);
    }

    tabToggle(e) {
        this.currentTab = e.target.dataset.content;
        this.tabs.forEach(element => {
            if (element.classList.contains('display-block')) {
                element.classList.remove('display-block');
            }
        })
        document.querySelector(`.tabcontent-${this.currentTab}`).classList.add('display-block');
    }

    init() {
        this.tab.addEventListener("click", this.tabToggle);
    }
}