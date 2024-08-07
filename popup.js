
const btnStopBeep = document.getElementById('btnStopBeep');
const btnStart = document.getElementById('btnStart');

const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
})

btnStart.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'startBeep' });
})

btnStopBeep.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'stopBeep' });
})
