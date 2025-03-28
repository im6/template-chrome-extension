chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert("content received: (" + message + ")");
});

var btn = document.createElement("button");
btn.innerText = "reload runtime 1";
btn.style.fontSize = "2em";
btn.style.position = "absolute";
btn.style.top = "200px";
btn.style.left = "400px";
btn.style.padding = "10px";
btn.style.background = "#fb5cb8";
btn.style.zIndex = "9999";
btn.onclick = function () {
  chrome.runtime.sendMessage("reload");
};
document.querySelector("body").appendChild(btn);
