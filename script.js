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
const count = 15;
const colors = ['red', 'purple', 'pink'];
for (let i = 0; i < count; i ++) {
    createParticle()
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const container = document.querySelector('.animation-container');
    container.append(particle);
    particle.style.backgroundColor = colors[Math.floor(gsap.utils.random(0, 3))];
}

const timeline = gsap.timeline({defaults: {duration: 2}})
timeline
    .to('.particle', {x: '80vw'})
    .to('.particle', {y: '30vh'})
    .to('.particle', {x:'0'})
    .to('.particle', {y:'0'})

