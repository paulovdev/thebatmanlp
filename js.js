const bars = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('li');

bars.addEventListener('click', openMenu);

menuItem.forEach((e) => {
    e.onclick = openMenu;
});

function openMenu() {
    bars.classList.toggle('open');
    menu.classList.toggle('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: true
});

ScrollReveal().reveal('nav', { delay: 200 });
ScrollReveal().reveal('body');
