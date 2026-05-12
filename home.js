let clickCount = 0;
const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    clickCount++;

    if (clickCount === 1) {
        // This runs on the FIRST click
        mainBtn.innerText = "Do you really want to know?";
        mainBtn.style.transform = "scale(1.5)";
    } 
    else if (clickCount === 2) {
        // This runs on the SECOND click
        window.location.href = "about.html";
    }
});
