/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");

  chrome.runtime.onMessage.addListener(function (message) {
    console.log("background received: (" + message + ")");
  });
});

/******/ })()
;
//# sourceMappingURL=background.js.map