//navigation bar 
const navigationBar = document.querySelector('.nav-large');
const hamburger = document.querySelector('.nav-toggle');
const navBackground = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    console.log('click');
    navBackground.classList.toggle('active');
    navigationBar.classList.toggle('active');
})

//hero text fade onto screen 
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.toggle("fade-in");
//             observer.unobserve(entry.target);
//         } else {
//             return
//         }
//     })
// }, {
//     threshold: 0.5
// })

// const animateFadeElements = document.querySelectorAll('.animate-fade');
// animateFadeElements.forEach( element => {
//     observer.observe(element)
// })

const animateFadeElements = document.querySelectorAll('.animate-fade');
window.onload = function() {
    animateFadeElements.forEach(element => element.classList.add('fade-in'));
}

//fireflies
const FIREFLIES = 30;
const maxHeight = 1000;
const maxWidth = 1600;
const fireFlyBody = document.querySelector('.stars');

const random = (min, max) => {
    return Math.floor(Math.random() * ( max - min ) + min);
}
for(var i = 0; i < FIREFLIES; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'firefly');
    fireFlyBody.append(div);
}
var fireflies = document.querySelectorAll('.firefly');
for(var i = 0; i < FIREFLIES; i++) {
    let ix = random(-10, maxWidth+10);
    let fx = random(-10, maxWidth+10);
    
    let iy = random(-10, maxHeight+10);
    let fy = random(-10, maxHeight+10);

    gsap.fromTo(fireflies[i], {
        x: ix,
        y: iy,
    }, {
        x: fx,
        y: fy,
        duration: random(5, 15),
        // ease: "slow (0.7, 0.7, false)",
        ease: "rough ({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp:false})",
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(fireflies[i], {
        boxShadow: "0 0 0 0px rgba(154, 205, 50, 0)"
    }, {
        boxShadow: "0 0 0 3px rgba(154, 205, 50, 0.4)",
        duration: random(2, 4),
        ease: "slow (0.7, 0.7, false)",
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(fireflies[i], {
        opacity: 0,
    }, {
        duration: random(1, 5),
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
    })
};