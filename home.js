let clickCount = 0;
const mainBtn = document.getElementById('mainBtn');
const container = document.getElementById('buttonContainer');

mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop form from submitting
    clickCount++;

    if (clickCount === 1) {
        // First click: Increase size and change text
        mainBtn.innerText = "Do you really want to know?";
        mainBtn.style.transform = "scale(1.5)";
        window.location.href = "about.html";
    }
});
