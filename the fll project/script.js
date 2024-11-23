// Menu toggle for mobile view
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change icon on toggle
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the section
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed header height
            behavior: 'smooth'
        });

        // Close the menu after navigation
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});