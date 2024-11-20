// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

function playAudio(audioId) {
	const audioElement = document.getElementById(audioId);
	audioElement.play();
}



// Chinese
// Use ChatGPT to learn how to make a piece of code applicable to 3 categories at the same time
document.addEventListener("DOMContentLoaded", function () {
    const pageMatch = window.location.href.match(/Chinese(\d+)\.html/);
    if (!pageMatch) return;
    const pageNumber = parseInt(pageMatch[1]);

    let totalWords;
    let currentWordIndex;

    if (pageNumber >= 1 && pageNumber <= 5) {
        totalWords = 5;
        currentWordIndex = pageNumber - 1;
    } else if (pageNumber >= 6 && pageNumber <= 10) {
        // Color 
        totalWords = 5;
        currentWordIndex = pageNumber - 6;
    } else if (pageNumber >= 11 && pageNumber <= 15) {
       	// Animal 
        totalWords = 5;
        currentWordIndex = pageNumber - 11; 
    } else {
        console.error("error");
        return; 
    }

// Update the progress bar
    const progressElement = document.querySelector(".progress");
    const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
    progressElement.style.width = `${progressPercentage}%`;

// Display mark
    const markers = document.querySelectorAll(".marker");
    for (let i = 0; i <= currentWordIndex; i++) {
        markers[i].style.visibility = "visible";
        markers[i].style.opacity = 1;
    }
});


// English
document.addEventListener("DOMContentLoaded", function () {
    const pageMatch = window.location.href.match(/English(\d+)\.html/);
    if (!pageMatch) return;
    const pageNumber = parseInt(pageMatch[1]);

    let totalWords;
    let currentWordIndex;

    if (pageNumber >= 1 && pageNumber <= 5) {
        totalWords = 5;
        currentWordIndex = pageNumber - 1;
    } else if (pageNumber >= 6 && pageNumber <= 10) {
        // Color 
        totalWords = 5;
        currentWordIndex = pageNumber - 6;
    } else if (pageNumber >= 11 && pageNumber <= 15) {
       	// Animal 
        totalWords = 5;
        currentWordIndex = pageNumber - 11; 
    } else {
        console.error("error");
        return; 
    }

// Update the progress bar
    const progressElement = document.querySelector(".progress");
    const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
    progressElement.style.width = `${progressPercentage}%`;

// Display mark
    const markers = document.querySelectorAll(".marker");
    for (let i = 0; i <= currentWordIndex; i++) {
        markers[i].style.visibility = "visible";
        markers[i].style.opacity = 1;
    }
});


// Spanish
document.addEventListener("DOMContentLoaded", function () {
    const pageMatch = window.location.href.match(/ES(\d+)\.html/);
    if (!pageMatch) return;
    const pageNumber = parseInt(pageMatch[1]);

    let totalWords;
    let currentWordIndex;

    if (pageNumber >= 1 && pageNumber <= 5) {
        totalWords = 5;
        currentWordIndex = pageNumber - 1;
    } else if (pageNumber >= 6 && pageNumber <= 10) {
        // Color 
        totalWords = 5;
        currentWordIndex = pageNumber - 6;
    } else if (pageNumber >= 11 && pageNumber <= 15) {
       	// Animal 
        totalWords = 5;
        currentWordIndex = pageNumber - 11; 
    } else {
        console.error("error");
        return; 
    }

// Update the progress bar
    const progressElement = document.querySelector(".progress");
    const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
    progressElement.style.width = `${progressPercentage}%`;

// Display mark
    const markers = document.querySelectorAll(".marker");
    for (let i = 0; i <= currentWordIndex; i++) {
        markers[i].style.visibility = "visible";
        markers[i].style.opacity = 1;
    }
});
