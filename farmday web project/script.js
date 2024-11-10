// Language toggle functionality
const languageToggle = document.getElementById("language-toggle");
if (languageToggle) {
    languageToggle.addEventListener("click", function() {
        const isTamil = this.textContent === "தமிழ்";
        const elements = document.querySelectorAll("[data-en], [data-ta]");

        elements.forEach(element => {
            if (element.hasAttribute("data-en")) {
                element.textContent = isTamil ? element.getAttribute("data-ta") : element.getAttribute("data-en");
            }

            if (element.hasAttribute("placeholder")) {
                element.setAttribute("placeholder", isTamil ? element.getAttribute("data-ta") : element.getAttribute("data-en"));
            }
        });

        this.textContent = isTamil ? "English" : "தமிழ்";
    });
}

// Toggle menu functionality
function toggleMenu() {
    const navList = document.getElementById("navList");
    if (navList) {
        if (navList.classList.contains("hidden")) {
            navList.classList.remove("hidden");
            navList.classList.add("slide-from-logo");
        } else {
            navList.classList.add("hidden");
            navList.classList.remove("slide-from-logo");
        }
    }
}

// Ensure nav list is visible on page load
document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById("navList");
    if (navList) {
        navList.classList.remove("hidden");
        navList.classList.add("slide-from-logo");
    }
});

// Add event listener to logo for toggling menu
const logo = document.querySelector(".logo");
if (logo) {
    logo.addEventListener("click", toggleMenu);
}

// Scrolling effect for navbar
let lastScrollTop = 0;
const navbar = document.querySelector('header');

if (navbar) {
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-50px"; // Hide the navbar
        } else {
            navbar.style.top = "0px"; // Show the navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
}

// Blog Slider Functionality
const blogCards = document.querySelector('.blog-cards');
const cards = document.querySelectorAll('.blog-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (blogCards && cards.length > 0) {
    let index = 0;
    const totalCards = cards.length;

    // Function to slide the cards
    function slideTo(index) {
        const cardWidth = cards[0].offsetWidth + 20; // Card width + margin
        blogCards.style.transition = "transform 2s ease"; // Add transition for smooth sliding
        blogCards.style.transform = `translateX(${-index * cardWidth}px)`;

        // Remove the 'active' class from all cards
        cards.forEach(card => card.classList.remove('active'));

        // Add the 'active' class to the centered card
        cards[index].classList.add('active');
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(() => {
        index = (index + 1) % totalCards;
        slideTo(index);
    }, 3000);

    // Pause auto-slide on mouse hover
    blogCards.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    // Resume auto-slide on mouse leave
    blogCards.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            index = (index + 1) % totalCards;
            slideTo(index);
        }, 3000);
    });

    // Navigation arrow event listeners
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            index = (index - 1 + totalCards) % totalCards;
            slideTo(index);
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            index = (index + 1) % totalCards;
            slideTo(index);
        });
    }
}
