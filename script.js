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
const count = 40;
const particleBackgroundColors = ['#4fc0e8', 'lightblue', 'white'];
for (let i = 0; i < count; i ++) {
    createParticle()
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const container = document.querySelector('.animation-container');
    //random color particle 
    particle.style.backgroundColor = particleBackgroundColors[Math.floor(gsap.utils.random(0, 3))];
    //random particle position  
    const heightStart = gsap.utils.random(10, 15); 
    const widthStart = gsap.utils.random(0, 30);
    gsap.set(particle, {
        y: `${heightStart}vh`,
        x: `${widthStart}vw`,
        //random particle size 
        scale: gsap.utils.random(0.5, 1)
    })
    container.append(particle);
    animateParticle(particle, heightStart, widthStart);
}

function animateParticle(particle, heightStart, widthStart) {
    const timelineTrajectory = gsap.timeline({
        repeat: -1,
        defaults: {
            //random speed 
            duration: gsap.utils.random(3, 5), 
            ease: "none"
        }})
    //trajectory of particle     
    const heightEnd = gsap.utils.random(0, 20);
    const widthEnd = gsap.utils.random(80, 90); 
    timelineTrajectory
    .to(particle, {x: `${widthEnd}vw`})
    .to(particle, {y: `${heightEnd}vh`, duration: gsap.utils.random(1, 2)})
    .to(particle, {x: `${widthStart}vw`})
    .to(particle, {y: `${heightStart}vh`, duration: gsap.utils.random(1, 2)})


    const timelineOpacity = gsap.timeline({
        defaults: {
            //random speed 
            duration: gsap.utils.random(2, 3), 
            delay: gsap.utils.random(0, 1)
        }})
        timelineOpacity
        .to(particle, {opacity: 0, duration: 0.5, repeat: 1})
        .to(particle, {opacity: 0.7, repeat: -1})
}