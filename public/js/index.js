const body = document.querySelector('body');
const btnOpen = document.getElementById('btn-open');
const closeMenu = document.querySelectorAll('[data-close="menu"]');

btnOpen.addEventListener('click', e => {
    body.classList.add('open-menu');
});

closeMenu.forEach( el => {
    el.addEventListener('click', e => {
        body.classList.remove('open-menu');
    });
});