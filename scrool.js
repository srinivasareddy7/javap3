const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
            section.style.opacity = 1;
        } else {
            section.style.opacity = 0.5;
        }
    });
});
