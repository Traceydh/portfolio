//navigation bar 
const navigationBar = document.querySelector('.nav-large');
const hamburger = document.querySelector('.nav-toggle');
const navBackground = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    console.log('click');
    navBackground.classList.toggle('active');
    navigationBar.classList.toggle('active');
})

const animateFadeElements = document.querySelectorAll('.animate-fade');
window.onload = function() {
    animateFadeElements.forEach(element => element.classList.add('fade-in'));
}

//Particles 
const count = 30;
for (let i = 0; i < count; i ++) {
    createParticle()
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const container = document.querySelector('.animation-container');
    container.append(particle);
}