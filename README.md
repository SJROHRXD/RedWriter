# RedWriter | Extract and Copy YouTube Transcripts 🌼📑

A Google Chrome extension that allows users to extract and copy the transcript of a YouTube video.

![RedWriter](https://raw.githubusercontent.com/SJROHRXD/RedWriter/master/assets/RDWTR.png)
![RedWriter](https://raw.githubusercontent.com/SJROHRXD/RedWriter/master/assets/RDWTR2.png)

## Features

- Extract transcripts from YouTube videos that have a *visible* transcript.
- Copy the entire transcript, including timestamps, with a single click.

## Installation

1. Clone this repository or download it as a ZIP file and extract the contents.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner of the page.
4. Click "Load unpacked" and select the folder containing the extracted extension files.
5. The YouTube Transcript Extractor extension should now be visible in your extensions list.

> Note: Whenever updating this extension, be sure to reload the extension in `chrome://extensions`.

## Usage

1. Visit a YouTube video page that has a visible transcript.
2. Click on the YouTube Transcript Extractor extension icon in the Chrome toolbar.
3. In the extension popup, click the "Extract Transcript" button to extract the transcript.
4. The extracted transcript, including timestamps, should appear in the textarea within the popup.
5. Click the "Copy All" button to copy the entire transcript to your clipboard.

> Note: Make sure the transcript is visible on the YouTube video page before using the extension. To display the transcript, click on the three-dot menu icon below the video, then select "Open transcript."

## Future Development

- Stylization (she's a little ugly)
- Option to exclude timestamps
- Better formatting upon Paste

## License

This project is open-source and available under the [MIT License](LICENSE).

## A Better Extension

Shoutout to [Glasp](https://glasp.co/), as their extension is amazing and wonderful and much better in regards to automating all-the-things beyond just copying transcripts 🌻

## Resources

- [Chrome Developers: Extensions 101](https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/)
- [Chrome Developers: Development basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)
- [Chrome Developers: Extension development overview](https://developer.chrome.com/docs/extensions/mv3/devguide/)

## Acknowledgements

- [Suraj Vishwakarma](https://surajondev.com/) via [DailyDev](https://daily.dev/blog/create-chrome-extension-with-html-css-and-javascript) for a wonderfully straightforward overview of Chrome Extension Development 🌷

- [OpenAI](https://www.openai.com/) for their assistance in developing this extension (and this README, lol), and especially for assistance in isolating the *deeeeeeeply* nested transcript elements in YouTube's code ✨
