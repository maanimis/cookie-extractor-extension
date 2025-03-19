chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCookies") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const url = currentTab.url;
      const domain = new URL(url).hostname;

      chrome.cookies.getAll({ domain: domain }, (cookies) => {
        sendResponse({ cookies: cookies });
      });
    });

    return true;
  }
});
