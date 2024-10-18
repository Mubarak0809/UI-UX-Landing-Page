const watchImages = document.querySelectorAll('.watch-carousel img');
const colorSelectors = document.querySelectorAll('.colors span');

// Add click event to color selectors
colorSelectors.forEach((color, index) => {
    color.addEventListener('click', () => {
        // Remove 'active' class from all selectors and images
        colorSelectors.forEach(c => c.classList.remove('active'));
        watchImages.forEach(img => img.classList.remove('active'));

        // Activate the selected image and color
        color.classList.add('active');
        watchImages[index].classList.add('active');
    });
});

// Toggle Navbar Menu on Small Screens
const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-items');

bars.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});
