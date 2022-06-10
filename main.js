const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let ss = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

function timer() {
    ss++;
    
    let hrs = Math.floor(ss/3600);
    let mins = Math.floor((ss - (hrs * 3600)) / 60);
    let secs = ss % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs  < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start(){
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    ss = 0;
    time_el.innerText = '00:00:00';
}