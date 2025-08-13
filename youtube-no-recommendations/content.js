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
    '.ytp-ad-text',
    'ytd-reel-shelf-renderer',
    'ytd-reel-video-renderer',
    'a[href*="/shorts/"]'      
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = 'none';
    });
  });
}

hideRecommendations();

new MutationObserver(hideRecommendations)
  .observe(document.body, { childList: true, subtree: true });
