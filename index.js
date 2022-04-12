const btn__start = document.querySelector('.btn__start');
const btn__stop = document.querySelector('.btn__stop');
const btn__clear = document.querySelector('.btn__clear');
const counter = document.querySelector('.counter');
const img = document.querySelector('.img');

btn__start.addEventListener("click", startCounter);
btn__stop.addEventListener("click", stopCounter);
btn__clear.addEventListener("click", clearCounter);


let sec = 0;
let min = 0;
let hour = 0;

function startCounter() {
    counter.textContent = `${hour}:${min}:${sec}`;
    intervalID = setInterval(() => {
        sec +=1;
        if(sec == 5) {
            sec = 0;
            min++;
        }
        if(min == 5) {
            min = 0;
            hour++;
        }
        counter.textContent = `${hour}:${min}:${sec}`;
    }, 1000);
    this.disabled = true;
    document.getElementById('img').style.display = 'block';
}

function stopCounter() {
    clearInterval(intervalID);
    document.getElementById('btn__start').disabled = false;
    document.getElementById('img').style.display = 'none';
}

function clearCounter() {
    counter.textContent = '';
    sec = 0;
    min = 0;
    hour = 0;
}