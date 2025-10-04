// Minimal digital picture book logic
const PAGES = [
  { img: "assets/page1.png", text: "第一頁：清晨的城市醒來了，小小的光在窗邊跳舞。" },
  { img: "assets/page2.png", text: "第二頁：雲像輕柔的棉花糖，飄過學校的操場。" },
  { img: "assets/page3.png", text: "第三頁：主角聽見風在耳邊說祕密，輕得像羽毛。" },
  { img: "assets/page4.png", text: "第四頁：他把勇氣裝進口袋，準備踏出新的步伐。" },
  { img: "assets/page5.png", text: "第五頁：日落把世界染成金色，故事暫時，說完了。" },
];

let current = 0;
const pageImage = document.getElementById("pageImage");
const captionText = document.getElementById("captionText");
const pageInfo = document.getElementById("pageInfo");
const progressBar = document.getElementById("progressBar");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const stage = document.getElementById("stage");

function render() {
  const p = PAGES[current];
  pageImage.src = p.img;
  captionText.textContent = p.text;
  pageInfo.textContent = `${current + 1} / ${PAGES.length}`;
  progressBar.style.width = `${((current + 1) / PAGES.length) * 100}%`;
  btnPrev.disabled = current === 0;
  btnNext.disabled = current === PAGES.length - 1;
}

function go(delta) {
  const next = Math.min(PAGES.length - 1, Math.max(0, current + delta));
  if (next !== current) {
    current = next;
    render();
    stage.focus();
  }
}

btnPrev.addEventListener("click", () => go(-1));
btnNext.addEventListener("click", () => go(1));
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
});

// Basic touch swipe
let startX = null;
stage.addEventListener("touchstart", (e) => { startX = e.changedTouches[0].clientX; }, {passive:true});
stage.addEventListener("touchend", (e) => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 30) go(-1);
  if (dx < -30) go(1);
  startX = null;
}, {passive:true});

// Initial render
render();
