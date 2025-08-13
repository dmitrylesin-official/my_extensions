<img src="icons/icon128.png" alt="Логотип YouTube No Recommendations" width="200" />

# YouTube No Recommendations Extension

A simple Chrome browser extension that hides recommendations, related videos, suggestions, comments, and ads on YouTube for a distraction-free experience, while keeping the video description visible.

## Features
- Automatically hides sidebars, "Next Up" sections, home page grids, comments, and various ad elements.
- Keeps the video description (under the player) fully visible.
- Uses MutationObserver to handle dynamic content loading and updates.

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right toggle).
4. Click "Load unpacked" and select the repository folder.
5. Visit YouTube and refresh the page.

## Usage
- The extension runs automatically on `https://www.youtube.com/*`.
- Customize selectors in `content.js` if YouTube updates its layout (e.g., new ad formats).
