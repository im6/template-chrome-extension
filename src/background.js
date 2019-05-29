chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id, 'msg from background');
});

chrome.runtime.onMessage.addListener(function(message) {
  alert("background received: (" + message + ')');
});

chrome.runtime.sendMessage("msg: from background");