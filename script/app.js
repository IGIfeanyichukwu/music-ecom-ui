const navBtn = document.querySelector('.nav-btn button');

const navBtnIcon = document.querySelector('.nav-btn button i');

const nav = document.querySelector('.header nav');


navBtn.addEventListener('click', handleMobileNav);

let navDisplay = nav.style.display;

function handleMobileNav() {

    nav.classList.toggle('display-nav');
    
    if(nav.classList.contains('display-nav')) {
        navBtnIcon.classList.remove('fa-bars');
        navBtnIcon.classList.add('fa-times');
    } else {
        navBtnIcon.classList.add('fa-bars');
        navBtnIcon.classList.remove('fa-times');
    }
    
}