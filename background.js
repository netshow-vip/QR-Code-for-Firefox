// background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type == 'fetch') {
        // WARNING: SECURITY PROBLEM - a malicious webpage may abuse
        // the message handler to get access to arbitrary cross-origin
        // resources.
        fetch(request.url).then(response => response.text()).then(text => sendResponse(text));   
        return true;  // Will respond asynchronously.
      }
    });