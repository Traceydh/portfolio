//navigation bar hamburger 
const navigationBar = document.querySelector('.nav-large');
const hamburger = document.querySelector('.nav-toggle');
const navBackground = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    navBackground.classList.toggle('active');
    navigationBar.classList.toggle('active');
})

const links = document.querySelectorAll('.fade-in-link'); 
links.forEach(link => {
    link.addEventListener('click', () => {
        navBackground.classList.toggle('active');
        navigationBar.classList.toggle('active');
    })
})

//navigation bar fade in 
gsap.from('.fade-in-link', {duration: 1, opacity: 0, delay: 1, stagger: 0.3})

//hero text 
const animateFadeElements = document.querySelectorAll('.animate-fade');
window.onload = function() {
    animateFadeElements.forEach(element => element.classList.add('fade-in'));
}

//Particles for background 
const count = 30;
const particleBackgroundColors = ['#4fc0e8', 'lightblue', 'white'];
for (let i = 0; i < count; i ++) {
    const container = document.querySelector('.animation-container');
    //random particle position  
    const heightStart = gsap.utils.random(10, 50); 
    const widthStart = gsap.utils.random(0, 30);
    const heightEnd = gsap.utils.random(0, 40);
    const widthEnd = gsap.utils.random(80, 90); 
    createParticle(container, heightStart, widthStart, heightEnd, widthEnd)
}

//Particles for heading 
const titles = document.querySelectorAll('h2');
titles.forEach(title => {
    for (let j = 0; j < 10; j ++) {
        const heightStart = gsap.utils.random(0, 0); 
        const widthStart = gsap.utils.random(40, 45);
        const heightEnd = gsap.utils.random(1, 1);
        let widthEnd = gsap.utils.random(45, 60); 
        createParticle(title, heightStart, widthStart, heightEnd, widthEnd)
    }
})

//particle function
function createParticle(container, heightStart, widthStart, heightEnd, widthEnd) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    //random color particle 
    particle.style.backgroundColor = particleBackgroundColors[Math.floor(gsap.utils.random(0, 3))];
    gsap.set(particle, {
        y: `${heightStart}vh`,
        x: `${widthStart}vw`,
        //random particle size 
        scale: gsap.utils.random(0.5, 1)
    })
    container.append(particle);
    animateParticle(particle, heightStart, widthStart, heightEnd, widthEnd);
}

function animateParticle(particle, heightStart, widthStart, heightEnd, widthEnd) {
    const timelineTrajectory = gsap.timeline({
        repeat: -1,
        defaults: {
            //random speed 
            duration: gsap.utils.random(3, 5), 
            ease: "none"
        }})
    //trajectory of particle     
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

//fade page in when user scrolls 
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.toggle("fade-in");
            observer.unobserve(entry.target);
        } else {
            return;
        }
    })
}, {
    threshold: 0.2
})

sections.forEach(section => {
    observer.observe(section)
})

// Animate articles in when user scrolls into viewport 
gsap.from('.article', {
    scrollTrigger: ".article",
    duration: 1, 
    x: '-200%', 
    delay: 1, 
    stagger: 0.5
})

//animate about me section 
gsap.from('.slide-left-about', {
    scrollTrigger: ".slide-left-about",
    duration: 1, 
    x: '250%', 
    delay: 1
})

gsap.from('.slide-right-about', {
    scrollTrigger: ".slide-right-about",
    duration: 1, 
    x: '-250%', 
    delay: 1.5
})

//animate contact section 
gsap.from('form', {
    scrollTrigger: 'form',
    duration: 1, 
    x: '200%'
})

//animate project section 
gsap.from('.project-card', {
    scrollTrigger: ".project-card",
    duration: 1, 
    x: '400%', 
    delay: 1, 
    stagger: 0.5
})
