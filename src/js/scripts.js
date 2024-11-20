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


/*Ask chatgpt on how to create the practice Practice-page*/
const words = document.querySelectorAll('.clickable-word');
const images = document.querySelectorAll('.clickable-image');
const submitButton = document.querySelector('.submit-button');
const feedbackContainer = document.querySelector('.feedback-container');

let selectedWord = null;
let selectedImage = null;
const matches = new Map();

words.forEach(word => {
	word.addEventListener('click', () => {
		if (selectedWord) {
			selectedWord.classList.remove('selected');
		}
		selectedWord = word;
		word.classList.add('selected');
	});
});

images.forEach(image => {
	image.addEventListener('click', () => {
		if (selectedImage) {
			selectedImage.classList.remove('selected');
		}
		selectedImage = image;
		image.classList.add('selected');
	});
});

function matchSelected() {
	if (selectedWord && selectedImage) {
		const wordClass = selectedWord.classList[1];
		const imageClass = selectedImage.classList[1];

		feedbackContainer.innerHTML = ""; // Clear previous feedback

		if (wordClass === imageClass) {
			matches.set(wordClass, true);
			selectedWord.classList.add('correct');
			selectedImage.classList.add('correct');

			// Add success feedback image
			const successImg = document.createElement('img');
			successImg.src = 'images/good.png'
			successImg.alt = '正确匹配！';
			successImg.className = 'feedback-image bump-up';
			feedbackContainer.appendChild(successImg);
		} else {
			matches.set(wordClass, false);
			selectedWord.classList.add('incorrect');
			selectedImage.classList.add('incorrect');

			// Add failure feedback image
			const failureImg = document.createElement('img');
			failureImg.src = 'images/crying.png'; // Add your incorrect feedback image path
			failureImg.alt = '匹配错误！';
			failureImg.className = 'feedback-image bump-up';
			feedbackContainer.appendChild(failureImg);
		}

		// Reset selections
		selectedWord = null;
		selectedImage = null;
	}
}

words.forEach(word => word.addEventListener('click', matchSelected));
images.forEach(image => image.addEventListener('click', matchSelected));

submitButton.addEventListener('click', () => {
	const allCorrect = [...matches.values()].every(value => value === true);

	if (allCorrect && matches.size === words.length) {
		window.location.href = ""; // Success page
	} else {
		window.location.href = "tryAgain CHN Animals.html"; // Failure page
	}
});

function showImage() {
	let displayImage = document.querySelector('.display-image');
	if (!displayImage) {
		// Create the image element only if it doesn't exist
		displayImage = document.createElement('img');
		displayImage.classList.add('display-image');
		document.body.appendChild(displayImage);
	}

	displayImage.src = 'images/good.png'
	displayImage.style.display = 'block'; // Show the image

	// Add fade-out effect after 3 seconds
	setTimeout(() => {
		displayImage.classList.add('hidden'); // Add hidden class
		setTimeout(() => displayImage.style.display = 'none', 500); // Completely hide after animation
	}, 3000);
}

showImage();

document.addEventListener('DOMContentLoaded', () => {
	const wordElements = document.querySelectorAll('.clickable-word');
	const feedbackContainer = document.querySelector('.feedback-container');

	wordElements.forEach((word) => {
		word.addEventListener('click', () => {
			// Clear the feedback container for a fresh start
			feedbackContainer.innerHTML = '';

			let img = document.createElement('img');

			// Example logic to determine if the clicked word is correct or wrong
			if (word.classList.contains('cat') || word.classList.contains('dog')) {
				// Correct answer, show "good" image
				img.src = 'images/good.png'; // Correct image path
				img.alt = 'Good feedback image'; // Alt text for accessibility
			} else {
				// Wrong answer, show "crying" image
				img.src = 'images/crying.png'; // Wrong image path
				img.alt = 'Crying feedback image'; // Alt text for accessibility
			}

			// Append the image to the feedback container
			feedbackContainer.appendChild(img);

			// Show the feedback container by adding the 'show' class
			feedbackContainer.classList.add('show');

			// Hide the feedback container after 2 seconds (2000ms)
			setTimeout(() => {
				feedbackContainer.classList.remove('show');
			}, 2000);
		});
	});
});

