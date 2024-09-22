let labelUpdate;
let valueLabel;
let beep = null;

console.log("\n\nStart Extension\n\n");   

let checkLabel = null;

// const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');
// valueLabel = labelUpdate.textContent;
// beep.play();
// audio.play().catch(error => console.error("Erro ao tentar tocar o som:", error));

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "isRunning"){
            if (checkLabel) {
                sendResponse({status:"on"});
            } else{
                sendResponse({status:"off"});
            }
        }
        else if (request.action === "stopBeep"){
            console.log("Stop Beep");
            beepStop();
        }
        else if (request.action === "stopAlert"){
            console.log("Stop Alert");
            alert("Stop Alert");
            clearInterval(checkLabel);
            checkLabel = null;
            console.log(checkLabel);
            beepStop();
        }
        else if (request.action === "startAlert") {
            setTimeout(()=>{labelUpdate = document.querySelector('span.inline-flex.items-center.font-medium.rounded-md.text-xs');}, 5000);

            console.log("Start Alert");
            console.log(labelUpdate);
            alert("Start Alert");

            checkLabel = setInterval(()=>{
                valueLabel = labelUpdate.textContent;
                console.log(valueLabel);
                switch (valueLabel) {
                    // case 'Cancelled':
                    //     beepStart();
                    //     break;
                
                    case 'Assigned':
                        beepStart();
                        break;

                    // case 'Finished':
                    //     beepStart();
                    //     break;
                    // case 'Running':
                    //     beepStart();
                    //     break;

                    default:
                        break;
                }
            }, 1);
        }
    }
);

function beepStart(){
    if (!beep) {
        beep = new Audio(chrome.runtime.getURL('beep.mp3'));
        beep.play();
    } else if (beep.paused) {
        beep.play();
    }
}

function beepStop(){
    beep.pause();
    beep = null;
}