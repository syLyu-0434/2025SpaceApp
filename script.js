// Array of pages for the picture book. Each page has an image and text.
const PAGES = [
  { img: 'assets/page1.png', text: '這是第一頁的文字內容。' },
  { img: 'assets/page2.png', text: '這是第二頁的文字內容。' },
  { img: 'assets/page3.png', text: '這是第三頁的文字內容。' },
  { img: 'assets/page4.png', text: '這是第四頁的文字內容。' },
  { img: 'assets/page5.png', text: '這是第五頁的文字內容。' }
];

let currentPage = 0;

const imageEl = document.getElementById('image');
const textEl = document.getElementById('text');
const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');
const progressBar = document.getElementById('progress-bar');

// Update the page content, controls, and progress bar
function updatePage() {
  const page = PAGES[currentPage];
  imageEl.src = page.img;
  textEl.textContent = page.text;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === PAGES.length - 1;
  progressBar.style.width = ((currentPage + 1) / PAGES.length * 100) + '%';
}

// Navigate to the previous page
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

// Navigate to the next page
nextBtn.addEventListener('click', () => {
  if (currentPage < PAGES.length - 1) {
    currentPage++;
    updatePage();
  }
});

// Enable keyboard navigation (left/right arrows)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevBtn.click();
  } else if (e.key === 'ArrowRight') {
    nextBtn.click();
  }
});

// Enable simple swipe navigation on touch devices
let touchStartX = null;
imageEl.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});
imageEl.addEventListener('touchend', (e) => {
  if (touchStartX !== null) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 30) {
      prevBtn.click();
    } else if (dx < -30) {
      nextBtn.click();
    }
    touchStartX = null;
  }
});

// Initialize the first page
updatePage();