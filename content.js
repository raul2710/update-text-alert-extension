
var context = new AudioContext();
var oscillator = context.createOscillator();

oscillator.type = "sine";
oscillator.frequency.value = 800;

const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');

var valueLabel = labelUpdate.textContent;

switch (valueLabel) {
    case 'Cancelled':
        beepStart();
        break;

    case 'Running':
        
        break;

    case 'Finished':
        beepStop();
        break;

    default:
        break;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.action === "stopBeep"){
            console.log("Stop beep");
            beepStop();
        }
        else if (request.action === "startBeep") {
            console.log("Start beep");
            beepStart();
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