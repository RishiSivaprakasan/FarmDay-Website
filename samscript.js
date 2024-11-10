// script.js

// Language toggle functionality
document.getElementById("language-toggle").addEventListener("click", function() {
    const isTamil = this.textContent === "தமிழ்";
    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(element => {
        if (isTamil) {
            element.textContent = element.getAttribute("data-ta");
        } else {
            element.textContent = element.getAttribute("data-en");
        }
    });

    this.textContent = isTamil ? "English" : "தமிழ்";
});

// Toggle menu functionality
function toggleMenu() {
    const navList = document.getElementById("navList");
    navList.classList.toggle("hidden"); // Toggle visibility
    navList.classList.toggle("slide-from-logo"); // Apply slide-from-logo animation
}

// Add event listener to logo for toggling menu
document.querySelector(".logo").addEventListener("click", toggleMenu);
