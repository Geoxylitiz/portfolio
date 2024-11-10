const textElement = document.getElementById('text');
const texts = ["Web developer", "Content creator", "Pianist", "Video editor"];
let currentIndex = 0;
let currentText = '';
let currentChar = 0;

function type() {
  if (currentChar < texts[currentIndex].length) {
    currentText += texts[currentIndex].charAt(currentChar);
    textElement.innerHTML = currentText;
    currentChar++;
    setTimeout(type, 100);  // Adjust speed of typing
  } else {
    setTimeout(erase, 2000);  // Pause before erasing
  }
}

function erase() {
  if (currentChar > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    textElement.innerHTML = currentText;
    currentChar--;
    setTimeout(erase, 50);  // Adjust speed of erasing
  } else {
    currentIndex = (currentIndex + 1) % texts.length;  // Loop through texts
    setTimeout(type, 100);  // Start typing next text
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000);  // Initial delay before starting
});


// Detect scroll and apply 'scrolled' class





//PROJECT