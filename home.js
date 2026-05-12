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
        
    } else if (clickCount === 2) {
        // Second click: Change text and spawn the "Yes" button
        mainBtn.innerText = "Are you sure?";
        mainBtn.style.backgroundColor = "transparent";
        mainBtn.style.border = "none";
        mainBtn.style.cursor = "default";
        mainBtn.style.fontSize = "40px";
        mainBtn.style.color = "#00ffe4"; // Keeps your neon theme
        mainBtn.style.transform = "scale(1)"; // Reset size so it's readable


    } else if (clickCount === 4) {
        // The final click
        window.location.href = "about.html";
    }
});
