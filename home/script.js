const splash = document.getElementById("splash");
const content = document.getElementById("content");

// クリックまたはスワイプでフェードアウト
let startY = 0;

window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) { // 上スワイプ判定
    fadeOutSplash();
  }
});

// PCクリック対応
splash.addEventListener("click", () => {
  fadeOutSplash();
});

function fadeOutSplash() {
  splash.classList.add("hidden");
  setTimeout(() => {
    content.classList.add("show");
  }, 1000); // ロゴが消えた後に本文をフェードイン
}
