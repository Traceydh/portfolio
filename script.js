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
const count = 20;
const colors = ['blue', 'lightblue', 'white'];
for (let i = 0; i < count; i ++) {
    createParticle()
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const container = document.querySelector('.animation-container');
    container.append(particle);
    //random color particle 
    particle.style.backgroundColor = colors[Math.floor(gsap.utils.random(0, 3))];
    //random height of particle 
    const height= gsap.utils.random(25, 30); 
    const width = gsap.utils.random(0, 15);
    gsap.set(particle, {
        y: `${height}vh`,
        x: `${width}vw`,
        //random size 
        scale: gsap.utils.random(0.5, 1)
    })
    
}

// const timeline = gsap.timeline({defaults: {duration: 2}})
// timeline
//     .to('.particle', {x: '80vw'})
//     .to('.particle', {y: '30vh'})
//     .to('.particle', {x:'0'})
//     .to('.particle', {y:'0'})

