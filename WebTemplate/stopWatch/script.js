const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const lapBtn = document.getElementById("lap");
const lapList = document.getElementById('laps');



let seconds = 0;
let interval = null;

// Function to format time in hh:mm:ss
function formatTime(s){
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Function to update the display
function updateDisplay() {
    display.textContent = formatTime(seconds);
}

// Function to start the stopwatch
function startTimer() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

// Function to stop the stopwatch
function stopTimer() {
    clearInterval(interval);
    interval = null;
}

// Function to reset the stopwatch
function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

lapBtn.addEventListener("click", () => {
    if(interval) {
        const li = document.createElement('li');
        li.textContent = `Lap: ${formatTime(seconds)}`;
        lapList.appendChild(li);
        lapList.scrollTop = lapList.scrollHeight; // Scroll to the bottom
    }
})

updateDisplay(); // Initial display update