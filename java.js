// script.js

// Example of adding click events to info boxes
document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('click', () => {
        alert(`${box.querySelector('h3').innerText} Clicked!`);
    });
});
