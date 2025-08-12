# YouTube No Recommendations Extension

A simple Chrome browser extension that hides recommendations, related videos, and suggestions on YouTube for a distraction-free experience.

## Features
- Automatically hides sidebars, "Next Up" sections, and home page grids.
- Uses MutationObserver to handle dynamic content loading.

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right toggle).
4. Click "Load unpacked" and select the repository folder.
5. Visit YouTube and refresh the page.

## Usage
- The extension runs automatically on `https://www.youtube.com/*`.
- Customize selectors in `content.js` if YouTube updates its layout.

## Notes
- Selectors might break with YouTube updates—update `content.js` as needed.
- No permissions required; fully local.
