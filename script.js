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