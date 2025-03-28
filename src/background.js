self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
self.addEventListener("reload", (event) => {
  console.log("reload here");
  chrome.runtime.reload();
});
