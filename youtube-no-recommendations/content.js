function hideRecommendations() {
  const selectors = [
    '#related',
    '#secondary',
    'ytd-watch-next-secondary-results-renderer',
    'ytd-rich-grid-renderer',
    'ytd-rich-item-renderer',
    'ytd-compact-video-renderer',
    '.ytd-recommended-video-renderer',
    '#comments',

    '.ytp-ad-module',
    '#player-ads',
    '.ytd-companion-slot-renderer',
    '.ytd-action-companion-ad-renderer',
    '.ytd-player-legacy-desktop-watch-ads-renderer', 
    '.ytp-ad-player-overlay',
    '.ytp-ad-skip-button',
    '.ytp-ad-text'
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (el) {
        el.style.display = 'none';
      }
    });
  });
}

hideRecommendations();

const observer = new MutationObserver(hideRecommendations);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
