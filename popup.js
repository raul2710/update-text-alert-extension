
const btnStopBeep = document.getElementById('btnStopBeep');
const btnStartAlert = document.getElementById('btnStartAlert');
const btnStopAlert = document.getElementById('btnStopAlert');
const lblStatus = document.getElementById('lblStatus');

const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
})

const response = await chrome.tabs.sendMessage(tab.id, { action: 'isRunning' });

if (response.status === "on") {
    lblStatus.textContent = "Active";
} else {
    lblStatus.textContent = "Deactive";
}

btnStartAlert.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'startAlert' });
})

btnStopAlert.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'stopAlert' });
})

btnStopBeep.addEventListener('click', async ()=>{
    await chrome.tabs.sendMessage(tab.id, { action: 'stopBeep' });
})


