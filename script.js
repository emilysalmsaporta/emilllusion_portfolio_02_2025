// Example: You can add interactivity with JavaScript if needed. This is just a placeholder.
console.log("Portfolio Page Loaded");
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100; // Move slider by 100% per image
        slider.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop back
        updateSliderPosition();
    });

    rightArrow.addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop forward
        updateSliderPosition();
    });
});



