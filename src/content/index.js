import "./styles.css";
import { getInterval } from "./observables";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert("content received: (" + message + ")");
});

getInterval().subscribe((v) => {
  console.log("next", v);
});

if (process.env.NODE_ENV === "development") {
  const initReload = require("./reload").default;
  initReload();
}
