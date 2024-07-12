document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});