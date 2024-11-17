const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton=document.getElementById('startBtn');
const stopButton=document.getElementById('stopBtn');
const pauseButton=document.getElementById('pauseBtn');
const resetButton=document.getElementById('resetBtn');

const laplist=document.getElementById('laplist');

let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

function startTimer(){
    updateTimer();
    startButton.disabled=true;
}

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

function displayTimer(){
    millisecondsLabel.textContent = milliseconds;
    secondsLabel.textContent = seconds;
    minutesLabel.textContent = minutes;

}


function stopTimer(){
    
}
function pauseTimer(){
    
}
function resetTimer(){
    
}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}
