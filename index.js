const stopBtn = document.getElementById('stopButton');
const slowBtn = document.getElementById('slowButton');
const goBtn = document.getElementById('goButton');
const stopLt = document.getElementById('stopLight');
const slowLt = document.getElementById('slowLight');
const goLt = document.getElementById('goLight');
let enterEventCount = 0;
let leaveEventCount = 0;


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

stopBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${stopBtn.innerText} button`)
})

stopBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${stopBtn.innerText} button`)
})

slowBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${slowBtn.innerText} button`)
})

slowBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${slowBtn.innerText} button`)
})

goBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${goBtn.innerText} button`)
})

goBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${goBtn.innerText} button`)
})