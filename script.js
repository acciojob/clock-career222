//your JS code here. If required.
const timer = document.getElementById("timer");
function updateTimer(){
	const currentTime = new Date();
	timer.innerText = currentTime.toLocaleString();
	update timer();
	setInterval(updateTimer,1000);
}