let seconds = 0, minutes = 0, hours = 0;
let stopwatchHours = 0, stopwatchMinutes = 0, stopwatchSeconds = 0;

let interval = null;
let status = 'Stopped';

const startOrStopControl = document.getElementById('startOrStopControl');
const stopwatchDigits = document.getElementById('stopwatchDigits');

function stopWatch() {
  seconds++;

  if(seconds / 60 === 1){
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1){
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    stopwatchSeconds = '0' + seconds.toString();
  } else {
    stopwatchSeconds = seconds;
  }

  if (minutes < 10) {
    stopwatchMinutes = '0' + minutes.toString();
  } else {
    stopwatchMinutes = minutes;
  }

  if (hours < 10) {
    stopwatchHours = '0' + hours.toString();
  } else {
    stopwatchHours = hours;
  }

  stopwatchDigits.innerHTML = `${stopwatchHours}:${stopwatchMinutes}:${stopwatchSeconds}`;
}

function startStop() {
  if (status === 'Stopped') {
    interval = window.setInterval(stopWatch, 1000);
    startOrStopControl.innerHTML = 'Stop';
    startOrStopControl.className = 'stop control-button';
    status = 'Started';
  } else {
    window.clearInterval(interval);
    startOrStopControl.innerHTML = 'Start';
    startOrStopControl.className = 'start control-button';
    status = 'Stopped';
  }
}

function reset() {
  window.clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  stopwatchDigits.innerHTML = '00:00:00';
  startOrStopControl.innerHTML = 'Start';
  startOrStopControl.className = 'start control-button';
}