const reloadBtnStyle = {
  fontSize: "3em",
  top: "20px",
  right: "20px",
  padding: "8px 30px",
  position: "absolute",
  borderRadius: "5px",
  background: "yellow",
  position: "fixed",
  zIndex: "99999",
};

const initReload = () => {
  const btn = document.createElement("button");
  btn.innerText = "RELOAD";

  Object.keys(reloadBtnStyle).forEach((key) => {
    btn.style[key] = reloadBtnStyle[key];
  });

  document.querySelector("body").appendChild(btn);
  btn.addEventListener("click", () => {
    try {
      chrome.runtime.sendMessage(undefined, { type: "reload" });
    } catch (error) {
      console.error("Error sending reload message:", error);
    }
    btn.style.display = "none";
    setTimeout(() => {
      location.reload();
    }, 800);
  });
};

export default initReload;
