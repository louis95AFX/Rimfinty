document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Dynamic Hover Effect on Collection Cards
    const cards = document.querySelectorAll('.collection-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Get card dimensions and position
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Subtle parallax/reflective effect based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees tilt
            const rotateY = ((x - centerX) / centerX) * -5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset transform smoothly
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Note: Advanced features like the 3D visualizer, parallax scrolling,
    // and complex shaders require a dedicated 3D library (like Three.js) and extensive code.
});