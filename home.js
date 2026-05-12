let clickCount = 0;
const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    clickCount++;

    if (clickCount === 2) {
        // First click changes text to your first condition
        mainBtn.innerText = "Do you really want to know?";
        mainBtn.style.transform = "scale(1.5)";
        mainBtn.style.backgroundColor = "#00f2ff"; // Optional: change color to signal progress
        mainBtn.style.color = "#000";
    }  
    else if (clickCount === 3) {
        // Third click performs the actual redirect
        window.location.href = "about.html";
    }
});
