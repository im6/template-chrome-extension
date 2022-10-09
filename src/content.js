chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert("content received: (" + message + ")");
});

var btn = document.createElement("button");
btn.innerText = "send to background";
btn.style.fontSize = "2em";
btn.style.position = "absolute";
btn.style.top = "200px";
btn.style.left = "400px";
btn.style.padding = "10px";
btn.style.background = "#fb5cb8";
btn.onclick = function () {
  chrome.runtime.sendMessage("msg from content");
};
document.querySelector("body").appendChild(btn);
