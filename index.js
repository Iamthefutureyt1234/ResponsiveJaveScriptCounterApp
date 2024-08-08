// All the defining variables
let homeStart = document.getElementById("home-points");
let guestStart = document.getElementById("guest-points");
let homeFoulsCounter = document.getElementById("home-foul-text");
let guestFoulsCounter = document.getElementById("guest-foul-text");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// Set to zero on launch
homeStart.textContent = 0;
guestStart.textContent = 0;
homeFoulsCounter.textContent += 0;
guestFoulsCounter.textContent += 0;
minutes.textContent = "00";
seconds.textContent = "00";

// define scores and timer variables
let homePoints = 0;
let guestPoints = 0;
let guestFoulsNum = 0;
let homeFoulsNum = 0;
let timer = null;
let secondsCount = 0;

// home btn functions
function homeAddOne() {
	homePoints += 1;
	homeStart.textContent = homePoints;
}

function homeAddTwo() {
	homePoints += 2;
	homeStart.textContent = homePoints;
}

function homeAddThree() {
	homePoints += 3;
	homeStart.textContent = homePoints;
}

// guest btn functions
function guestAddOne() {
	guestPoints += 1;
	guestStart.textContent = guestPoints;
}

function guestAddTwo() {
	guestPoints += 2;
	guestStart.textContent = guestPoints;
}

function guestAddThree() {
	guestPoints += 3;
	guestStart.textContent = guestPoints;
}

// Foul btn functions
function homeFouls() {
	homeFoulsNum++;
	homeFoulsCounter.textContent = `Home Fouls: ${homeFoulsNum}`;
}

function guestFouls() {
	guestFoulsNum++;
	guestFoulsCounter.textContent = `Guest Fouls: ${guestFoulsNum}`;
}

// Timer functions
function startTimer() {
	if (timer) return;
	timer = setInterval(() => {
		secondsCount++;
		let mins = Math.floor(secondsCount / 60);
		let secs = secondsCount % 60;
		minutes.textContent = mins < 10 ? "0" + mins : mins;
		seconds.textContent = secs < 10 ? "0" + secs : secs;
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
	timer = null;
}

function resetTimer() {
	stopTimer();
	secondsCount = 0;
	minutes.textContent = "00";
	seconds.textContent = "00";
}

// Game reset function
function resetGame() {
	homePoints = 0;
	guestPoints = 0;
	guestFoulsNum = 0;
	homeFoulsNum = 0;
	homeStart.textContent = 0;
	guestStart.textContent = 0;
	homeFoulsCounter.textContent = "Home Fouls: 0";
	guestFoulsCounter.textContent = "Guest Fouls: 0";
	resetTimer();
}
