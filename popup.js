
const btnStopBeep = document.getElementById('btnStopBeep');
const btnStartAlert = document.getElementById('btnStartAlert');
const btnStopAlert = document.getElementById('btnStopAlert');

const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
})

btnStartAlert.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'startAlert' });
})

btnStopAlert.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'stopAlert' });
})

btnStopBeep.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'stopBeep' });
})


