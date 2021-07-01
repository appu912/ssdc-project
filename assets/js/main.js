const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu');
    })
}


if(navClose) {
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click' , linkAction));

// accordian Skills

const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    Array.from(skillsContent).forEach(skill => {
        skill.className = 'skills-content skills-close';
    })

    if(itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }
}

skillsHeader.forEach(e => {
    e.addEventListener('click' , toggleSkills);
})


// activities

const modelViews = document.querySelectorAll('.services-model');
const modelBtns = document.querySelectorAll('.services-button');
const modelCloses = document.querySelectorAll('.services-model-close');

let model = function(modelClick) {
    modelViews[modelClick].classList.add('active-model');
}

modelBtns.forEach((modelBtn , i) => {
    modelBtn.addEventListener('click' , () => {
        model(i);
    })
})

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click' , () => {
        modelViews.forEach((modelView) => {
            modelView.classList.remove('active-model');
        })
    })
})

/* members */

let swiperMembers = new Swiper('.member-container' , {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/* scrolling */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    }) 
}

window.addEventListener('scroll' , scrollActive);

/* background header */

function scrollHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll' , scrollHeader);

/* scroll Up */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll' , scrollUp);

/* theme change */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme' , getCurrentTheme());
    localStorage.setItem('selected-icon' , getCurrentIcon());
})

