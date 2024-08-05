// const audio = new Audio('beep.mp3');
// const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'startBeep') {
        console.log('Teste');
        // isUpdate();
    } else {
        oscillator.stop(); 
    }
});

function beep(){
    var context = new AudioContext();
    var oscillator = context.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.value = 800;
    oscillator.connect(context.destination);
    oscillator.start();
}

// function isUpdate(){

//     // var valueLabel = labelUpdate.textContent;

//     // switch (valueLabel) {
//     //     case 'Cancelled':
//     //         beep();
//     //         break;
    
//     //     case 'Running':
            
//     //         break;
    
//     //     case 'Finished':
            
//     //         break;
    
//     //     default:
//     //         break;
//     // }
// }