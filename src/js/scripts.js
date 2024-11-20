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


// Chinese Fruit
document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/Chinese(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/Chinese(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});
	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});

// English Fruit
document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/English(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/English(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});
	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});

// Spanish Fruit
document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/ES(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

document.addEventListener("DOMContentLoaded", function () {
	const totalWords = 5; 
	const currentWordIndex = parseInt(
		window.location.href.match(/ES(\d+)\.html/)[1]
	) - 1; 

	const progressElement = document.querySelector(".progress");
	const progressPercentage = ((currentWordIndex + 1) / totalWords) * 100;
	progressElement.style.width = `${progressPercentage}%`;

	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});
	const markers = document.querySelectorAll(".marker");
	for (let i = 0; i <= currentWordIndex; i++) {
		markers[i].style.visibility = "visible";
		markers[i].style.opacity = 1; 
	}
});