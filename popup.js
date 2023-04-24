document.getElementById('extract').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ['content.js']
        },
        ([result]) => {
            document.getElementById('transcript').value = result.result;
        }
    );
});

document.getElementById('copy-all').addEventListener('click', async () => {
    const transcriptTextarea = document.getElementById('transcript');
    transcriptTextarea.select();

    try {
        await navigator.clipboard.writeText(transcriptTextarea.value);
    } catch (err) {
        console.error('Failed to copy the transcript: ', err);
    }
});