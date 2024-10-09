const logoColor = document.getElementById('logo')
const menuIcon = document.getElementById('menu-icon');
const navItems = document.querySelector('.nav-items');


// on click eventlistener for showing menu items on medium / small screens
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navItems.classList.toggle('active')
});

// on click event to change the color of the Logo

logoColor.addEventListener('click',()=>{
    logoColor.style.color = 'yellow'
});

// Use of scrollrevealjs.org for adding reveal effect to the page items

const revealer = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

revealer.reveal('.hero-text', {delay:200, origin: 'top'});
revealer.reveal('.hero img', {delay:450, origin: 'top'});
revealer.reveal('.icons', {delay:500, origin: 'left'});
revealer.reveal('.scroll-down', {delay:500, origin: 'right'});

