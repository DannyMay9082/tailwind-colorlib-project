AOS.init({
    offset: 200,
    duration: 800,
    delay: 100,
    once: true,
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 700,
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const checkbox = document.querySelector('input[name=checkbox]');
const animation = [...document.querySelectorAll('.animation-toggle')];
checkbox.addEventListener("change", () => {
    if (checkbox.checked) animation.map(e => e.classList.add('yearly'));
    else animation.map(e => e.classList.remove('yearly'));
})

const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeButton = document.querySelector('.close-button');

hamburgerButton.addEventListener('click', (e) => {
    hamburgerMenu.classList.add("show-menu");
    hamburgerMenu.classList.remove("invisible");
    hamburgerMenu.classList.remove("hidden");
})


closeButton.addEventListener('click', (e) => {
    e.preventDefault()
    hamburgerMenu.classList.remove("show-menu");
    hamburgerMenu.classList.add("invisible");
    hamburgerMenu.classList.add("hidden");
})
