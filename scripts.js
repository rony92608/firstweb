document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const cancelBtn = document.getElementById('cancel-btn');

    // Show mobile nav
    hamburger.addEventListener('click', function () {
        mobileNav.classList.add('active');
    });

    // Hide mobile nav
    cancelBtn.addEventListener('click', function () {
        mobileNav.classList.remove('active');
    });
});
