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

        // Check if the Yes button already exists so we don't spawn 100 of them
        if (!document.getElementById('yesBtn')) {
            const yesBtn = document.createElement('button');
            yesBtn.id = 'yesBtn';
            yesBtn.innerText = "YES";
            yesBtn.style.marginLeft = "20px";
            yesBtn.style.color= "white";
            yesBtn.style.backgroundColor = " hsla(0, 100.00%, 40.00%, 0.90)"

            // When they click 'Yes', it counts as the 3rd step
            yesBtn.onclick = (e) => {
                e.preventDefault();
                clickCount = 3; 
                mainBtn.innerText = "Click me again...";
                mainBtn.style.backgroundColor = " hsl(174, 100%, 50%)";
                mainBtn.style.cursor = "pointer";
                mainBtn.style.color = " hsl(261, 100%, 27%)";
                mainBtn.style.transform = "scale(2.5)"; // Reset size so it's read
                yesBtn.remove(); 
            };
            container.appendChild(yesBtn);
        }

    } else if (clickCount === 4) {
        // The final click
        window.location.href = "about.html";
    }
});