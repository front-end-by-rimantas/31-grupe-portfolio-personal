const mainMenu = document.querySelector('#main-menu');
const mobileBody = document.querySelector('.mobile-body-background');

function menuToggle() {
    mainMenu.classList.toggle('mobile-nav');
    mobileBody.classList.toggle('open');
}

function menuClose() {
    mainMenu.classList.remove('mobile-nav');
    mobileBody.classList.remove('open');
}
