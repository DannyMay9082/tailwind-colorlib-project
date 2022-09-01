AOS.init({
    offset: 200,
    duration: 800,
    delay: 100,
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

