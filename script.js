const timer = document.getElementById("timer");

function updateTimer() {
    const currentTime = new Date();

    timer.innerText = currentTime.toLocaleString();
}

updateTimer();

setInterval(updateTimer, 1000);