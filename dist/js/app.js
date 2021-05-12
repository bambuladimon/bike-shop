import Slider from './slider.js';
import Header from './header.js';
import Products from './products.js';
import Form from './form.js';


const mainBanner = new Slider({
    container: '.main-banner__items',
    items: 1,
    loop: true,
    controlsContainer: "#customize-controls",
    nav: true,
    navContainer: '.mainscreen__paginations',
    autoplay: true,
    autoplayTimeout: 3000
});

const clasikBikeSlider = new Slider({
    container: '.tabcontent-classik',
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
        controls: true,
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

const kidsBikeSlider = new Slider({
    container: '.tabcontent-kids',
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
        controls: true,
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

const sportBikeSlider = new Slider({
    container: '.tabcontent-sport',
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
        controls: true,
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
})

const menuBtn = new Header('.js-header__hamburger', '.js-header__nav');

menuBtn.init();

const products = new Products('.js-product__tab', '.product__cards');

products.init();

const form = new Form(".form__email", ".form__fname", ".form__lname");

form.init();