/*import anime from '../node_modules/animejs/lib/anime.es.js';*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
console.log("Found Stuff");
hiddenElements.forEach((el) => observer.observe(el));
