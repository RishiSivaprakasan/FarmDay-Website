// Reviews Slider
let currentReviewIndex = 0;
let visibleReviewCards = 2; // Set to 2 cards visible for reviews
let reviewAutoSlideInterval;

function moveReviewSlide(direction) {
    clearInterval(reviewAutoSlideInterval); // Clear the auto-slide interval on button click
    const reviewSliderContainer = document.querySelector('.review-slider-container');
    const reviewCards = document.querySelectorAll('.review-card');
    const totalReviewCards = reviewCards.length;

    currentReviewIndex += direction;

    // Handle edge cases (looping for review section)
    if (currentReviewIndex < 0) {
        currentReviewIndex = totalReviewCards - visibleReviewCards;
    } else if (currentReviewIndex > totalReviewCards - visibleReviewCards) {
        currentReviewIndex = 0;
    }

    updateReviewSlide(reviewSliderContainer, currentReviewIndex);
    startReviewAutoSlide(); // Restart auto-slide after manual navigation
}

function updateReviewSlide(reviewSliderContainer, index) {
    const reviewSlideWidth = reviewSliderContainer.querySelector('.review-card').offsetWidth;
    reviewSliderContainer.style.transform = `translateX(-${index * reviewSlideWidth}px)`;
}

function setVisibleReviewCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
        visibleReviewCards = 1; // 1 card for small screens
    } else {
        visibleReviewCards = 2; // 2 cards for larger screens
    }
    updateReviewSlide(document.querySelector('.review-slider-container'), currentReviewIndex);
}

function startReviewAutoSlide() {
    reviewAutoSlideInterval = setInterval(() => {
        moveReviewSlide(1);
    }, 3000); // Change slides every 3 seconds
}

window.addEventListener('resize', setVisibleReviewCards);
setVisibleReviewCards(); // Initial call to set the number of visible review cards
startReviewAutoSlide(); // Start auto-slide for reviews


// Blog Slider
let currentBlogIndex = 0;
let visibleBlogCards = 1; // Set to 1 card visible for blogs
let blogAutoSlideInterval;

function moveBlogSlide(direction) {
    clearInterval(blogAutoSlideInterval); // Clear the auto-slide interval on button click
    const blogSliderContainer = document.querySelector('.blog-slider-container');
    const blogCards = document.querySelectorAll('.blog-card');
    const totalBlogCards = blogCards.length;

    currentBlogIndex += direction;

    // Handle edge cases (looping for blog section)
    if (currentBlogIndex < 0) {
        currentBlogIndex = totalBlogCards - visibleBlogCards;
    } else if (currentBlogIndex > totalBlogCards - visibleBlogCards) {
        currentBlogIndex = 0;
    }

    updateBlogSlide(blogSliderContainer, currentBlogIndex);
    startBlogAutoSlide(); // Restart auto-slide after manual navigation
}

function updateBlogSlide(blogSliderContainer, index) {
    const blogSlideWidth = blogSliderContainer.querySelector('.blog-card').offsetWidth;
    blogSliderContainer.style.transform = `translateX(-${index * blogSlideWidth}px)`;
}

function setVisibleBlogCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
        visibleBlogCards = 1; // Always 1 card for small screens
    } else {
        visibleBlogCards = 1; // Keep 1 card for larger screens as well
    }
    updateBlogSlide(document.querySelector('.blog-slider-container'), currentBlogIndex);
}

function startBlogAutoSlide() {
    blogAutoSlideInterval = setInterval(() => {
        moveBlogSlide(1);
    }, 3000); // Change slides every 3 seconds
}

window.addEventListener('resize', setVisibleBlogCards);
setVisibleBlogCards(); // Initial call to set the number of visible blog cards
startBlogAutoSlide(); // Start auto-slide for blogs
