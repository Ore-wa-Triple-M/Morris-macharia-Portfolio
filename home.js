let clickCount = 0;
const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    clickCount++;

    if (clickCount === 1) {
        // First click: Change the text to your question
        mainBtn.innerText = "Do you really want to know?";
        
        // Optional: Increase size to make it more dramatic as seen in your original code
        mainBtn.style.transform = "scale(1.5)";
        mainBtn.style.transition = "transform 0.3s ease";
    } 
    else if (clickCount === 2) {
        // Second click: Perform the actual redirect
        window.location.href = "about.html";
    }
});
