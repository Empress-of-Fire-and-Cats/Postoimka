const btn__start = document.querySelector('.btn__start');
const btn__stop = document.querySelector('.btn__stop');
const btn__clear = document.querySelector('.btn__clear');
const img = document.querySelector('.img');
const counter__hour = document.querySelector('.counter__hour');
const counter__min = document.querySelector('.counter__min');
const counter__sec = document.querySelector('.counter__sec');

btn__start.addEventListener("click", startCounter);
btn__stop.addEventListener("click", stopCounter);
btn__clear.addEventListener("click", clearCounter);


let sec = 0;
let min = 0;
let hour = 0;

function startCounter() {
    intervalID = setInterval(() => {
        sec +=1;
        if(sec == 15) {
            sec = 0;
            min++;
        }
        if(min == 15) {
            min = 0;
            hour++;
        }
        if(hour >= 0 && hour < 10) {
            counter__hour.textContent = '0' + hour;
        } else {
            counter__hour.textContent = hour;
        }
        if(min >= 0 && min < 10) {
            counter__min.textContent = ':0' + min;
        } else {
            counter__min.textContent = ':' + min;
        }
        if(sec >= 0 && sec < 10) {
            counter__sec.textContent = ':0' + sec;
        } else {
            counter__sec.textContent = ':' + sec;
        }
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
    counter__hour.textContent = '';
    counter__min.textContent = '';
    counter__sec.textContent = '';
    sec = 0;
    min = 0;
    hour = 0;
}