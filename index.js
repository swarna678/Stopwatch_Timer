const hoursLabel=document.createElement('hours');
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton=document.getElementById('startBtn');
const stopButton=document.getElementById('stopBtn');
const pauseButton=document.getElementById('pauseBtn');
const resetButton=document.getElementById('resetBtn');

const lapList=document.getElementById('laplist');

let hours=0;
let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

function startTimer(){
    interval =setInterval(updateTimer,10);
    startButton.disabled=true;
}

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

function displayTimer(){
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
    hoursLabel.textContent = padTime(hours);
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled=false;
}
function pauseTimer(){
    clearInterval(interval);
    startButton.disabled=false;
}
function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled=false;

}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes===60){
                minutes=0;
                hours++;
            }
        }
        
    }
    displayTimer();
}


function padTime(time){
    return time.toString().padStart(2,'0');
}
function resetTimerData(){
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0
    displayTimer();
}
function  addToLapList(){
    const lapTime =`${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML=`<span>Lap ${lapList.childElementCount + 1}:</span>${lapTime}`;
    lapList.appendChild(listItem);
}
