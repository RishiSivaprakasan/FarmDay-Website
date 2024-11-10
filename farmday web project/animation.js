document.addEventListener("DOMContentLoaded", function () {
    // Function to handle intersection observer and animation triggering
    function observeCards(cardSelector, animationReset = false) {
        const cards = document.querySelectorAll(cardSelector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (animationReset) {
                        // Force reflow to reset animation
                        entry.target.style.animation = 'none';
                        void entry.target.offsetWidth; // Trigger reflow
                        entry.target.classList.add('active'); // Trigger animation
                        entry.target.style.animation = ''; // Restore animation
                    } else {
                        entry.target.classList.add('active'); // Add active class for non-reset animations
                    }
                } else {
                    entry.target.classList.remove('active'); // Remove active class
                    if (animationReset) {
                        entry.target.style.animation = 'none'; // Reset animation if needed
                    }
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

        cards.forEach(card => {
            observer.observe(card); // Observe each card
        });
    }

    // Observe feature cards with animation reset logic
    observeCards('.feature-card', true);

    // Observe contact items with animation reset logic
    observeCards('.contact-item', true);

    // Observe the contact image with animation reset logic
    observeCards('.contact-img img', true);

    // Observe social container with animation reset logic
    observeCards('.social-container', true);

    // Observe the contact container separately if you want the entire section to animate in
    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Add active class to the contact container
                } else {
                    entry.target.classList.remove('active'); // Remove active class when out of view
                }
            });
        }, { threshold: 0.1 });

        observer.observe(contactContainer); // Observe the contact container
    }

    // Observe the "about" section and its elements for animation reset
    function observeAboutSection() {
        const aboutElements = document.querySelectorAll('.about, .about-container, .about-content, .about-image, .about-image img');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reset and re-trigger animation
                    entry.target.style.animation = 'none'; // Disable the current animation
                    void entry.target.offsetWidth; // Trigger reflow to reset animation
                    entry.target.style.animation = ''; // Enable the animation again
                    entry.target.classList.add('active'); // Add the active class for additional CSS effects if necessary
                } else {
                    entry.target.classList.remove('active'); // Remove active class when out of view
                    entry.target.style.animation = 'none'; // Reset the animation
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the about section is visible

        aboutElements.forEach(element => {
            observer.observe(element); // Observe each element in the about section
        });
    }

    // Call observe function for "about" section
    observeAboutSection();
});
