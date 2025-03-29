chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);
  if (message.type === "reload") {
    chrome.runtime.reload();
  }
});
