const timeDisplay = document.getElementById('time-display');
const operateTimerBtn = document.getElementById('operate-timer-btn');
let timerStarted = false, timerStopped = false, timerContinued = false;
let intervalId, seconds = 0;

function operateTimer() {
    if (!timerStarted) { // start button pressed
        timerStarted = !timerStarted; // timerStarted = true
        operateTimerBtn.innerHTML = 'Pause';
        operateTimerBtn.className = 'blue-btn';
        startTimer();
    } else {
        if (!timerStopped) { // pause button pressed
            clearInterval(intervalId);
            operateTimerBtn.innerHTML = 'Continue';
            operateTimerBtn.className = 'purple-btn';
            timerStopped = !timerStopped; // timerStopped = true
        } else { // continue button pressed
            startTimer();
            operateTimerBtn.innerHTML = 'Pause';
            operateTimerBtn.className = 'blue-btn';
            timerStopped = !timerStopped; // timerStopped = false
        }
    }
}

function startTimer() {
    intervalId = window.setInterval(function () {
        seconds++;
        displayTime(seconds);
    }, 1000);

}

function displayTime(timeInSeconds) {
    let seconds = timeInSeconds % 60;
    let minutes = Math.floor(timeInSeconds / 60) % 60;
    let hours = Math.floor(timeInSeconds / 3600);

    if (timeInSeconds < 60) { //display seconds
        showFullTime(seconds);
    }

    else if (timeInSeconds < 3600) { //display minutes 
        showFullTime(seconds, minutes);
    }

    else { //display hours
        showFullTime(seconds, minutes, hours);
    }
}

function showFullTime(seconds, minutes = '00', hours = '00') {
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes !== '00' && minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours !== '00' && hours < 10) {
        hours = '0' + hours;
    }

    timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function clearTimer() {
    timerStarted = false, timerStopped = false, timerContinued = false;
    operateTimerBtn.innerHTML = 'Start';
    timeDisplay.innerHTML = '00:00:00';
    operateTimerBtn.className = 'green-btn';
    clearInterval(intervalId);
    seconds = 0;
}