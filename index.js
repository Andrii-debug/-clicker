const button = document.querySelector('.button');
const timerEl = document.querySelector('.time');
let sum = document.querySelector('.clicks');
let restart = document.querySelector('.restart')

let count = 0;
let timer = 5000;
let interval;
let timeout;

restart.addEventListener('click', () => {
        count = 0
        
        
})


button.onclick = timers;

function timers() {
    let date = Date.now()
    timerEl.style.visibility = 'visible'
    timerEl.innerHTML = formatTime(timer);
    button.onclick = () => sum.textContent = count++;
    console.log(count);    

        interval = setInterval(() => {
        const result = Date.now() - date;
        timerEl.innerHTML = formatTime(timer - result)
        console.log(timer)
    }, 100)
   
    timeout = setTimeout(() => {
    button.onclick = null;
    timerEl.innerHTML = 'Game Over';
    sum.innerHTML = `Your Score: ${count}`
    clearInterval(interval);
    clearTimeout(timeout);
   }, timer)


}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2)
}



