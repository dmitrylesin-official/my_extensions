(function() {
  const hideSelectors = [
    '#related',
    '#secondary',
    'ytd-watch-next-secondary-results-renderer',
    'ytd-rich-grid-renderer',
    'ytd-rich-item-renderer',
    'ytd-compact-video-renderer',
    '.ytd-recommended-video-renderer',
    '#comments',
    'ytd-reel-shelf-renderer',
    'ytd-reel-video-renderer',
    'a[href*="/shorts/"]'
  ];

  function hideUI() {
    hideSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none';
      });
    });
  }

  function skipAds() {
    const skipButton = document.querySelector('.ytp-ad-skip-button.ytp-button');
    if (skipButton) {
      skipButton.click();
      console.log('[Ad Skipper] Ad skipped');
    }
    const overlayClose = document.querySelector('.ytp-ad-overlay-close-button');
    if (overlayClose) {
      overlayClose.click();
      console.log('[Ad Skipper] Overlay ad closed');
    }
  }

  const observer = new MutationObserver(() => {
    hideUI();
    skipAds();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  hideUI();
  skipAds();
  setInterval(skipAds, 1000);
})();
