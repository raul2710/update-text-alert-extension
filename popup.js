
const btnStopBeep = document.getElementById('btnStopBeep');
const btnStart = document.getElementById('btnStart');

// const [tab] = await chrome.tabs.query({
//     active: true,
//     currentWindow: true
// })

// let lastLabelText = "";

// function checkForLabelChange() {

//   const label = document.querySelector('label'); // Adjust selector if necessary

//   if (label) {
//     const currentText = label.innerText;
//     if (currentText !== lastLabelText) {
//       lastLabelText = currentText;
//       chrome.runtime.sendMessage({ action: 'beep' });
//     }
//   }
// }

// function isUpdate() {
    


//     const [labelUpdate] = document.querySelectorAll('.inline-flex.items-center.font-medium.rounded-md.text-xs');

//     var valueLabel = labelUpdate.textContent;

//     switch (valueLabel) {
//         case 'Cancelled':
//             beep();
//             break;
    
//         case 'Running':
            
//             break;
    
//         case 'Finished':
            
//             break;
    
//         default:
//             break;
//     }
// }


btnStart.addEventListener('click', async ()=>{
    await chrome.runtime.sendMessage({ action: 'startBeep' });

    // chrome.scripting.executeScript({
    //   target : {tabId : tab.id},
    //   function : isUpdate,
    // })
    // .then(() => console.log("script injected"));
})

btnStopBeep.addEventListener('click', async ()=>{
    await chrome.runtime.sendMessage({ action: 'stopBeep' });
    // chrome.scripting.executeScript({
    //   target : {tabId : tab.id},
    //   function : isUpdate,
    // })
    // .then(() => console.log("script injected"));
})
