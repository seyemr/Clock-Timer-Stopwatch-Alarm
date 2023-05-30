const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const continueButton = document.getElementById("continue-timer");
const hourInput = document.getElementById("hours");
const minuteInput = document.getElementById("minutes");
const secondInput = document.getElementById("seconds");
const timerStatus = document.getElementById("timer-status");

let intervalId;
let hours, minutes, seconds;
let isTimerRunning = false;

function startTimer() {
    if (isTimerRunning) return;

    hours = parseInt(hourInput.value) || 0;
    minutes = parseInt(minuteInput.value) || 0;
    seconds = parseInt(secondInput.value) || 0;

    clearInterval(intervalId);

    intervalId = setInterval(updateTimer, 1000);

    timerStatus.textContent = "Zamanlayıcı çalışıyor...";
    isTimerRunning = true;
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(intervalId);
                timerStatus.textContent = "Zamanlayıcı tamamlandı.";
                document.getElementById("alarm-sound").play();
                isTimerRunning = false;
                return;
            }
        }
    }

    hourInput.value = hours.toString().padStart(2, "0");
    minuteInput.value = minutes.toString().padStart(2, "0");
    secondInput.value = seconds.toString().padStart(2, "0");
}

function stopTimer() {
    clearInterval(intervalId);
    timerStatus.textContent = "Zamanlayıcı durduruldu.";
    isTimerRunning = false;
    document.getElementById("alarm-sound").pause();
    document.getElementById("alarm-sound").currentTime = 0;
}

function continueTimer() {
    startTimer();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
continueButton.addEventListener("click", continueTimer);