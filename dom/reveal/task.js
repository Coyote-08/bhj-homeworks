const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const coords = el.getBoundingClientRect();
        if (coords.top < window.innerHeight) {
            el.classList.add('reveal_active');
        }
    });
});