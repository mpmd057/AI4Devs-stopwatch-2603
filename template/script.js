let startStopButton = document.getElementById("startStopButton");
let clearButton = document.getElementById("clearButton");
let timeDisplay = document.getElementById("timeDisplay");
let millisecondsDisplay = document.getElementById("millisecondsDisplay");

let startTime = 0;
let elapsedTime = 0;
let interval = null;
let running = false;

function formatTime(ms) {
    let totalMilliseconds = ms;

    let minutes = Math.floor(totalMilliseconds / 60000);
    let seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    let centiseconds = Math.floor((totalMilliseconds % 1000) / 10);
    let milliseconds = totalMilliseconds % 1000;

    return {
        main: 
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0') + ":" +
            String(centiseconds).padStart(2, '0'),
        milli: String(milliseconds).padStart(3, '0')
    };
}

function updateDisplay() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let formatted = formatTime(elapsedTime);

    timeDisplay.textContent = formatted.main;
    millisecondsDisplay.textContent = formatted.milli;
}

startStopButton.addEventListener("click", function () {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateDisplay, 10);
        running = true;
        startStopButton.textContent = "Stop";
    } else {
        clearInterval(interval);
        running = false;
        startStopButton.textContent = "Start";
    }
});

clearButton.addEventListener("click", function () {
    clearInterval(interval);
    running = false;
    elapsedTime = 0;

    let formatted = formatTime(0);
    timeDisplay.textContent = formatted.main;
    millisecondsDisplay.textContent = formatted.milli;

    startStopButton.textContent = "Start";
});
