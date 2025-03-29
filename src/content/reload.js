const initReload = () => {
  const btn = document.createElement("button");
  btn.innerText = "reload";
  btn.classList.add(
    "text-yellow-300",
    "bg-black",
    "text-5xl",
    "fixed",
    "top-5",
    "right-5",
    "px-8",
    "py-3",
    "rounded-md",
    "z-50",
    "uppercase"
  );

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
