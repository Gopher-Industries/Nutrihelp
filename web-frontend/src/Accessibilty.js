// script.js
const fontSizeToggle = document.getElementById("font-size-toggle");
const colorBlindToggle = document.getElementById("color-blind-toggle");
const voiceoverToggle = document.getElementById("voiceover-toggle");

// Handle font size toggle
fontSizeToggle.addEventListener("change", () => {
    document.body.classList.toggle("large-font");
});

// Handle color blind mode toggle
colorBlindToggle.addEventListener("change", () => {
    document.body.classList.toggle("color-blind-mode");
});

// Handle voiceover toggle
voiceoverToggle.addEventListener("change", () => {
    if (voiceoverToggle.checked) {
        // Enable voiceover functionality (you can add your implementation here)
        alert("Voiceover enabled");
    } else {
        // Disable voiceover functionality
        alert("Voiceover disabled");
    }
});