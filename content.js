var isBeepStart = 0;
var labelUpdate;
var valueLabel;

var beep = null;

setTimeout(()=>{labelUpdate = document.querySelector('.inline-flex.items-center.font-medium.rounded-md.text-xs'); console.log(labelUpdate);}, 5000);

console.log("\n\nStart\n\n");   

// const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');
// valueLabel = labelUpdate.textContent;
// beep.play();
// audio.play().catch(error => console.error("Erro ao tentar tocar o som:", error));

const checkLabel = setInterval(()=>{
    valueLabel = labelUpdate.textContent;
    console.log(valueLabel);
    switch (valueLabel) {
        case 'Cancelled':
            beepStop();
            isBeepStart = 2;
            break;
    
        case 'Assigned':
            beepStart();
            isBeepStart = 1;
            break;
    
        case 'Finished':
            beepStop();
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
        // else if (request.action === "startBeep") {
        //     console.log("Start beep");
        //     beepStart();
        //     checkLabel;
        // }
    }
);

function beepStart(){
    beep = new Audio(chrome.runtime.getURL('beep.mp3'));
    beep.loop = true;
    beep.play();
}

function beepStop(){
    beep.pause();
    beep = null;
}