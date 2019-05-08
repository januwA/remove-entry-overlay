let historyEle = [];
let timer;

const styleString = `
  .entry-image a:after {
     background: none !important;
  }
`;

// 标签页中的内容脚本
function hideEvent() {
  let allEle = document.querySelectorAll(".entry-overlay");
  Array.from(allEle)
    .filter(el => el.style.display !== "none")
    .forEach(el => {
      el.style.display = "none";
      historyEle.push(el);
    });
}
function hide() {
  hideEvent();
  timer = setInterval(hideEvent, 1000 * 10);
  const style = document.createElement("style");
  style.id = "ajanuwAddStyle";
  style.innerHTML = styleString;
  document.head.appendChild(style);
}
hide();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // 还原所有
  if (msg.recovery) {
    clearInterval(timer);
    historyEle.forEach(el => {
      el.style.display = "block";
    });
    historyEle = [];

    const s = document.querySelector("#ajanuwAddStyle");
    if (s) {
      document.head.removeChild(s);
    }
  }

  // 隐藏所有
  if (msg.hide) {
    hide();
  }
});
