const recoveryButton = document.querySelector("#recovery");
const hideButton = document.querySelector("#hide");

recoveryButton.addEventListener("click", e => {
  const cfg = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(cfg, tabs => {
    // 向内容脚本发送消息 content.js
    chrome.tabs.sendMessage(tabs[0].id, {
      recovery: true,
    });
  });
});

hideButton.addEventListener("click", e => {
  const cfg = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(cfg, tabs => {
    // 向内容脚本发送消息 content.js
    chrome.tabs.sendMessage(tabs[0].id, {
      hide: true,
    });
  });
});
