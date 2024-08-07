
var context = new AudioContext();
var oscillator = context.createOscillator();
var isBeepStart = 0;

const labelUpdate = document.getElementById('count');

var valueLabel;

oscillator.type = "sine";
oscillator.frequency.value = 800;

// const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');
// valueLabel = labelUpdate.textContent;

const checkLabel = setInterval(()=>{
    valueLabel = labelUpdate.value;
    console.log(valueLabel);
    switch (valueLabel) {
        case 'Cancelled':
            beepStart();
            break;
    
        case 'Running':
            
            break;
    
        case 'Finished':
            beepStop();
            break;

        case '1':
            if (isBeepStart != 3) {
                isBeepStart = 1;
                beepStart();
            }
            break;

        case '3':
            isBeepStart = 2;
            break;
    
        default:
            break;
    }
}, 1000);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.action === "stopBeep"){
            console.log("Stop beep");
            isBeepStart = 3
            beepStop();
        }
        else if (request.action === "startBeep") {
            console.log("Start beep");
            checkLabel;
        }
    }
);

function beepStart(){
    oscillator.connect(context.destination);
    oscillator.start();
}

function beepStop(){
    oscillator.disconnect(context.destination);
}