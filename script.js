let mySound = new Audio('https://www.youtube.com/watch?v=0mfJn604GT4');

// Get the button elements and add click event listeners
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn, .stop').forEach(function (button) {
        button.addEventListener('click', function (eventDetails) {
            eventDetails.preventDefault();
            mySound.play();
        });
    });
});
