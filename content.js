// The extractTranscript() function works by selecting all elements with the class name 'ytd-transcript-segment-renderer'
// and then extracting the timestamp and text from each element
// The timestamp and text are then combined into a single string and returned

async function extractTranscript() {
    const transcriptSelector = 'ytd-transcript-segment-renderer';
    const transcriptElements = document.querySelectorAll(transcriptSelector);

    if (transcriptElements.length > 0) {
        const transcriptLines = Array.from(transcriptElements).map(segment => {
            const timestampElement = segment.querySelector('div.segment-timestamp');
            const textElement = segment.querySelector('yt-formatted-string.segment-text');

            const timestamp = timestampElement ? timestampElement.textContent.trim() : '';
            const text = textElement ? textElement.textContent.trim() : '';

            return timestamp + ' ' + text;
        });
        const transcript = transcriptLines.join('\n');
        return transcript;
    }

    return `⚠ Transcript not found. Make sure the transcript is visible on the page.`;
}
extractTranscript();