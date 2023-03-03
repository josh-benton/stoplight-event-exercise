const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');
const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');


stopButton.addEventListener('click', () => {
    stopLight.classList.toggle('stop');
    if (stopLight.classList.contains('stop')) {
        console.log(`${stopButton.innerText} bulb on`);
    } else {
        console.log(`${stopButton.innerText} bulb off`);
    }
})

slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
    if (slowLight.classList.contains('slow')) {
        console.log(`${slowButton.innerText} bulb on`);
    } else {
        console.log(`${slowButton.innerText} bulb off`);
    }
})

goButton.addEventListener('click', () => {
    goLight.classList.toggle('go');
    if (goLight.classList.contains('go')) {
        console.log(`${goButton.innerText} bulb on`);
    } else {
        console.log(`${goButton.innerText} bulb off`);
    }
})

function mouseLog (element) {
    element.addEventListener('mouseenter', () => {
        console.log(`Entered ${element.innerText} button`)
    });
    element.addEventListener('mouseleave', () => {
        console.log(`Left ${element.innerText} button`)
    })
}

mouseLog(goButton);
mouseLog(slowButton);
mouseLog(stopButton);