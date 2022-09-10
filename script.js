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
const particleBackgroundColors = ['#4fc0e8', 'lightblue', 'white'];
for (let i = 0; i < count; i ++) {
    createParticle()
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const container = document.querySelector('.animation-container');
    container.append(particle);
    //random color particle 
    particle.style.backgroundColor = particleBackgroundColors[Math.floor(gsap.utils.random(0, 3))];
    //random height location of particle 
    const heightStart = gsap.utils.random(20, 25); 
    const widthStart = gsap.utils.random(0, 15);
    gsap.set(particle, {
        y: `${heightStart}vh`,
        x: `${widthStart}vw`,
        //random size 
        scale: gsap.utils.random(0.5, 1)
    })
    animateParticle(particle, heightStart, widthStart);
}

function animateParticle(particle, heightStart, widthStart) {
    particle.classList.add('particle-fade-in');
    const timeline = gsap.timeline({
        repeat: -1,
        defaults: {
            //random speed 
            duration: gsap.utils.random(3, 5), 
            ease: "none",
        }})
        
    //trajectory of particle     
    const heightEnd = gsap.utils.random(40, 45);
    const widthEnd = gsap.utils.random(80, 90); 
    timeline
    .to(particle, {x: `${widthEnd}vw`})
    .to(particle, {y: `${heightEnd}vh`, duration: gsap.utils.random(1, 2)})
    .to(particle, {x: `${widthStart}vw`})
    .to(particle, {y: `${heightStart}vh`, duration: gsap.utils.random(1, 2)})

}
