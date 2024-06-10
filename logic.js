document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});
function redirectToPage(event) {
    event.preventDefault();
    window.location.href = "https://proxmaqd.github.io/contact/";
}


