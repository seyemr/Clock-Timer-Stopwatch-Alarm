// Stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let stopwatchInterval;
let isRunning = false;

// Stopwatch elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");

// Button elements
const startButton = document.getElementById("start-stopwatch");
const pauseButton = document.getElementById("pause-stopwatch");
const continueButton = document.getElementById("continue-stopwatch");
const resetButton = document.getElementById("reset-stopwatch");

// Start the stopwatch
startButton.addEventListener("click", startStopwatch);

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatchInterval = setInterval(updateStopwatch, 10);
  }
}

// Pause the stopwatch
pauseButton.addEventListener("click", pauseStopwatch);

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
}

// Continue the stopwatch
continueButton.addEventListener("click", continueStopwatch);

function continueStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatchInterval = setInterval(updateStopwatch, 10);
  }
}

// Reset the stopwatch
resetButton.addEventListener("click", resetStopwatch);

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateStopwatch();
}

// Update the stopwatch display
function updateStopwatch() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  hoursElement.textContent = padNumber(hours);
  minutesElement.textContent = padNumber(minutes);
  secondsElement.textContent = padNumber(seconds);
  millisecondsElement.textContent = padNumber(Math.floor(milliseconds / 10));
}

// Helper function to pad single-digit numbers with leading zeros
function padNumber(number) {
  return number.toString().padStart(2, "0");
}
