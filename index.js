const stopBtn = document.getElementById('stopButton');
const slowBtn = document.getElementById('slowButton');
const goBtn = document.getElementById('goButton');
const stopLt = document.getElementById('stopLight');
const slowLt = document.getElementById('slowLight');
const goLt = document.getElementById('goLight');

stopBtn.addEventListener('click', () => {
    if (stopLt.classList.contains('stop')) {
        stopLt.classList.remove('stop');
    } else {
        stopLt.classList.add('stop');
    }
})

slowBtn.addEventListener('click', () => {
    if (slowLt.classList.contains('slow')) {
        slowLt.classList.remove('slow');
    } else {
        slowLt.classList.add('slow');
    }
})

goBtn.addEventListener('click', () => {
    if (goLt.classList.contains('go')) {
        goLt.classList.remove('go');
    } else {
        goLt.classList.add('go');
    }
})